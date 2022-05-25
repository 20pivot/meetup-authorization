import { UserData } from '../models/user-data'

export default abstract class JwtPort {
  abstract generate(userData: UserData): Promise<string>
  abstract verifyAndDecode(token): Promise<UserData>
}
