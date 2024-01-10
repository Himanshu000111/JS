//console.log(2>1);
//console.log(2<1);
//console.log(2==1);  //These all are simple comparison with no issue as the 2 elements 
                      // which we want to compare has same data type.
//console.log(2>=1);
//console.log(2<=1);
//console.log(2!=1);

console.log("2">1); //now here is the problem as th two elements which we want to compare 
console.log("02">1);//has diffrent data types so we will think it will return false but 
                    //it has return true because java script automatically string into number.
                    //So it is advised to always compare two elements with the same data type.

console.log(null>0);//it will return false.
console.log(null==0);//it will return false.
console.log(null>=0);//it will return true because the equality operator and comparison operstor 
                      //works differntly as comparison operstor convert null into 0 so that's why (null>=0) 
                      //is true.
                      // same is the problem with undefined data type but it will return false in every case.

//=== (this is called strict check. in strict check there is no conversion of data type in number 
//because it is a strict check.)

console.log("2"=== 2);// this will return false because of strict check.