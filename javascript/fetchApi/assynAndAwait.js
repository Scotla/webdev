const myUsers = {
    userList:[]
}
const myCoolFunction = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com.users");
    const jsonUserData = await response.json();
    console.log(jsonUserData);
    return jsonUserData;
}
myCoolFunction();
const anotherFunc = async () => {
    const data = await myCoolFunction();
    console.log(data);
}
anotherFunc();