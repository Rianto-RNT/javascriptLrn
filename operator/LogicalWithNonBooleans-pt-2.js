// Falsy (false): falsy value in javascript
    //undefine
    // null
    // 0
    // false
    // ''
    // NaN

// Anithing that is not Falsy -> Thruthy

// short-circuiting

let userColor = undefined; // 'red'
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);