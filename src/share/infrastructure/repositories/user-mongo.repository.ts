import { Model, Schema } from 'mongoose'

import { User } from '../../domain/models/user'
import UserRepository from '../../domain/ports/userRepository'
import connection from './mongo-connection'

export default class UserMongoRepository implements UserRepository {
  userModel: typeof Model

  constructor() {
    this.userModel = connection.model(
      'User',
      new Schema({
        email: String,
        password: String,
      }),
    )
  }

  async find({ email }: { email: string }): Promise<User> {
    const user = await this.userModel.findOne({ email }).exec()
    return User.build(user)
  }
}
