const getDadJoke = async ()=> {
    const response = await fetch("https://jsonplaceholder.typicode.com.users",{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
}
getDadJoke();