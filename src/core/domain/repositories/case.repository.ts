import { UserId } from '../../../share/domain/models/user-id'

export interface CaseRepository {
  search(caseId: string): Promise<{ userId: UserId }>
}

export const CaseRepositorySymbol = Symbol()
