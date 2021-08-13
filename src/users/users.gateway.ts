// import {
//   SubscribeMessage,
//   WebSocketGateway,
//   WebSocketServer,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
// } from '@nestjs/websockets'
// import { Logger, UseGuards } from '@nestjs/common'
// import { Socket, Server } from 'socket.io'
// import { MessagesService } from './messages.service'
// import { Message } from './message.entity'
// import { WsJwtGuard } from '../auth/ws.guard'
//
// @WebSocketGateway() // todo использовать неймспейсы
// export class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
//
//   constructor (private readonly messagesService: MessagesService) {}
//
//   @WebSocketServer() server: Server
//   private logger: Logger = new Logger('MessagesGateway') // TODO: оптимизация работы с бд
//
//   @UseGuards(WsJwtGuard)
//   @SubscribeMessage('messages:getAll')
//   async getAllMessages () {
//     const messages = await this.messagesService.getAllMessages()
//     this.server.emit('messages:all', messages)
//   }
//
//   @SubscribeMessage('messages:add')
//   async addMessage (client: Socket, payload: Message) {
//     const { user, message } = payload
//
//     const lastMessage = await this.messagesService.addMessage(user, message)
//     this.server.emit('messages:new', lastMessage)
//   }
//
//   handleDisconnect (client: Socket) { // todo здесь менять статус клиента на офлайн
//     this.logger.log(`Client disconnected from message gateway: ${client.id}`)
//   }
//
//   async handleConnection (client: Socket, ...args: any[]) { // todo здесь менять статус клиента на онлайн
//     // todo: проверять наличие токена в БД, если токена нет, то отключать пользователя
//     // client.disconnect()
//     //console.log(JSON.stringify(client.handshake))
//
//     await this.getAllMessages()
//   }
// }
