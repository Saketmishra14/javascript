const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.name); // 'this' refers to the current object
    }
};
console.log(person.name)
console.log(person)

//object destructuring 

const {name,age,greet}=person
console.log(name)

//array method (map(),filter(),reduce(),find(),some(),every())


