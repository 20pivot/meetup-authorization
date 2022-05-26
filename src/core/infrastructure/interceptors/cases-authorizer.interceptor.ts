import ForbiddenError from '../../../share/domain/models/errors/forbidden.error'
import { Request } from '../../../share/infrastructure/http'
import { AuthorizerMiddleInterceptor } from '../../../share/infrastructure/interceptors/authorizer-middle.interceptor'

export class CasesAuthorizerInterceptor extends AuthorizerMiddleInterceptor {
  constructor() {
    super(/\/cases\//)
  }

  async authorize(request: Request): Promise<void> {
    if (request.user.metadata.role === 'lawyer') {
      request.verified = true
    } else {
      throw new ForbiddenError('user should be lawyer')
    }
  }
}
