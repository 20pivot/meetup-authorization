import { Injectable } from '@nestjs/common'
import { compare, hash } from 'bcryptjs'

import CryptoPort from '../../domain/ports/crypto.port'

@Injectable()
export default class CryptoBcryptAdapter implements CryptoPort {
  generate(password: string): Promise<string> {
    return hash(password, 10)
  }

  compare(clearPassword: string, hashPassword: string): Promise<boolean> {
    return compare(clearPassword, hashPassword)
  }
}
