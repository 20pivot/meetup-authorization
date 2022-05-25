import NotFoundError from '../../share/domain/models/errors/not-found.error'
import UnauthorizedError from '../../share/domain/models/errors/unauthorized.error'
import UserRepository from '../../share/domain/ports/userRepository'
import { Injectable } from '../../share/infrastructure/dependency-injection'
import { UserData } from '../domain/models/user-data'
import { UserLogin } from '../domain/models/user-login'
import CryptoPort from '../domain/ports/crypto.port'
import JwtPort from '../domain/ports/jwt.port'

@Injectable()
export class AuthService {
  constructor(
    private userPort: UserRepository,
    private cryptoPort: CryptoPort,
    private jwtPort: JwtPort,
  ) {}

  async login(
    userLogin: UserLogin,
  ): Promise<{ token: string; userData: UserData }> {
    const user = await this.userPort.find({ email: userLogin.email })
    if (!user) {
      throw new NotFoundError('email', userLogin.email)
    }

    if (!(await this.cryptoPort.compare(userLogin.password, user.password))) {
      throw new UnauthorizedError()
    }

    const userData = UserData.create(user)
    const token = await this.jwtPort.generate(userData)

    return { userData, token }
  }
}
