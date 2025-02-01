
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