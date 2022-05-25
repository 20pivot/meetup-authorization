import { JwtPayload, sign, verify } from 'jsonwebtoken'

import { JWT_EXPIRES_IN, JWT_SECRET } from '../../../share/infrastructure/env'
import { UserData } from '../../domain/models/user-data'
import JwtPort from '../../domain/ports/jwt.port'

export default class JwtJsonwebtokenAdapter implements JwtPort {
  async generate(userData: UserData): Promise<string> {
    return sign(userData, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
  }
  async verifyAndDecode(token: string): Promise<UserData> {
    const payload = verify(token, JWT_SECRET) as JwtPayload
    return UserData.create(payload as UserData)
  }
}
