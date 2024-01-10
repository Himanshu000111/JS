const  myarray= [100, 200, 400, 500]
myarray.forEach(function (items) {
    console.log(items);
})

const array= [100, 200, 400, 500]
array.forEach((items) => {
    console.log(items);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (items) => {
    console.log( items.languageName )
    console.log( items.languageFileName )
} )