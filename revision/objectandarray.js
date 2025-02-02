const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.name); // 'this' refers to the current object
    }
};
console.log(person.name)
