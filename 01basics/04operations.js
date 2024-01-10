let value = 33
let negvalue = -value
console.log(negvalue);

//operations
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3) (for power);
//console.log(2/2);
//console(2%2) (for remainder);

let str1 = "Hello"
let str2 = " Himanshu"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // it will concetenate both
console.log("1" + "2"); // it will concetenate both
console.log(1 + "2"); // it will concetenate both

console.log("1" + 2 + 2); // if string is at first then after that all numbers will be considered as string
console.log(1 + "2" + 2); // if string is in between then also after that all numbers will be considered as string
console.log(1 + 2 + "2");// if string is at last then only last number is considered as string 

let a = 3
let b = a++ // in postfix first it will give a value to b then it will increment the value of a
console.log(a);
console.log(b);

let x = 3
let y = ++x // in prefix first it will inctrement the value of x and then iit will return the value of x in y
console.log(x);
console.log(y);

console.log(3 + 4 - 5 * 8); // will be solved by BODMAS 

console.log(+true);
// console.log(true+); error

console.log(+false);
// console.log(false+); error