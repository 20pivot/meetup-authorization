import { CaseRepository } from '../../domain/repositories/case.repository'

export class CaseInMemoryRepository implements CaseRepository {
  async search(): Promise<any> {
    return { userId: '1' }
  }
}
