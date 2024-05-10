
// Array methods:

let arr = [0, 3, 7, 'Zohaib']

let myarr = new Array(3, 7, 9, 'zohaib')

// console.log(arr[2])

// arr.toString

// arr.push(9)
// arr.pop()

// arr.unshift(3)
// arr.shift()

// console.log(arr.concat(myarr))

let array = [0, 1, 2, 3, 4, 5]

// console.log(array.fill(4,0,3)) // fill 4 from 0 to 3 , 3 is not index

// const array1 = [5, 12, 8, 130, 44]

const isLargeNumber = (element) => element > 13

// console.log(array1.findIndex(isLargeNumber))

const array1 = [5, 12, 50, 130,120, 44]

const found = array1.findLast((element) => element < 45)

// console.log(found)

let withMethod = array1.with(1,126)

// console.log(withMethod)

// Query

// .includes()
// .indexOf('cat')

const months = ["Mar", "Jan", "Feb", "Dec"]

// console.log(months.toSorted())

// console.log(months.sort())

const items = [1, 2, 3];

// console.log(items.reverse())

// console.log(items.toReversed())

const animals = ['ant', 'lion', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2))

// console.log(animals.slice(0,2))

// console.log(animals.slice(0,-2))

const myFish = ["angel", "clown", "mandarin", "sturgeon"]
const removed = myFish.splice(2, 2, "drum")
// (index, deleteCount, item1, item2)
// insert drum at index 2 & remove 2 elemnts from index 2

// console.log(myFish)
// console.log(removed)

// const array2 = [1, 30, 39, 29, 10, 13]

// const cond = (currentValue) => currentValue < 40

// console.log(array2.every(cond)) // true

// console.log(Array.from('foo'))

// console.log(Array.from([1, 2, 3], (x) => x + x)

let numbers = [1, 2, 3]

// console.log(numbers.map((x) => x * 2)
//                     .map( (num) => num + 4)
//                     .filter( (num) => num > 6 ))

let total = numbers.reduce((acc, curval) => {
    // console.log(`acc: ${acc} and curval: ${curval}` );
    return acc + curval
}, 0)

// console.log(total)

numbers.forEach(num => console.log(num))
