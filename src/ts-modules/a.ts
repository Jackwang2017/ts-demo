export interface FuncInterface {
  (arg: number): string
  name: string
}
export class ClassC {
  constructor() {}
}
class ClassD {
  constructor() {}
}
export { ClassD }
export { ClassD as ClassNamedD }
export * from './b'
export { name } from './b'
export { name as NameProp } from './b'