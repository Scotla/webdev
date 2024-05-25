const myPromise = new Promise((resolve,reject)=>{
    const error = false;
    if(!error){
        resolve("Yes! resolved the problem");
    }else{
        reject("No! rejected the promise");
    }
});
/*|| Thenables:(uses then keyword*/
// console.log(myPromise);

// myPromise.then(value => {
//     console.log(value);
// })
// myPromise.then(value => {
//     return value +1;
// })
// .then(newValue =>{
//     console.log(newValue);
// })
// .catch(err =>{
//     console.error(err);
// });

const myNextPromise = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("myNextPromise Resolved");
    }, 3000);
});
myNextPromise.then(value =>{
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});