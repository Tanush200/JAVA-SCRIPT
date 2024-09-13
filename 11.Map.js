var map1 = new Map([
    [1,"one"],
    ["name","Tanush"],    //  ["key","value"],
    ["Whole Number",[1,2,3,4,5]]
])

console.log(map1.get("name"));  // To get the values using keys

var k = map1.keys();  //  to print the keys
for(var key of k){
    console.log(key);
}

console.log(map1);