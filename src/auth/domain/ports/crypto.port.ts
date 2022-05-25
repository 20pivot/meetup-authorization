export default abstract class CryptoPort {
  abstract generate(password: string): Promise<string>
  abstract compare(
    clearPassword: string,
    hashPassword: string,
  ): Promise<boolean>
}
