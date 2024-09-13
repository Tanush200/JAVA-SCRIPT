let emp={};
emp.name = "Tanush";
console.log(Object.getOwnPropertyDescriptor(emp,"name"));

Object.defineProperty(emp,"age",{
    value:19,
    writable:true,
    enumerable: false,
    configurable:true,
});
for(let k in emp){
    console.log(k);
}
console.log(emp);