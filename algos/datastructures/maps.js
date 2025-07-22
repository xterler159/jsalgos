export const demoMap = () => {
  console.log('================MAPS================')

  const map = new Map()

  map.set('a', 99)
  map.set('b', 102)
  map.set('c', "hello man what's up ?")

  console.log('get(a):', map.get('a'))
  console.log('get(b):', map.get('b'))
  console.log('get(c):', map.get('c'))
  console.log('map size:', map.size)
  console.log('map.keys:', map.keys())
  console.log(map.values())
  console.log('================MAPS================')
}

// exercises
export const countFrequencies = (arrWords) => {
  const map = new Map()

  for (const word of arrWords) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1)
    } else {
      map.set(word, 1)
    }
  }

  return map
}

export const countLetters = (letters) => {
  const map = new Map()

  for (const char of letters) {
    if (char === ' ') continue

    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  return map
}
