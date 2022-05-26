import { Module } from '@nestjs/common'

import { SearchCase } from './aplication/search-case/search-case'
import { CaseRepositorySymbol } from './domain/repositories/case.repository'
import { CasesController } from './infrastructure/controllers/cases.controller'
import { CaseAuthorizerInterceptor } from './infrastructure/interceptors/case-authorizer.interceptor'
import { CasesAuthorizerInterceptor } from './infrastructure/interceptors/cases-authorizer.interceptor'
import { CaseInMemoryRepository } from './infrastructure/repositories/case-in-memory.repository'

export const CoreAuthorizersMiddleSymbol = Symbol()

@Module({
  imports: [],
  controllers: [CasesController],
  providers: [
    SearchCase,
    CasesAuthorizerInterceptor,
    CaseAuthorizerInterceptor,
    {
      provide: CaseRepositorySymbol,
      useClass: CaseInMemoryRepository,
    },
    {
      provide: CoreAuthorizersMiddleSymbol,
      useFactory: (...authorizers) => authorizers,
      inject: [CasesAuthorizerInterceptor, CaseAuthorizerInterceptor],
    },
  ],
  exports: [CoreAuthorizersMiddleSymbol],
})
export class CoreModule {}
