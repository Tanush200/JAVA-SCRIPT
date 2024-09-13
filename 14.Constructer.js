// Constructer function are regular function ..They have two rules..
// They are named with Capital letter first
// They should be executed only with new operator 
function User(name){
    if(!new.target){
        return new User(name);   
    }
    this.name = name;
}
let person = User("Tanush");  // When we not use new keyword in this line ...we must have a condition ..in 5nd line
console.log(person.name);