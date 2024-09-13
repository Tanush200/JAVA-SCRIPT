let obj1 = {
    fName:"Tanush",
};
let obj2 = {
    lName:"Taanush",
}

obj2.__proto__ = obj1;

console.log(obj2.fName);

//Another Method....

let obj3 = {
    fName:"Tannnush",
};
obj4 = Object.create(obj3);
console.log(obj4.fName);
