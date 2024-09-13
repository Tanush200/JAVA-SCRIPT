let obj = {
    name:"Tanush",
    age:18,
    fun:function(){
        console.log(this.name);  // this is main object..(this = obj)
    }
}

console.log(obj.age);

obj.fun();