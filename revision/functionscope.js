
 const greet= function sum(a,b){
    console.log(a+b);
    return a+b
}
console.log(greet(2,3))


//arrow function
const gree=(name)=>{
    console.log(`hello, ${name}!`)

}
gree("yash")

//parameter & arguments

const morning=(name="yash")=>{   //parameter
    console.log(`${name}, Good morning`)
}
morning("saket")   // argument 
morning()

//higher - order function (passing function as arguments)
function greets(names){
    return `hello,${names}`
}
function processuser(names,callback){
    console.log(callback(names))
}
processuser("yash",greets)

//closure -: A closure in JavaScript is a function that remembers the variables from its outer scope, even after the outer function has finished executing.


function outerfunction(outervariable){
    return function innerfunction(innervariable){
        console.log(`inner:${innervariable} outer:${outervariable}`)
    }
}

const newfunction=outerfunction("saket")
newfunction("world")