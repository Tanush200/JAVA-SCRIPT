const div = document.getElementsByTagName('div')[0];
div.addEventListener('click',(event)=>{
    if(event.target.tagName == 'BUTTON'){
        console.log("Button was clicked");
    }
    else if(event.target.tagName == 'SPAN'){
        console.log("Span was clicked");
    }
    else{
        console.log("DIV was clicked ");
    }
})