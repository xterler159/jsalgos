export class Node {
  data = []
  next = null

  constructor(data) {
    this.data = data
  }
}

export class LinkedList {
  #head = null
  #count = 0

  constructor() {
    this.head = null
  }

  insert(data) {
    this.#count++
    const newNode = new Node(data)

    // console.log('insert this.#head:', this.#head)

    if (this.#head === null) {
      this.#head = newNode
    } else {
      let current = this.#head

      while (current.next !== null) {
        current = current.next
      }

      current.next = newNode

      this.#count++
    }
  }

  display() {
    let current = this.#head
    let result = ''

    while (current !== null) {
      result += current.data + ' → '
      current = current.next
    }

    console.log(result + 'null')
  }

  count() {
    return this.#count
  }
}
