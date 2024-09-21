const parent = document.querySelector('html');
const p = parent.parentElement;
console.log(p);

const Parent = document.querySelector('html');
const q = parent.parentNode;
console.log(q);
// Only difference in html tag....Element show null But Node show Document