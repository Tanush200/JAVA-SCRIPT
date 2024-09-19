const arr = [
    {id:"001",name:"Tanush",sports:"Cricket"},
    {id:"002",name:"football",sports:"Football"},
    {id:"003",name:"bad",sports:"Badminton"},
    {id:"001",name:"Tanush",sports:"Cricket"},
    {id:"001",name:"Tanush",sports:"Cricket"}
];
const names = arr
.filter((curValue)=>{
   return curValue.sports ==="Cricket"
})
.map((curValue)=>{
    return curValue.name
})
console.log(names);



// const students = arr.filter((curValue)=>{
//     if(curValue.id %2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(students);