let name2 = 'lili'
// name = 123;
// : Array<number|string>
let arr5 = [1, 'a']
// arr5 = [2, 'b', false];

// 上下文类型推断
// window.onmousedown = (mouseEvent) => {
//   console.log(mouseEvent)
// }

// 类型兼容性
interface Info {
  name: string,
  info: { age: number }
}
let infos: Info;
const infos1 = {name: 'lili', info: { age: 18 }}
const infos2 = {age: 18}
const infos3 = {name: 'lili', age: 15}
// infos = infos1;
// infos = infos2;
infos = infos1;

// 参数个数
// let x = (a: number) => 0
// let y = (b: number, c: string) => 0
// y = x;
// x = y;

// 参数类型
// let x = (a: number) => 0
// let y = (b: string) => 0
// x = y;

// 可选参数和剩余参数
const getSum = (arr: number[], callback: (...arg: number[]) => number): number => {
  return callback(...arr)
}

let result = getSum([1,3, 5], (...args: number[]): number => args.reduce((a, b) => a+b, 0))
console.log(result)

// 函数参数双向协变
let funcA = (arg: number | string): void => {}
let funcB = (arg: number): void => {}
// funcA = funcB
// funcB = funcA

// 返回值类型
let x = (): string | number => 0
let y = (): string => 'a'
let z = (): boolean => true
// x = y
// y = x;

// 函数的重载
function merge(arg1: number, arg2: number): number;
function merge(arg1: string, arg2: string): string;
function merge(arg1: any, arg2: any) {
  return arg1 + arg2
}
function sum(arg1: number, arg2: number): number;
function sum(arg1: any, arg2: any): any {
  return arg1 + arg2
}
let func = merge;
// func = sum

// 枚举类型
enum User {
  On,
  Off
}
enum Customer {
  Dog,
  Cat
}
let s = User.On
// s = Customer.Dog;

// class AnimalClass {
//   public static age: number
//   constructor(public name: string) {}
// }
// class PeopleClass {
//   public static age: string
//   constructor(public name: string) {}
// }
// class FoodsClass {
//   constructor(public name: number) {}
// }

// let animal: AnimalClass
// let people: PeopleClass;
// let foods: FoodsClass;
// animal = people;
// people = animal
// animal = foods


// protected private会影响类型的兼容性
// class Parent {
//   private age: number
//   constructor() {}
// }
// class Children extends Parent {
//   constructor() {
//     super()
//   }
// }
// class OtherClass {
//   private age: number
//   constructor() {}
// }
// const children: Parent = new Children();
// const other: Parent = new OtherClass();

// 泛型的兼容性
interface Data<T> {
  type: T
}
let data1: Data<number>;
let data2: Data<string>;
// data1 = data2;