let id = Symbol("id");
let obj = {
    name:"Tanush",
}

obj[id] = 1;

console.log(obj);

for(let key in obj){
    console.log(key);  // if we are trying to access the key , Symble key is hidden..Thats why its a unique character
}
