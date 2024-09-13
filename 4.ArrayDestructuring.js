let array = ["Tanush","Saha","Avi","Saaha"];

let [item1,item2,...item3] = array;  //Stores Arrays Value in an Variable...item1=array[0],item2=array[1]

console.log(item1,item2,item3);      //,item3=array[2,3] using Spread Operator,

let[item55,...item255] = array;

console.log(item55,item255);