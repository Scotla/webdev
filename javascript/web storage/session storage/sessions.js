const myObject = {
    name:"Pierre",
    hobbies: ["eat","code","sleep"],
    logName: function(){
        console.log(this.name);
    }
}
// console.log(myObject.logName());
myObject.logName();
const  myArray = ["eat","code","sleep"];

sessionStorage.setItem("mySessionStore",  myObject);
let mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData);

sessionStorage.setItem("mySessionStore", myArray);
const mySessionDataA =sessionStorage.getItem("mySessionStore");
console.log(mySessionDataA);

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
mySessionData =sessionStorage.getItem("mySessionStore");
console.log(mySessionData);
mySessionData =JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

console.log(JSON.stringify(myObject))
localStorage.setItem("myLocalStore", JSON.stringify(myObject));
myLocalData =JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);

/* Important!
    Other localStorage and SessionStorage methods and properties include:
    localstorage/sessionStorage.remove() - for deleting items from the local storage
    localStorage/sessionStorage.key() - for locating the item key
    localStorage/sessionStorage.clear() - for clearing all website items*/
