import InvalidArgumentError from '../../domain/models/errors/invalid-argument.error'
import { ValueObject } from './value-object'

export class NumberValueObject implements ValueObject<number> {
  constructor(
    private num: number,
    private config?: { min?: number; max?: number },
  ) {
    this.ensureIsNumber()
    this.ensureIsSmallEnough()
    this.ensureIsBigEnough()
  }

  private ensureIsNumber(): void {
    if (!Number.isFinite(this.num)) {
      throw new InvalidArgumentError(
        `${this.constructor.name} must be a number`,
      )
    }
  }
  private ensureIsSmallEnough(): void {
    if (Number.isFinite(this.config?.min) && this.num <= this.config.min) {
      throw new InvalidArgumentError(
        `${this.constructor.name} must be greater or equal than ${this.config.min}`,
      )
    }
  }

  private ensureIsBigEnough(): void {
    if (Number.isFinite(this.config?.max) && this.num >= this.config.max) {
      throw new InvalidArgumentError(
        `${this.constructor.name} must be less or equal than ${this.config.max}`,
      )
    }
  }

  public get value(): number {
    return this.num
  }

  public toString(): string {
    return this.num.toString()
  }
}
