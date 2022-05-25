import { Request as ExpressRequest, Response as ExpressResponse } from 'express'

import { User } from '../domain/models/user'

export type VerifiedParams = {
  [key: string]: { value: string; verified: boolean }
}
export interface Request extends ExpressRequest {
  verified: boolean
  verifiedParams: VerifiedParams
  user: User
}

export type Response = ExpressResponse
