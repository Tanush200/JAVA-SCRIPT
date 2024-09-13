function fun(val){
    console.log(val);
}
function add(a,b,callback){
    sum = a+b;
    callback(sum);
}
add(5,6,fun)

// A function call into another function is Callback