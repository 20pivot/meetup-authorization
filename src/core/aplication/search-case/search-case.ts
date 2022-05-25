import { User } from '../../../share/domain/models/user'
import { Injectable } from '../../../share/infrastructure/dependency-injection'
import { UseCase } from '../../../share/infrastructure/use-case'

@Injectable()
export class SearchCase extends UseCase<
  [User, string],
  { title: string; description: string }
> {
  async run(user: User, caseId: string) {
    return {
      userId: 'lawyer-1',
      title: 'En Lexnet huele raro',
      description:
        'Lexnet es una aplicación del sistema judicial español para la consula de casos ' +
        'y notificaciones por parte de los abogados y procuradores de cada caso.' +
        'En una busqueda rápida en Google nos daremos cuenta de los innumerables fallos de seguridad cometidos.' +
        'Con un desembolo de 6 millones de euros ¿Qué esta pasando para tremenda chapuza?',
    }
  }
}
