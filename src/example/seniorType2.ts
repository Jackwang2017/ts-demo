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
  readonly [P in keyof T]?: T[P]
}
type ReadonlyInfo1 = ReadonlyType<Info1>
let info11: ReadonlyInfo1 = {
  age: 18,
  name: 'lili',
  sex: 'man'
}
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
console.log(proxyProps.name.get())


