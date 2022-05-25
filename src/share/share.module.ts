import { Module } from '@nestjs/common'

import UserRepository from './domain/ports/userRepository'
import UserMongoRepository from './infrastructure/repositories/user-mongo.repository'

export const ShareAuthorizersMiddleSymbol = Symbol()

@Module({
  imports: [],
  controllers: [],
  providers: [
    { provide: UserRepository, useClass: UserMongoRepository },
    {
      provide: ShareAuthorizersMiddleSymbol,
      useFactory: (...authorizers) => authorizers,
      inject: [],
    },
  ],
  exports: [UserRepository, ShareAuthorizersMiddleSymbol],
})
export class ShareModule {}
