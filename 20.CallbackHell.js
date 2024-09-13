function LoadingData(callback){
    setTimeout(()=>{
        console.log("Loading Data...");
        callback();
    },2000);
}
function ApprovingData(callback){
    setTimeout(()=>{
        console.log("Approving Data...");
        callback();

    },2000);

}
function Approved(){
    console.log("Approved");
}
//Call Back Hell..
LoadingData(function(){
    ApprovingData(function(){
        Approved();
    });
 
});
