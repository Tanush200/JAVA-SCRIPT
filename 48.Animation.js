const button = document.querySelector('button');
button.onclick = myMove;
function myMove(){
    let position = 0;
    const element = document.getElementById('inside');
    const id = setInterval(frame,10);
    function frame(){
        if(position == 350){
            clearInterval(id);
        }
        position++;
        element.style.top = position + 'px';
        element.style.left = position++ + 'px';
    }


}