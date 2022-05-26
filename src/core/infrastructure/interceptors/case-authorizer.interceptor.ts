import { Inject } from '@nestjs/common'

import ForbiddenError from '../../../share/domain/models/errors/forbidden.error'
import { Request } from '../../../share/infrastructure/http'
import { AuthorizerMiddleInterceptor } from '../../../share/infrastructure/interceptors/authorizer-middle.interceptor'
import {
  CaseRepository,
  CaseRepositorySymbol,
} from '../../domain/repositories/case.repository'

export class CaseAuthorizerInterceptor extends AuthorizerMiddleInterceptor {
  constructor(
    @Inject(CaseRepositorySymbol) private caseRepository: CaseRepository,
  ) {
    super(/\/:caseId/)
  }

  async authorize(request: Request): Promise<void> {
    const legalCase = await this.caseRepository.search(request.params.caseId)
    if (request.user.id === legalCase.userId) {
      request.verifiedParams.caseId.verified = true
    } else {
      throw new ForbiddenError('user should be the owner of the case')
    }
  }
}
