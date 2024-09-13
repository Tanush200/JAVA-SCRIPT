function fun(){
    var a = 1;
    console.log("Tanush Saha : "+ a);
    function fun1(){
        console.log("Tanush : "+a);  // fun1 function find the value inside fun funcetion and outside fun1 function 
    }   // This is called Lexical Scope
    fun1();
}
fun();