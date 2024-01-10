const valueone = {
    username: "Himanshu",
    age: 21,
    welcome: function msg(){
        console.log(`${this.username} you are welcome`)
    }
}
valueone.welcome();
valueone.username = "sam",
valueone.welcome();

function examp(){
    username= "anc"
    console.log(this);
}
examp()
console.log(this);
//ARROW FUNCTION 
const func = () => {
    username = "hunny"
    console.log(this.username);
}
func()
//Another way to define arrow funcvtion
const addtwo = (num1 , num2) => (num1+num2)
console.log(addtwo(3,4));