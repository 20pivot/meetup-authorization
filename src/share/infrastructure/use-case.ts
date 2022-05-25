export abstract class UseCase<Argument extends any[], Return> {
  public abstract run(...args: Argument): Promise<Return>
}
