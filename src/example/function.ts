// es5的定义方式
// function add1(a1: number, b2: number): number {
//   return a1 + b2
// }
// const add2 = (a: number, b:number) => a + b;

let plus: (x:number, y:number) => number;
plus = (arg1: number, arg2: number): number => arg1 + arg2;
let arg3 = 3;
plus = (arg1: number, arg2: number) => arg1 + arg2 + arg3;

// interface Plus {
//   (x: number, y: number): number
// }
// type是类型别名
type Plus = (x: number, y: number) => number
type isString = string;
let addFunc: Plus;
addFunc = (arg1: number, arg2: number) => arg1 + arg2;

// addFunc = (arg1, arg2, arg3) => arg1 + arg2 + arg3;
type AddFunction = (arg1: number, arg2: number, arg3?: number) => number;
// let addFunction: AddFunction;
// addFunction = (x: number, y: number) => x + y;
// addFunction = (x: number, y: number, z: number) => x + y + z;

let addFunction = (x: number, y:number = 3) => x + y;
// console.log(addFunction(1, 2))

// const handleData = (arg1: number, ...args: number[]) => {
//   // ...
// }

// TS中函数的重载
function handleData(x: string): string[];
function handleData(x: number): number[];
function handleData(x: any): any {
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').map(item => Number(item))
  }
}
console.log(handleData('abc'))
console.log(handleData(123))