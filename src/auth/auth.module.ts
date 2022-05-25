import { Module } from '@nestjs/common'

import { ShareModule } from '../share/share.module'
import { AuthService } from './aplication/auth.service'
import CryptoPort from './domain/ports/crypto.port'
import JwtPort from './domain/ports/jwt.port'
import CryptoBcryptAdapter from './infrastructure/adapters/crypto-bcrypt.adapter'
import JwtJsonwebtokenAdapter from './infrastructure/adapters/jwt-jsonwebtoken.adapter'
import { AuthController } from './infrastructure/controlers/auth.controller'

export const AuthAuthorizersMiddleSymbol = Symbol()

@Module({
  imports: [ShareModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    { provide: CryptoPort, useClass: CryptoBcryptAdapter },
    { provide: JwtPort, useClass: JwtJsonwebtokenAdapter },
    {
      provide: AuthAuthorizersMiddleSymbol,
      useFactory: (...authorizers) => authorizers,
      inject: [],
    },
  ],
  exports: [AuthAuthorizersMiddleSymbol],
})
export class AuthModule {}
