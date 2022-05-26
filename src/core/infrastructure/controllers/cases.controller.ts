import { Controller, Get, Param, Req } from '@nestjs/common'

import { Request } from '../../../share/infrastructure/http'
import { SearchCase } from '../../aplication/search-case/search-case'

@Controller('cases')
export class CasesController {
  constructor(private searchCase: SearchCase) {}

  @Get(':caseId')
  getCase(@Req() request: Request, @Param() caseId: string) {
    return this.searchCase.run(request.user, caseId)
  }
}
