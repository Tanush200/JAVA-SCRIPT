function LoadingData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Loading Data....");
        resolve();
    },2000);
  })
}
function ApprovingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(" Approving Data....");
            reject("Error : Not Fullfilled");
        },2000);
      })
}
function Approved(){
    console.log("Approved");
}
LoadingData().then(ApprovingData).then(Approved).catch((err)=>{
    console.log(err);
})