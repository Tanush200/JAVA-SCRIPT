let arr = [
    ["Tanush",18],
    ["Rahul",20],
    ["Nitn",29]
]
for(let i = 0;i<arr.length;i++){
    for(let j =0;j<arr[i].length;j++){    // Normal Form
        console.log(arr[i][j]);
    }
}

// ForEach Loop...
arr.forEach(data => {
    data.forEach(value =>{
        console.log(value);
    })
});

//For Of Loop...
for(let ar of arr){
    for(let val of ar){
        console.log(val);
    }
}