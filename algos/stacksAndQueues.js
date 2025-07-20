export class Queue {
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
