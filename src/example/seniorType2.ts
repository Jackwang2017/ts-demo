// // this的讲解
// class Counter {
//   constructor(public count: number = 0) {}
//   public add(value: number) {
//     this.count += value
//     return this
//   }
//   public substract(value: number) {
//     this.count -= value
//     return this
//   }
// }
// let counter2 = new Counter(10);
// console.log(counter2.add(3).substract(1))

// class PowCounter extends Counter {
//   constructor(public count: number = 0) {
//     super(count)
//   }
//   public pow(value: number) {
//     this.count = this.count ** value;
//     return this
//   }
// }
// let powCounter = new PowCounter(2);
// console.log(powCounter.pow(3).add(1).substract(3))

// 索引类型查询和索引访问
// keyof
interface InfoInterfaceAdvanced {
  name: string;
  age: number;
}
let infoProp: keyof InfoInterfaceAdvanced;
infoProp = 'name';
infoProp = 'age';
// infoProp = 'sez';
// Array<T[K]>
function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
  return names.map(item => obj[item])
}
const infoObj = {
  name: 'lili',
  age: 18
}
let infoValues: (string | number)[] = getValue(infoObj, ['name', 'age']);
// console.log(infoValues)

// []索引访问操作符
type NameTypes = InfoInterfaceAdvanced['name'];
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}

interface Objs<T> {
  [key: string]: T
}
const objs1: Objs<number> = {
  age: 18
}
let keys: keyof Objs<number>['name'];

interface Type {
  a: never;
  b: never;
  c: string;
  d: number;
  e: undefined;
  f: null;
  g: object
}
// Keyof 返回非never/null/undefined组成的类型
type Test = Type[keyof Type];

// 映射类型，借助旧类型创建新类型
interface Info1 {
  age: number;
  name: string;
  sex: string;
}
// 这里的in是for...in遍历键值；T[P]表示T对象下P属性的值
// 这是一个简单的映射类型
type ReadonlyType<T> = {
  +readonly [P in keyof T]?: T[P]
}
type ReadonlyInfo1 = ReadonlyType<Info1>
let info11: ReadonlyInfo1 = {
  age: 18,
  name: 'lili',
  sex: 'man'
}
// 移除特定修饰符 readonly和？
type RemoveReadonlyInfo2<T> = {
  -readonly [P in keyof T]-?: T[P]
}
type Info1WithoutReadonly = RemoveReadonlyInfo2<ReadonlyInfo1>
// info11.name = 'jonon'
// Readonly Partial是内置的TS对象，可以直接使用
// type Atom = Readonly<Info1>
// type Atom1 = Partial<Info1>
// Pick Record是内置的映射类型, 源码在typescript/lib.es5.d.ts
// type Pick22<T, K extends keyof T> = {
//   [P in K]: T[P];
// }
interface Info2 {
  name: string;
  age: number;
  address: string;
}
const info5: Info2 = {
  name: 'lison',
  age: 18,
  address: 'shanghai'
}
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const res: any = {};
  keys.map(key => {
    res[key] = obj[key]
  })
  return res;
}
const nameAddAddress = pick(info5, ['name', 'address']);
// console.log(nameAddAddress);
// Record
function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> {
  const res: any = {};
  for(const key in obj) {
    res[key] = f(obj[key])
  }
  return res;
}
const names = {0: 'hello', 1: 'world', 2: 'bye'};
const lengths = mapObject(names, (s) => s.length);
// console.log(lengths)

// 同态
type Proxy<T> = {
  get(): T;
  set(value: T): void;
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}
function proxify<T>(obj: T): Proxify<T> {
  const result = {} as Proxify<T>
  for(const key in obj) {
    result[key] = {
      get: () => obj[key],
      set: (value) => obj[key] = value,
    }
  }
  return result;
}
let props = {
  name: 'lison',
  age: 18
}
let proxyProps = proxify(props);
// console.log(proxyProps)
proxyProps.name.set('war');
// console.log(proxyProps.name.get())

// 对映射类型对象进行拆包
function unproxify<T>(t: Proxify<T>): T {
  const result = {} as T;
  for(const k in t) {
    result[k] = t[k].get();
  }
  return result;
}
let originalProps = unproxify(proxyProps);
console.log(originalProps)

