import { Dictionary } from '../typescript'

export default abstract class MyError implements Error {
  code: ErrorCodes

  constructor(public message: string, public meta?: Dictionary) {}

  get name() {
    return this.code
  }
}

export enum ErrorCodes {
  UNAUTHORIZED = '040100',
  FORBIDDEN = '040300',
  NOT_FOUND = '040400',

  NOT_IMPLEMENTED = '050100',
  NOT_IMPLEMENTED_AUTHORIZATION = '050101',
  INVALID_ARGUMENT = '05001',
}
