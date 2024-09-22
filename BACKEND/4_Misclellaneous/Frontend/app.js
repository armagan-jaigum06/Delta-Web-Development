// Factory function

// function PersonMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, my name is ${this.name}`);
//     },
//   };
//   return person;
// }

// Constructors = doesn't return anything & start with capital

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }
// Person.prototype.talk = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// Class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`Hi my name is ${this.name}`);
//   }
// }

// let p1 = new Person("Hashmi", 25);
// let p2 = new Person("Alam", 25);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi my name is : ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let s1 = new Student("Hashmi", 25, 90);
let t1 = new Teacher("abc", 35, "math");
