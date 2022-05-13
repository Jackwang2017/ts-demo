namespace Validation {
  export const isletterReg = /^\w+$/
  export const checkLetter = (text: any) => {
    return isletterReg.test(text)
  }
}
