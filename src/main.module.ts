import { Module } from '@nestjs/common'

import { AuthAuthorizersMiddleSymbol, AuthModule } from './auth/auth.module'
import { CoreAuthorizersMiddleSymbol, CoreModule } from './core/core.module'
import { ShareAuthorizersMiddleSymbol, ShareModule } from './share/share.module'

export const AuthorizersMiddleSymbol = Symbol()

@Module({
  imports: [AuthModule, ShareModule, CoreModule],
  controllers: [],
  providers: [
    {
      provide: AuthorizersMiddleSymbol,
      useFactory: (...authorizers) => authorizers.flat(),
      inject: [
        ShareAuthorizersMiddleSymbol,
        CoreAuthorizersMiddleSymbol,
        AuthAuthorizersMiddleSymbol,
      ],
    },
  ],
})
export class MainModule {}
