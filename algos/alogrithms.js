export const isNumberPalindrome = (n) => {
  let original = n
  let reversed = 0

  while (n > 0) {
    let lastDigit = n % 10
    reversed = reversed * 10 + lastDigit
    n = Math.floor(n / 10)

    // console.log('lastDigit:', lastDigit)
    // console.log('reversed:', reversed)
    // console.log('n:', n)
    // console.log('')
  }

  return original === reversed
}

export const isStringPalindrom = (strValue) => {
  const reversed = strValue.split('').reverse().join('')
  return reversed === strValue
}
