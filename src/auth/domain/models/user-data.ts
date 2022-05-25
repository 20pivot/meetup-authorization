export class UserData {
  constructor(public email: string) {}

  static create({ email }: { email: string }) {
    return new UserData(email)
  }
}