// 增加或删除修饰符， 参见RemoveReadonlyInfo2

const stringIndex = 'a'
const numberIndex = 1;
const symbolIndex = Symbol();
// string number symbol可作为属性名
type Objs2 = {
  [stringIndex]: string;
  [numberIndex]: number;
  [symbolIndex]: symbol;
}
type keysType = keyof Objs2;
type ReadonlyTypes<T> = {
  readonly [P in keyof T]: T[P]
}
let objs3: ReadonlyTypes<Objs2> = {
  a: 'abc',
  1: 20,
  [symbolIndex]: Symbol()
}
// objs3.a = 'cde';

type MapToPromise<T> = {
  [K in keyof T]: Promise<T[K]>
}
type Tuple = [number, string, boolean];
type promiseTuple = MapToPromise<Tuple>;

let tuple1: promiseTuple = [
  new Promise((resolve, reject) => resolve(1)),
  new Promise((resolve, reject) => resolve('work')),
  new Promise((resolve, reject) => resolve(true))
]

// unknown
// 1. 任何类型都可以赋值给unknown类型
let value1: unknown;
value1 = 'awoke';
value1 = 123;
// 2. 如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他任何类型，此时
// 它只能赋值给unknown或any类型
let value2: unknown;
// let value3: string = value2;
value1 = value2;
// 3. 如果没有类型断言或基于控制流的类型细化时，不能在它上面进行任何操作
let value4: unknown;
// value4 += 1;
// 4. unknown与任何其他类型组成的交叉类型，最后都等于其他类型
type type1 = string & unknown
type type2 = number & unknown
type type3 = unknown & unknown
type type4 = unknown & string[]
// 5. unknown与任何其他类型（除了any）组成的联合类型，都等于unknown类型
type type5 = unknown | string;
type type6 = any | unknown;
type type7 = unknown | number[];
// 6. never类型是unknown的子类型
type type8 = never extends unknown ? true : false;
// 7. keyof unknown等于类型never
type type9 = keyof unknown;
// 8. 只能对unknown进行等或不等的操作，不能进行其他操作
// value1 === value2;
// value1 !== value2;
// value1 += value2;
// 9. unknown类型的值不能访问它的属性、作为函数调用和作为类创建实例
let value10: unknown
// value10.age;
// value10();
// new value10();
// 10. 使用映射类型时如果遍历的是unknown类型，则不会映射任何属性
type Types1<T> = {
  [P in keyof T]: number
}
type type11 = Types1<any>;
type type12 = Types1<unknown>;

// 条件类型
// T extends U ? X : Y
type Types2<T> = T extends string ? string : number;
// let index: Types2<false>

// 分布式条件类型
// type TypeName<T> = T extends any ? T : never;
// type Type3 = TypeName<string | number>

type TypeName<T> = 
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean :
    T extends undefined ? undefined :
    T extends () => void ? () => void :
    object
type Type4 = TypeName<() => void>
type Type5 = TypeName<string[]>
type Type6 = TypeName<(() => void) | string[]>

type Diff<T, U> = T extends U ? never : T;
type Test2 = Diff<string | number | boolean, undefined | number>;

type Type7<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]
interface Part {
  id: number;
  name: string;
  subparts: Part[];
  undatePart(newName: string): void
}
type Test1 = Type7<Part>

// 条件类型的推断 infer
type Type8<T> = T extends any[] ? T[number] : T;
type Test3 = Type8<string[]>
type Test4 = Type8<string>

type Type9<T> = T extends Array<infer U> ? U : T;
type Test5 = Type9<string[]>
type Test6 = Type9<string>

// 内置条件类型 Exclude<T, U>
type Type10 = Exclude<'a' | 'b' | 'c', 'a'>
// Extract<T, U>
type Type11 = Extract<'a' | 'b' | 'c', 'a' | 'b'>
// NonNullable<T>
type Type12 = NonNullable<string | number | null | undefined>
// ReturnType<T>
type Type13 = ReturnType<() => string>
type Type14 = ReturnType<() => void>
// InstanceType<T> 源码来自 typescript/lib.es5.d.ts
class AClass {
  constructor() {}
}
type T1 = InstanceType<typeof AClass>
type T2 = InstanceType<any>
type T3 = InstanceType<never>
// type T4 = InstanceType<string>
