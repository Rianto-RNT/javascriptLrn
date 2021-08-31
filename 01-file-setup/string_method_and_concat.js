const firstName = 'AL'
const lastName = 'Fatih'

let val;

//concatenate
val = firstName + lastName
val = firstName + ' ' + lastName
//Append
val = 'Al'
val += 'Fatih'

//Escaping
val = "That's great. You've found a job"
val = 'That \'s great. You\'ve found a job'

//length
val = firstName.length

//concat
val = firstName.concat(' ', lastName)
//change case
val = firstName.toUpperCase()
val = firstName.toLowerCase()



console.log(val)