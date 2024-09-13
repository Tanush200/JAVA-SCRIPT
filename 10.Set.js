const arr = [10,20,30,40,50];
console.log(arr.length);

const s = new Set([10,20,30,40,50,30]); //Set never repeat same value..always unique value 
console.log(s.length);  // Undefined

// But to find length we have to use pointer method...never support s.length method because its a Set method....

 let length = 0
 for(let element of s){
    length++
 }
 console.log(length);