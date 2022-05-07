let v: void;
v = undefined;
// v = null;
const consoleText = (text: string): void => {
  console.log(text);
}
consoleText('abbb');

let u: undefined;
u = undefined;
let n2: null;
n2 = null;
// const infiniteFunc = ():never => {
//   while(true) {}
// }

// let neverVariable = (() => {
//   while(true) {}
// })();
// n2 = neverVariable;
// u = neverVariable;

let obj = {name: 'lison'}
let obj2 = obj;
obj2.name = 'L';
console.log(obj)
function getObj(obj: object): void {
  console.log(obj)
}
getObj(obj2)

// 类型断言
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}
getLength(123)
getLength('jjjjj')