document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp();
    }
});
const initApp = () =>{
    const view3 = document.querySelector("#view3");
    const myform = view3.querySelector("#myform");
    myform.addEventListener("submit",(event) =>{
        event.preventDefault();
        console.log("submit event");
    });
};