// When we use static keyword before any variable or function ...It does not work anymore as Object
// If we want to access that variable or function ..we have to use that * class *
class Animal{
    constructor(name){
        this.name = name;
    }
     static sing(name){
        console.log(`${name} sings well`);
    }
}
const d = new Animal("Huskey");
Animal.sing(d.name);
