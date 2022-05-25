import Error, { ErrorCodes } from './error'

export default class InvalidArgumentError extends Error {
  code = ErrorCodes.INVALID_ARGUMENT

  constructor(message: string) {
    super(message)
  }
}
