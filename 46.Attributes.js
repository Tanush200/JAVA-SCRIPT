const a = document.querySelector('#hero');
console.log(a.getAttribute('about'));

a.setAttribute("class","main")
console.log(a.outerHTML);

for(let att of a.attributes){
    console.log(`${att.name} = ${att.value}`);
}