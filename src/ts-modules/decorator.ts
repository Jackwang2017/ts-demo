// function setProp () {
//   return function (target) {
//     // ...
//   }
// }
// 装饰器从上到下依次执行，装饰器可以叠加
// @setProp()
// @setName()
// @setAge()
// target
// function setName() {
//   console.log('get setName')
//   return (target) => {
//     console.log('setName')
//   }
// }
// function setAge() {
//   console.log('get setAge')
//   return (target) => {
//     console.log('setAge')
//   }
// }
// @setProp()
// @setName()
// @setAge()
// class ClassDec {
  
// }
// let sign = null;
// function setName(name: string) {
//   return (target: new() => any) => {
//     sign = target
//     console.log(target.name)
//   }
// }

// @setName('lisen')
// class ClassDesc {
//   constructor() {}
// }
// console.log(sign === ClassDesc)
// console.log(sign === ClassDesc.prototype.constructor)

// 装饰器可以修改类属性
// function addName(constructor: new() => any) {
//   constructor.prototype.name = 'dysen';
// }
// @addName
// class ClassD {}
// interface ClassD {
//   name: string
// }
// const d = new ClassD()
// console.log(d.name)
// 类装饰器
// function classDecorator<T extends { new(...args: any[]): {}}>(target: T) {
//   return class extends target {
//     public newProperty = 'new property'
//     public hello = 'override'
//   }
// }
// function classDecorator(target: any): any {
//   return class {
//     public newProperty = 'new property'
//     public hello = 'override'
//   }
// }
// @classDecorator
// class Greeter {
//   public property = 'property'
//   public hello: string
//   constructor(m: string) {
//     this.hello = m
//   }
// }
// console.log(new Greeter('world'))

// 方法装饰器，用来处理类中的方法

// interface ObjWithAnyKeys {
//   [key: string]: any
// }
// let obj12: ObjWithAnyKeys = {}
// Object.defineProperty(obj12, 'name', {
//   value: 'lisen',
//   writable: false,
//   configurable: true,
//   enumerable: true
// })
// console.log(obj12.name)
// obj12.name = 'test'
// console.log(obj12.name)
// %%%%%%%%%需要研究target代表什么？
// function enumerable(bool: boolean): any {
//   return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
//     // console.log(target, propertyName)
//     // descriptor.enumerable = bool
//     return {
//       value() {
//         return 'not age'
//       },
//       enumerable: bool,
//     }
//   }
// }
// class ClassF {
//   constructor(public age: number) {}
//   @enumerable(true)
//   public getAge() {
//     return this.age
//   }
// }
// const classF = new ClassF(18)
// console.log(classF)
// console.log(classF.getAge())

// function enumerable(bool: boolean) {
//   return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
//     descriptor.enumerable = bool
//   }
// }
// class ClassG {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   @enumerable(false)
//   get name() {
//     return this._name
//   }
//   set name(name) {
//     this._name = name
//   }
// }

// const classG = new ClassG('lisen')
// for(const key in classG) {
//   console.log(key)
// }

// 属性装饰器
// function printPropertyName(target: any, propertyName: string) {
//   console.log(propertyName)
// }
// class ClassH {
//   @printPropertyName
//   public name: string;
// }

// 参数装饰器
function required(target: any, propertName: string, index: number) {
  console.log(`修饰的是${propertName}的第${index + 1}个参数`)
}
class ClassI {
  public name: string = 'lison';
  public age: number = 18;
  getInfo(prefix: string, @required infoType: string): any {
    return prefix + ' ' + this[infoType]
  }
}
interface ClassI {
  [key: string]: string | number | Function
}
const classI = new ClassI();
classI.getInfo('hihi', 'age')
