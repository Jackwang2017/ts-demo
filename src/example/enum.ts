// const test = 1;
// const getindex = () => {
//   return 2;
// }
// enum Status {
//   Uploading=1,
//   Success = getindex(),
//   Failed=8,
// }
// console.log(Status.Uploading)
// console.log(Status['Success'])

// enum Message {
//   Error = 'Sorry, error',
//   Success = 'HoHo, success',
//   Failed = Error
// }
// console.log(Message.Failed)
// enum Result {
//   Failed = 0,
//   Success = 'success'
// }

// enum Animals {
//   Dog = 1,
//   Cat = 2
// }
// interface Dog {
//   type: Animals.Dog
// }
// const dog: Dog = {
//   // type: Animals.Dog
//   type: 5
// }

enum Status {
  off,
  on
}
interface Light {
  status: Status
}
const light: Light = {
  status: Status.off
}

const enum Animals1 {
  Dog = 1,
  Cat
}
 