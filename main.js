import { LinkedList } from './algos/linkedlists.js'
import { Queue } from './algos/stacksAndQueues.js'

console.log('================LINKDED LISTS================')
const list = new LinkedList()
list.insert('hello')
list.insert('test')
list.insert(1239438)

list.display()
console.log('\n')

console.log('================QUEUES AND STACKS================')
const queue = new Queue()

queue.enqueue('hello')
queue.enqueue('test')
queue.display('after enqueueing:')

queue.dequeue()
queue.dequeue()
queue.display('after dequeueing:')

// enqueueing 2nd time
queue.enqueue(1345)
queue.enqueue('hey man whats up ?')
queue.enqueue(12.55566322)
queue.enqueue(false)

queue.display('after enqueueing 2nd time:')

queue.dequeue()
queue.dequeue()

queue.display('after dequeueing 2nd time:')
