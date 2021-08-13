import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets'
import { Socket, Server } from 'socket.io'
import { MessagesService } from './messages.service'
import { Message } from './message.entity'
import { verify } from 'jsonwebtoken'
import { config } from 'dotenv'

config()

@WebSocketGateway() // todo использовать неймспейсы
export class MessagesGateway implements OnGatewayConnection {

  private readonly JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

  constructor (private readonly messagesService: MessagesService) {}

  @WebSocketServer() server: Server

  @SubscribeMessage('messages:getAll')
  async getAllMessages () {
    const messages = await this.messagesService.getAllMessages()
    this.server.emit('messages:all', messages)
  }

  @SubscribeMessage('messages:add')
  async addMessage (client: Socket, payload: Message) {
    // todo любой пользователь может подставить рандомное значение
    //  id и записать сообщение от имени другого пользователя
    const { user, message } = payload

    const lastMessage = await this.messagesService.addMessage(user, message)
    this.server.emit('messages:new', lastMessage)
  }

  async handleConnection (client: Socket, ...args: any[]) {
    const { token } = client.handshake.auth
    const verifyToken = verify(token, this.JWT_SECRET_KEY)

    !verifyToken && client.disconnect()

    await this.getAllMessages()
  }
}
