class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello ${this.name} `);
  }
}
let user = new Person("Tanush",19);
user.greet();

let user1 = new Person("John",19);
user1.greet();

let user2 = new Person("Avi",19);
user2.greet();
 
