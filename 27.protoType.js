// function Person(name, age) {
//   let person = Object.create(obj);
//   person.name = name;
//   person.age = age;
//   return person;
// }

// var obj = {
//   greet() {
//     console.log(`Hello ${this.name}`);
//   },
// };
// let user = Person("John", 8);
// user.greet();
// console.log(user);

//.......................................
// UPDATED FORM......

function Person(name, age) {
  // let person = Object.create(obj);  instead of this we can use new keyword
  this.name = name;
  this.age = age;
  // return person | no need to return ,,,,
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

let user1 = new Person("John", 8); // FUNCTION INTO OBJECT BY NEW KEYWORD
user1.greet();
console.log(user1);
