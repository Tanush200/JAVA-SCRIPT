class Animal {      // Parent Class
  constructor(name) {
    this.name = name
  }
  greet(){
    console.log(`${this.name} greets well`);
  }
  sing(){
    console.log(`${this.name} is singing`);
  }
}

class Dog extends  Animal {   // Child Class (Dog) refer Parent class (Animal) by using extends keyword...
    constructor(name) {
      super(name)             // this.name reolaced by super(name)
    }
}

class Cat extends  Animal {   // Child Class ...extend and super 
    constructor(name) {
      super(name)
    }
}
let d = new Cat("Bark");
d.sing();