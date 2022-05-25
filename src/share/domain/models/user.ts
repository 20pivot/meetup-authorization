import { UserId } from './user-id'

export type UserMetadata = Record<string, any>

export class User {
  constructor(
    public id: UserId,
    public email: string,
    public password: string,
    public metadata: UserMetadata = {},
  ) {}

  static build({
    id,
    email,
    password,
    metadata = {},
  }: {
    id: UserId
    email: string
    password: string
    metadata: UserMetadata
  }) {
    return new User(id, email, password, metadata)
  }
}
