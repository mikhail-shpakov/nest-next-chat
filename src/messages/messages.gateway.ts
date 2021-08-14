import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets'
import { Socket, Server } from 'socket.io'
import { MessagesService } from './messages.service'
import { Message } from './message.entity'
import { AuthService } from '../auth/auth.service'


@WebSocketGateway() // todo использовать неймспейсы
export class MessagesGateway implements OnGatewayConnection {

  constructor (
    private readonly messagesService: MessagesService,
    private readonly authService: AuthService,
  ) {}

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

    !this.authService.validateJwtToken(token) && client.disconnect()

    await this.getAllMessages()
  }
}
