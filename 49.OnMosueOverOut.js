//onmouseover | onmouseout | onmousedown | onmouseup.......
const mouse = document.querySelector('#divMain');
const button = document.querySelector('button');

button.onmousedown = myMouseDown;
button.onmouseup = myMouseUp;

mouse.onmouseover = myMouseOver;
mouse.onmouseout = myMouseOut;

function myMouseOver(){
    const div = document.getElementById('divMain');
    div.style.backgroundColor = "red";
}
function myMouseOut(){
    const div = document.getElementById('divMain');
    div.style.backgroundColor = "yellow";
}
function myMouseDown(){
    const div = document.getElementById('divMain');
    div.style.backgroundColor = "purple";
}
function myMouseUp(){
    const div = document.getElementById('divMain');
    div.style.backgroundColor = "yellow";
}