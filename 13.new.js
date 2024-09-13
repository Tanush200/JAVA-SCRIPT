function fun(){
    let fname = "Tanush";
    this.fname = fname;
}
const obj = new fun();  // If we only call the function fun() there is empty object...thats why we use new keyword...
console.log(obj.fname);