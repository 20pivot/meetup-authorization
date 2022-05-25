export type Dictionary<V = any> = { [key: string | number]: V }

export type ObjectKeysFromValues<
  O extends { [key: string | number]: string | number },
  V = string,
> = Record<O[keyof O], V>
