let value = undefined
// console.log(typeof value);

let valueInNumber = Number(value)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => can be easily converted into a number
// 33abcd => cannot be converted into a number and returns the value as NAN
// null => cannot be converted into a number and return the value as 0
// undefined => cannot be converted into a number and return the value as NAN
// true => convert into 1 and false =. convert into 0

let loggedOut = true
console.log(typeof loggedOut);

let stringloggedOut = String(loggedOut)
console.log(typeof stringloggedOut);
console.log(stringloggedOut);

// like this we can convert string into numbers , numbers into string, boolean into string
// and numbers and so on.

