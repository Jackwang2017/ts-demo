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

// class Info {
//   public name: string
//   public age?: number
//   private _infostr: string
//   constructor(name: string, age?: number, public sex?: string) {
//     this.name = name;
//     this.age = age;
//     // this.sex = sex;
//   }
//   get infoStr() {
//     return `${this.name}: ${this.age}`
//   }
//   set infoStr(value) {
//     console.log(`setter: ${value}`)
//     this._infostr = value;
//   }
// }
// const info1 = new Info('lisa');
// const info3 = new Info('lisa', 18);
// const info4 = new Info('lisa', 18, 'femal');
// console.log(info4)
// info4.infoStr = 'hello world'
// console.log(info4.infoStr)

// abstract class People {
//   constructor(public name: string) {}
//   public abstract printName(): void;
// }
// class Man extends People {
//   constructor(name: string) {
//     super(name)
//     this.name = name;
//   }
//   public printName(): void {
//       console.log(this.name)
//   }
// }
// const m = new Man('liso');
// m.printName();

// abstract class People {
//   abstract name: string;
//   abstract get insideName(): string;
//   abstract set insideName(value: string);
// }
// class P extends People {
//   public name: string;
//   public insideName: string;
// }

class People {
  constructor(public name: string){}
}
let p2: People = new People('lisa')
class Animal {
  constructor(public name: string){}
}
p2 = new Animal('heimao')

// 接口与类的关系
interface FoodInterface {
  type: string;
}
// 类实现接口
class FoodClass implements FoodInterface {
  public type: string;
}
// 接口继承类，只继承类的成员和实现类的方式
class A {
  protected name: string;
}
interface I extends A {
  
}
class B extends A implements I {
  public name: string;
}

// 在泛型中实现类类型
const create = <T>(c: new() => T): T => {
  return new c()
}
class Infos {
  public age: number
  constructor() {
    this.age = 18
  }
}

console.log(create<Infos>(Infos).age)
// console.log(create<Infos>(Infos).name)