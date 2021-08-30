// logical AND (&&)
// Returns TRUE if both operands are TRUE

// console.log(true && true);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan);

// logical OR (||)
// Returns TRUE if both operands are TRUE
// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;

// console.log(eligibleForLoan);

// Logical NOT (!)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

//Logical NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);



