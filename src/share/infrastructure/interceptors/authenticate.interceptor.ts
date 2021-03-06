import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'

import UnauthorizedError from '../../domain/models/errors/unauthorized.error'
import { Request } from '../http'

@Injectable()
export class AuthenticateInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<Request>()
    const token = request.header('Authorization')
    if (!/.+token-.+/.test(token)) {
      throw new UnauthorizedError()
    }
    request.user = {
      id: token.at(-1) as any,
      metadata: {
        role: /-(\w+)-/.exec(token)[1],
      },
    } as any
    return next.handle()
  }
}
