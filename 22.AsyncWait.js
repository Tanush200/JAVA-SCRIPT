function LoadingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Loading Data");
        }, 2000);
        resolve();
    })
}
function ApprovingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("Approving Data....");
        },2000);
        resolve();
    })
}
function Approved(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Approved...");
            resolve();
        },4000);
      
    })
   
}
// Whole function is working as Promise(Then and Catch)
async function Await(){
    await LoadingData();
    await ApprovingData();
    await Approved();
     
}
Await().catch((err)=>{
    console.log(err);
})