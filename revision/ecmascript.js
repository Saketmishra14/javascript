// template litrals
let firstname="yash"
let lastname="mishra"
 const fullname=`hello everyone, i am ${firstname + lastname}.`
 console.log(fullname)

 //destructuring (array and object)
 let colors = ["red", "green", "blue"];
let [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // "red"
console.log(secondColor); // "green"
console.log(thirdColor); // "blue"

//spread and rest operators
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let mergedArray = [...numbers1, ...numbers2]; // Merging both arrays
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

//let const var


//module (import/export)
