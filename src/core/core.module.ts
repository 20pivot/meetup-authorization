import { Module } from '@nestjs/common'

import { SearchCase } from './aplication/search-case/search-case'
import { CaseRepositorySymbol } from './domain/repositories/case.repository'
import { CaseInMemoryRepository } from './infrastructure/repositories/case-in-memory.repository'

export const CoreAuthorizersMiddleSymbol = Symbol()

@Module({
  imports: [],
  controllers: [],
  providers: [
    SearchCase,
    {
      provide: CaseRepositorySymbol,
      useClass: CaseInMemoryRepository,
    },
    {
      provide: CoreAuthorizersMiddleSymbol,
      useFactory: (...authorizers) => authorizers,
      inject: [],
    },
  ],
  exports: [CoreAuthorizersMiddleSymbol],
})
export class CoreModule {}
