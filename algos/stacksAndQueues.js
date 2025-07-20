export class Queue {
  // FIFO: First In, First Out
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    this.items.shift()
  }

  peek() {
    return this.items[0]
  }

  display(msg = '') {
    if (msg) {
      console.log(msg)
    }

    console.log(this.items)
  }
}

export class Stack {
  // LIFO: Last In, First Out
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  display(msg = '') {
    if (msg) {
      console.log(msg)
    }

    console.log(this.items)
  }
}
