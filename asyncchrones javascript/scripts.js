console.log("i am saket mishra")
//create a function which return a function the function return hello world.
const last= () => {
    return function () {
        return console.log("hello, world")
        
    }
    
}
last()()