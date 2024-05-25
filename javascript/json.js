const myObj = {
    name:"dave",
    hobbies:["eat", "sleep", "code"],
    hello: () =>{console.log("hello")}
}
console.log(myObj);
console.log(myObj.hobbies);
myObj.hello();
//Json does not stringify functions/discards them instead
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

const receiveJson = JSON.parse(sendJSON);
console.log(receiveJson);
console.log(receiveJson.name);
console.log(receiveJson.hobbies[2]);