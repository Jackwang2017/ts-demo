// 同名接口合并
interface InfoInter {
  name: string
  getRes(input: string): number
}
interface InfoInter {
  age: number
  getRes(input: number): string
}
let infoInter: InfoInter
infoInter = {
  name: 'daisen',
  age: 18,
  getRes(text: any): any {
    if (typeof text === 'string') {
      return text.length
    } else {
      return String(text)
    }
  }
}
// console.log(infoInter.getRes(228))

// 命名空间的同名合并
// namespace Validations {
//   export const numberReg = /^[0-9]+$/
//   export const checkNumber = () => {}
// }
// namespace Validations {
//   console.log(numberReg)
//   export const checkLetter = () => {}
// }

// 同名不同类型的合并 class和validations
// class Validations {
//   constructor() {}
//   public checkType() {}
// }
// namespace Validations {
//   export const numberReg = /^[0-9]+$/
// }
// console.dir(Validations)

// namespace和函数的合并
function countUp() {
  countUp.count++
}
namespace countUp {
  export let count = 0;
}
console.log(countUp.count)
countUp()
console.log(countUp.count)
countUp()
console.log(countUp.count)

// namespace和枚举的合并
enum Colors {
  red,
  green,
  blue
}
namespace Colors {
  export const yellow = 3;
}
console.log(Colors)
