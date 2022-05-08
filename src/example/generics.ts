// const getArray = (value: any, times: number = 5): any[] => {
//   return new Array(times).fill(value)
// }
// console.log(getArray('abc', 3))

// const getArray = <T>(value: T, times: number = 5): T[] => {
//   return new Array(times).fill(value)
// }
// console.log(getArray<number>(2, 6))

// const getList = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//   return new Array(times).fill([param1, param2])
// }
// getList<number, string>(1, 'a', 3).forEach(item => {
//   console.log(item[0])
//   console.log(item[1])
// })

// 类型别名方式
// type GetArray = <T>(arg: T, times: number) => T[];
// let getArray: GetArray = (arg: any, times: number) => {
//   return new Array(times).fill(arg)
// }

// 接口方式, 注意泛型的位置（有2个）
// interface GetArray {
//   <T>(arg: T, times: number): T[]
// }
// interface GetList<T> {
//   (arg: T, times: number): T[],
//   array: T[]
// }

// 泛型约束，让泛型继承一个类型
interface ValueWithLength {
  length: number
}
const getArray = <T extends ValueWithLength>(arg: T, times): T[] => {
  return new Array(times).fill(arg)
}
getArray([1, 2], 2)
getArray('1234', 2)
getArray({length: 3}, 2)
// getArray(55, 2)

// keyof 是高阶类型
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName]
}
const objs = {
  a: 'a',
  b: 'b'
}
getProps(objs, 'a')
// getProps(objs, 'c')