interface NameInfo {
  firstName: string,
  lastName: string
}
const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}

// console.log(getFullName({firstName: 'hello',lastName: 'Wang'}))

interface Vegetabel {
  color?: string,
  readonly name: string,
// 索引签名
  // [prop: string]: any
}

const getVegetable = ({color, name}: Vegetabel) => {
  return `A ${ color ? (color + ' ') : ' ' }${name}`
}
// console.log(getVegetable({name: 'tomato'}))
// console.log(getVegetable({name: 'tomato', size: 10, age: 22} as Vegetabel))

interface ArrInter {
  0: number,
  readonly 1: string
}

let arr3: ArrInter = [123, 'sss']
// arr3[1] = 'aa'

interface AddFunc {
  (num1: number, num2: number): number
}

type AddFunc1 = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2;

interface RoleDic {
  [id: number]: string
}
const role1: RoleDic = {
  0: 'hello',
  1: 'eeee'
}

interface Vegetables {
  color: string
}
interface Tomato extends Vegetables {
   radius: number
}
interface Carrot extends Vegetables {
  length: number
}
const tomato: Tomato = {
  radius: 2,
  color: 'green'
}
const carrot: Carrot = {
  length: 2,
  color: 'orange'
}

// 在js中可以正常运行
// let countUp = () => {
//   countUp.count++;
// }
// countUp.count = 0;
// 第二种方式
// const countUp = (() => {
//   let count = 0;
//   return () => {
//     return count++
//   }
// })();
// console.log(countUp())
// console.log(countUp())
// console.log(countUp())

// 混合类型接口  难，重点掌握
interface Counter {
  (): void,
  count: number
}
const getCounter = (): Counter => {
  const c = () => { c.count++ }
  c.count = 0;
  return c
}
const counter: Counter = getCounter();
counter();
console.log(counter.count)
counter();
console.log(counter.count)
counter();
console.log(counter.count)