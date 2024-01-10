const myarray = [100, 200, 300 ,400]

for (const values of myarray) {
    console.log(values)
    }

//we cannot access objects values with for of loop

//maps
const map = new Map()  // maps don't use iteration and map print as it is values in same order.
map.set("In" , "India");
map.set("USA" ,  "United States Of america");
map.set("Uk" , "United Kingdom");

for (const [key, value] of map) {
    console.log(key,`:=` , value);
}