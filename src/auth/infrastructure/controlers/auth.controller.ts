import { Body, Controller, Post, Res } from '@nestjs/common'
import { Response } from 'express'

import UnauthorizedError from '../../../share/domain/models/errors/unauthorized.error'
import { AuthService } from '../../aplication/auth.service'
import { UserData } from '../../domain/models/user-data'
import { UserLogin } from '../../domain/models/user-login'
import { UserLoginDto } from './dtos/user-login.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() userLoginDto: UserLoginDto,
    @Res() response: Response,
  ): Promise<UserData> {
    try {
      const userLogin = UserLogin.create(userLoginDto)
      const { token, userData } = await this.authService.login(userLogin)
      response.cookie('auth', token)
      return userData
    } catch (e) {
      throw new UnauthorizedError()
    }
  }
  /*
  @Post('refresh')
  refresh(): string {
    return this.appService.getHello()
  }

  @Post('register')
  register(): string {
    return this.appService.getHello()
  }

  @Post('logout')
  logout(): string {
    return this.appService.getHello()
  }

  @Post('change-password')
  changePassword(): string {
    return this.appService.getHello()
  }
 */
}
