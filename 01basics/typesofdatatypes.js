// Generally there are two types of data types and that are 
// primitive and non-primitive 
//primitive data typs are called by value which means they will copy the value into anothe variable and
// the changes we will make in that copied variable will not affct the value of original variable.
//Primitive Data types: String, Number, Boolean, null, Undefined, Symbol, BigInt.
//Symbol data type is used to uniquely define an element whether that element and the another element has same id.
//For example:
const id = Symbol("123");
const anotherid = Symbol("123");
console.log(id==anotherid);// it will return false.

//Non-Primitive data types: Arrays, Objects, Functions.
const heros = ["marvel", "avnegers"] // Arrays
let myobj = {

    age: 21,
}// Object
function myfun (age2)
{
   
    console.log(age2);
}// function
console.log(myfun(17));
 //one more thing the type of null will always give object as return 
 //and all non-primitive data types type is function object.

 ****************************************************************************************************

 //Memory in java script
 //There are two types of memory in java script
 //Stack[Primitive]  and Heap[Non Primitive]
 //The primitive data types are stored in stack memory and non primitive data types are stored in heap memory.