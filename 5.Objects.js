let obj = {
  //key:value,  
    name:"Tanush",
    age:18,
    fun:function(){
        console.log("Tanush Saha");
    },
    arr:[10,20,30],
}

let a = "Key1"; // This is Key        //Another Method of storing key and value into object
obj[a]="Item2";// This is value


obj.key = "Item";  //Insert key and value into object....
console.log(obj);
