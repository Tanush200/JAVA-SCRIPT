let arr = [
    {
        name:"Tanush",
        age:18
    },
    {
        name:"Rahul",
        age:19
    },
    {
        name:"John",
        age:20
    }
]

for(let i of arr){
    console.log(i);
}

//  Array destructuring
let [item1,{name},{name:name1}] = arr; //We can't use name twice...So we change it   

console.log(name);
console.log(item1);
console.log(name1);