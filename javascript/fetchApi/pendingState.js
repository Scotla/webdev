/*||Pending state(using fetch) */
const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending state
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>{
    // console.log(response);
    return response.json();
})
.then(data =>{
    data.forEach(user =>{
        console.log(user);
    })
})