class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    introduce() {
        console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    }
}

const sakamoto = new Person('sakamoto',26)
sakamoto.introduce();