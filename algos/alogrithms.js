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

/**
 * @param arr
 * @param target
 * If found, returns the index of the target
 * @returns {number}
 */
export const binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) return mid
    else if (arr[mid] < target) {
      // on cherche alors à droite
      left = mid + 1
    } else {
      // on cherche alors à gauche
      right = mid - 1
    }
  }

  return -1
}
