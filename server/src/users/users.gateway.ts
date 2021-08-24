import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Socket, Server } from 'socket.io'
import { UsersService } from './users.service'
import { AuthService } from '../auth/auth.service'
import { SessionsService } from '../sessions/sessions.service'


@WebSocketGateway()
export class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {

  constructor (
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private readonly sessionsService: SessionsService,
  ) {}

  @WebSocketServer() server: Server

  async getAllUsers () {
    const users = await this.usersService.gelAllUsers()

    const usersWithStatus = users.map(e => {
      e.isOnline = !!e.sessions.length
      delete e.sessions
      return e
    })

    this.server.emit('users:all', usersWithStatus)
  }

  async handleDisconnect (client: Socket) {
    await this.sessionsService.removeSession(client.id)
    await this.getAllUsers()
  }

  async handleConnection (client: Socket, ...args: any[]) {
    const { token } = client.handshake.auth

    const user = this.authService.validateJwtToken(token)

    !user && client.disconnect()

    await this.sessionsService.addSession(user.thirdPartyId, client.id)

    await this.getAllUsers()
  }
}
