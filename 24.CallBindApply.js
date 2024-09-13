function fun(age,gender){
    console.log(this.fName,age,gender);
}
let obj1={
    fName:"Tanush",  // Which Object should I use as this.fName // Thats why in Calling Function we Use Function.call(Object Name)
}
let obj2={
    fName:"Saha",
}

fun.call(obj2);  // We use this.fName of Obj1;

fun.apply(obj1,[19,"male"]);//When we use function.apply We have to pass the parameters of function intop an array ;

let a = fun.bind(obj1,[19,"male"])
console.log(typeof a );   // function.bind turn the variable  into  function  