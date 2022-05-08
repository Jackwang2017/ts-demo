// class Point {
//   x: number
//   y: number
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   getPosition() {
//     return `(${this.x}, ${this.y})`
//   }
// }
// const point = new Point(1,2);
// console.log(point);

// class Parent {
//   public name: string;
//   constructor(name: string) {
//     this.name = name
//   }
// }

// class Child extends Parent {
//   constructor(name: string) {
//     super(name)
//   }
// }

// class Parent {
//   private age: number
//   constructor(age: number) {
//     this.age = age;
//   }
//   getAge() {
//     return this.age
//   }
// }
// const p = new Parent(18)
// console.log(p.getAge())

// class Child extends Parent {
//   constructor(age: number) {
//     super(age)
//     // console.log(super.age)
//   }
// }

// protected受保护
// class Parent {
//   protected age: number
//   constructor(age: number) {
//     this.age = age;
//   }
//   protected getAge() {
//     return this.age
//   }
// }
// const p = new Parent(18)

// class Child extends Parent {
//   constructor(age: number) {
//     super(age)
//     // console.log(super.age)
//     // console.log(super.getAge())
//   }
// }

// const child = new Child(17);

// readonly修饰符
// class UserInfo {
//   public readonly name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// const userInfo = new UserInfo('lisa')
// console.log(userInfo)
// userInfo.name = 'hello'

// public private protected
// class A {
//   constructor(public name: string) {}
// }
// const a22 = new A('lisa');
// console.log(a22.name)

// class Parent {
//   private static age = 12;
//   public static getAge() {
//     return Parent.age
//   }
//   constructor() {}
// }
// const p = new Parent()
// console.log(p.age)
// console.log(Parent.getAge())

class Info {
  public name: string
  public age?: number
  private _infostr: string
  constructor(name: string, age?: number, public sex?: string) {
    this.name = name;
    this.age = age;
    // this.sex = sex;
  }
  get infoStr() {
    return `${this.name}: ${this.age}`
  }
  set infoStr(value) {
    console.log(`setter: ${value}`)
    this._infostr = value;
  }
}
const info1 = new Info('lisa');
const info3 = new Info('lisa', 18);
const info4 = new Info('lisa', 18, 'femal');
console.log(info4)
info4.infoStr = 'hello world'
console.log(info4.infoStr)