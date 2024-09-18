const a = document.querySelector('ul'); // Parent

const newElement = document.createElement('li')
newElement.textContent = "New Element ";

a.appendChild(newElement);

// Remove Child............

const b = document.querySelector('.tan');
b.remove();
