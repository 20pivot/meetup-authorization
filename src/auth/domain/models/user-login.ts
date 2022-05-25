export class UserLogin {
  constructor(public email: string, public password: string) {}

  static create({ email, password }: { email: string; password: string }) {
    return new UserLogin(email, password)
  }
}
