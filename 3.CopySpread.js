let arr1  = ["tanush",10,true];
arr2 = arr1.splice(0).concat("Tann");  // Complex Method
console.log(arr2);

// Spread[...arrayName]

let arr3 = ["Saha",18,true];
arr4 = [...arr3];       //Spread Method

arr4.push("Tanush");

console.log(arr3);
console.log(arr4);