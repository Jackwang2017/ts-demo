namespace Validation {
  export const isNumberReg = /^\d+$/
  export const checkNumber = (text: any) => {
    return isNumberReg.test(text)
  }
}