const click = document.querySelector('button')
click.onclick = colorChange;
function colorChange(){
    const div = document.getElementById('divMain');
    div.style.backgroundColor = "red";
}