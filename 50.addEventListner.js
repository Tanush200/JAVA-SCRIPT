const button = document.querySelector('button')
button.addEventListener('click',myEvent);

function myEvent(){
    const div = document.getElementById('divMain');
    div.style.backgroundColor = "red";
}