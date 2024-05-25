const view = document.querySelector("#view2");
console.log(view);

const div = view.querySelector("div");
const h2 =div.querySelector("h2");

//Event Listener Syntax
// || addEventListener(event, function, useCapture)
// const doSomething = () =>{
//     alert("doing something");
// };
// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// h2.addEventListener("click",(event) =>{
//     console.log(event.target);
//     event.target.textContent = "clicked";
// });

document.addEventListener("readystatechange",(event) =>{
    if(event.target.readyState ==="complete"){
        console.log("readyState: Complete");
        initApp();
    }
});

// SYNTAX: addEventListner(event, function, useCapture)
//The useCapture determines the direction of event propagation(default is false)
//when true, event propagation goes from inside to out and outside to in when true
const initApp = ()=>{
        const view = document.querySelector("#view2");
        console.log(view);

        const div = view.querySelector("div");
        const h2 =div.querySelector("h2");

        view.addEventListener("click", (event) =>{
            view.classList.toggle("blac");
            view.classList.toggle("blue");
            view
        // view.style.backgroundColor ="purple"
        },false);
        div.addEventListener("click", (event) =>{
            div.style.backgroundColor ="red"
        },false);
        h2.addEventListener("click", (event) =>{
            event.target.textContent ="Clicked";
            console.log(event.target);
        },false);
        const nav = document.querySelector("nav");
        nav.addEventListener("mouseover", (event)=>{
            event.target.classList.add("height100");
        })
        nav.addEventListener("mouseout",(event)=>{
            event.target.classList.remove("height100")
        });
        // view.addEventListener("click", (event) =>{
        //     event.target.style.backgroundColor ="purple"
        //     },false);
        //     div.addEventListener("click", (event) =>{
        //         event.target.style.backgroundColor ="red"
        //     },false)
        //     h2.addEventListener("click", (event) =>{
        //         event.target.textContent ="Clicked";
        //         console.log(event.target);
        //     },false);
     }
     /* REMEMBER EVENT BUBBLING AND CUPTURE*/