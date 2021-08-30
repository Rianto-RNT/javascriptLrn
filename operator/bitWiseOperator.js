// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000
console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND


// Read, Write, Execute
// 00000100
// 00000110
// 00000111
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission; // delete readPermission and |

let message = (myPermission & readPermission) ? 'yes' : 'No';

console.log(message);