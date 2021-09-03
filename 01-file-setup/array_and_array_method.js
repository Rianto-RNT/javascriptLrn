const arr1 = [30, 50, 40]
const arr2 = new Array(80, 20)
const users = ['Rian', 'Peter', 'Ben', 'John']
const anything = ['Rian', 3, null, undefined, false, { name: 'Rian', age: 30 }, new Date()]

let val
val = arr1.length
//check whether is array
val = Array.isArray(arr1)

arr1[2] = 'last item'
console.log(arr1)