const list = document.querySelector('ul');

const ChildToChange = list.children[1];

const newLi = document.createElement('li');
newLi.textContent = "Avi";



list.replaceChild(newLi,ChildToChange);