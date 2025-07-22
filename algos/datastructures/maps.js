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
