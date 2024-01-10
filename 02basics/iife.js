//IIFE: Immediately invoked function expression
(function example(){ //named iife
    console.log("Hello")
})();

((name) => { //unnamed iife with arrow function 
console.log(`my name is ${name}`)
} )("himanshu");

//IIFE function is used to invoke the global scope pollution.