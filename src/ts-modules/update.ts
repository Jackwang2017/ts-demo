// function getIndexPromise(bool) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(1)
//       if (bool) {
//         resolve('ab')
//       } else {
//         reject(Error('error once'))
//       }
//     }, 1000)
//   })
// }
// getIndexPromise(false).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err.message)
// })
// async function asyncFunction() {
//   try {
//     const res = await getIndexPromise(true);
//     console.log(res)
//   } catch(err) {
//     console.log(err)
//   }
// }
// asyncFunction()

interface Res {
  data: {
    [key: string]: any
  }
}
namespace axios {
  export function post(url: string, config: object): Promise<Res> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res: Res = { data: {} }
        if (url === '/login') {
          res.data.user_id = 111
        } else {
          res.data.role = 'admin'
        }
        console.log(2)
        resolve(res)
      }, 1000)
    })
  }
}
interface LoginInfo {
  user_name: string
  password: string
}
async function loginReq({ user_name, password }: LoginInfo) {
  try {
    console.log(1)
    const res = await axios.post('/login', {
      data: {
        user_name,
        password,
      },
    })
    console.log(3)
    return res
  } catch(err) {
    throw new Error(err)
  }
}
async function getRoleReq(user_id: number) {
  try {
    const res = await axios.post('/user_roles', {
      data: {
        user_id
      }
    })
    return res;
  } catch(error) {
    throw new Error(error)
  }
}
// loginReq({ user_name: 'account', password: '123' }).then((res) => {
//   const { data: { user_id } } = res
//   getRoleReq(user_id).then(res2 => {
//     const { data: { role } } = res2
//     console.log(role)
//   })
// })

// tsconfig.json可以有注释
// 动态导入，import()返回一个Promise
// async function getTime(format: string) {
//   const moment = await import('moment');
//   return moment.default().format(format)
// }
// getTime('L').then(res => {
//   console.log(res)
// })
// 弱类型探测
interface ObjIn {
  name?: string
  age?: number
}
let objIn = {
  sex: 'man'
}
function printInfo(info: ObjIn) {
  console.log(info)
}
// printInfo(objIn as ObjIn)

// ...拓展运算符, 只作用于对象或泛型
function mergeOptions<T, U extends string>(op1: T, op2: U) {
  return { ...op1, op2 }
}
console.log(mergeOptions({ a: 'a' }, 'name'))

function getExcludeProp<T extends { props: string}>(obj: T) {
  let { props, ...rest } = obj;
  return rest
}
const objInfo = {
  props: 'something',
  name: 'lison',
  age: 18
}
console.log(getExcludeProp(objInfo))