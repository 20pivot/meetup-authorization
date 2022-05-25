import { User } from '../models/user'

export default abstract class UserRepository {
  abstract find({ email: string }): Promise<User>
}
