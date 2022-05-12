// 交叉类型
// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//   // let res = <T & U>{}
//   let res = {} as T & U;
//   res = Object.assign(arg1, arg2);
//   return res;
// }
// mergeFunc({a: 'a'}, {b: 'b'})

// 联合类型
// const getLengthFunc = (content: string | number): number => {
//   if (typeof content === 'string') {
//     return content.length;
//   } else {
//     return content.toString().length;
//   }
// }
// console.log(getLengthFunc(12345))

// 类型保护
// const valueList = [123, 'abc'];
// const getRandomValue = () => {
//   const number = Math.random() * 10;
//   if (number < 5) { return valueList[0] }
//   else { return valueList[1] }
// }
// const item = getRandomValue();
// console.log(item);
// if ((item as string).length) {
//   console.log((item as string).length)
// } else {
//   console.log((item as number).toFixed())
// }
// 保护函数
// function isString(value: number | string): value is string {
//   return typeof value === 'string'
// }
// typeof 类型保护作用
// 必须是其中的 string/number/boolean/symbol中的一种
// if (typeof item === 'string') {
//   console.log(item.length)
// } else {
//   console.log(item.toFixed())
// }

// instanceof 类型保护
// class CreateByClass1 {
//   public age = 18;
//   constructor() {}
// }
// class CreateByClass2 {
//   public name = 'jhon';
//   constructor() {}
// }
// function getRandomItem() {
//   return Math.random() < 0.5 ? new CreateByClass1() : new CreateByClass2()
// }
// const item1 = getRandomItem();
// if (item1 instanceof CreateByClass1) {
//   console.log(item1.age)
// } else {
//   console.log(item1.name)
// }

// null / undefined
// let values = '123'
// values = undefined;
// string | undefined/ string | null / string | undefined | null
// const sumFunc = (x: number, y?: number) => {
//   return x + (y || 0)
// }
// const getLengthFunction = (value: string | null): number => {
//   // if (value === null) { return 0 }
//   // else { return value.length }
//   return (value || '').length;
// }
// 类型断言 ！
// function getSplicedStr(num: number | null): string {
//   function getRes(prefix: string) {
//     return prefix + num!.toFixed().toString();
//   }
//   // num = num || 0.1;
//   return getRes('lison-')
// }
// console.log(getSplicedStr(1.2))

// 类型别名
// type TypeString = string;
// let str2: TypeString;
// type PositionType<T> = { x: T, y: T }
// const position1: PositionType<number> = {
//   x: 1,
//   y: -2
// }
// const position2: PositionType<string> = {
//   x: 'abc',
//   y: 'jjjj'
// }
// 类型别名可以引用自己，只可以在属性中引用自身
// type Childs<T> = {
//   current: T,
//   child?: Childs<T>
// }
// let ccc: Childs<string> = {
//   current: 'first',
//   child: {
//     current: 'second',
//     child: {
//       current: 'third'
//     }
//   }
// }

// extends implements
// type Alias = {
//   num: number
// }
// interface Interface {
//   num: number
// }
// let _alias: Alias = {
//   num: 100
// }
// let _interface: Interface = {
//   num: 100
// }
// _alias = _interface

// 字面量类型
// type Name = 'Lison'
// const name3: Name = 'Lison';
// type Direction = 'north' | 'east' | 'south' | 'west'
// function getDirectionFirstLetter(direction: Direction) {
//   return direction.substr(0, 1);
// }
// console.log(getDirectionFirstLetter('east'))
// type Age = 18;  //数字字面量类型
// interface InfoInterface {
//   name: string
//   age: Age
// }
// const _info: InfoInterface = {
//   name: 'lisen',
//   age: 18
// }

/**
 * 可辨识联合两要素
 * 1. 具有普通的单例类型属性
 * 2. 一个类型别名包含了哪些类型的联合
 */
interface Square {
  kind: 'square',
  size: number
}
interface Rectangle {
  kind: 'rectangle',
  height: number,
  width: number
}
interface Circle {
  kind: 'circle',
  radius: number
}
type Shape = Square | Rectangle | Circle;
function getArea(s: Shape): number {
  switch(s.kind) {
    case 'square':
      return s.size ** 2; break;
    case 'rectangle':
      return s.height * s.width; break;
    case 'circle':
      return Math.PI * s.radius ** 2; break;
    // default: return undefined;
    default: return assertNever(s)
  }
}
function assertNever(value: never): never {
  throw new Error('Unexpected object:' + value)
}
