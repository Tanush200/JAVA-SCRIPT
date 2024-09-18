let a = document.querySelector('.Tanush');
console.log(a.previousElementSibling);



let b = document.querySelector('.main');
if(b.previousElementSibling==null){
    console.log("Sibling Not Found");
}
else{
    console.log(b.previousElementSibling);
}
