import { LinkedList } from './algos/datastructures/linkedlists.js'
import { Queue, Stack } from './algos/datastructures/stacksAndQueues.js'
import { countFrequencies, countLetters, demoMap } from './algos/datastructures/maps.js'

import { binarySearch, isNumberPalindrome, isStringPalindrom } from './algos/alogrithms.js'

// console.log('================LINKDED LISTS================')
// const list = new LinkedList()
// list.insert('hello')
// list.insert('test')
// list.insert(1239438)

// list.display()
// console.log('\n')

// console.log('================QUEUES================')
// const queue = new Queue()

// queue.enqueue('hello')
// queue.enqueue('test')
// queue.display('after enqueueing:')

// queue.dequeue()
// queue.dequeue()
// queue.display('after dequeueing:')

// // enqueueing 2nd time
// queue.enqueue(1345)
// queue.enqueue('hey man whats up ?')
// queue.enqueue(12.55566322)
// queue.enqueue(false)

// queue.display('after enqueueing 2nd time:')

// queue.dequeue()
// queue.dequeue()

// queue.display('after dequeueing 2nd time:')
// console.log('\n')

// console.log('================STACKS================')
// const stack = new Stack()

// stack.push('hello world')
// stack.push('test')
// stack.push(12.67876)

// stack.pop()
// stack.display()

// stack.push('javascript')
// stack.display()
// stack.pop()
// stack.display()

// isNumberPalindrome(11)

// console.log(isNumberPalindrome(11)) // true
// console.log(isNumberPalindrome(121)) // true
// console.log(isNumberPalindrome(99)) // true
// console.log(isNumberPalindrome(292)) // true
// console.log(isNumberPalindrome(123)) // false
// console.log(isNumberPalindrome(2302)) // false

// console.log(isStringPalindrom('radar')) // true
// console.log(isStringPalindrom('bonjour')) // false
// console.log(isStringPalindrom('radar')) // true

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

// demoMap()
console.log(countFrequencies(fruits))
console.log(countLetters('Hello world'))
