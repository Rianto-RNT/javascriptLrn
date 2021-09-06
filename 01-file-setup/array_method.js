const arr1 = [30, 50, 6, 40]
const arr2 = new Array(80,20);
const users = ['Al', 'Rian', 'Fatih', 'John']

const anithing = ['hello', 2, 
true, {
    name: 'Rian', age: 28
}, new Date()]

let val;
//manipulating the array
// Add to the end
// arr1.push(200)
// add to the front
// arr1.inshift(300)
// remove the end
arr1.pop()
// remove the front
arr1.shift()
// at position 1, remove one item
// and insert "one" "two"
arr1.splice(1, 2, "one", "two")
// reverse
arr1.reverse()
//concat array
val = arr1.concat(arr2)
// sort
val = user.sort().reverse()
val = arr1.sort()
// sort with compare function
val = arr1.sort(function(a, b){
    return a - b
})
// reverse sort with compare function
val = arr1.sort(function(a, b){
    return b - a
})
// find
function gt10(num){
    return num > 10
}
console.log(arr1)
val = arr1.find(gt10)

// find and filter
val = arr1.filter(gt10)

console.log(val)