const myname = {
    name: "himanshu",
    age : 21,
    hobbies: "gym",
}
function example(obj1) {
    console.log(`My name is ${obj1.name},age is ${obj1.age} and hobby is ${obj1.hobbies}`);
}

example(myname) // object call in function

const array1 = [200,300,400,500]

function examp(obj2){
  return obj2[2]
}

console.log (examp(array1));//array call in function 

function calculatecart(price1,price2,price3,...soon){
    return soon
}// when we have to print all values at one time like in woocommerce

console.log(calculatecart(200,300,400,500,600,700,800));