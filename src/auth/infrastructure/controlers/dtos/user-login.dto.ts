import * as Joi from 'joi'
import { CREATE, JoiSchema, JoiSchemaOptions } from 'nestjs-joi'

@JoiSchemaOptions({
  allowUnknown: false,
})
export class UserLoginDto {
  @JoiSchema(Joi.string().required())
  @JoiSchema([CREATE], Joi.string().optional())
  email!: string

  @JoiSchema(Joi.string().required())
  @JoiSchema([CREATE], Joi.string().required())
  password!: string
}
