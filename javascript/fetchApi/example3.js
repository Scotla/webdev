const jokeObject = {
    id:"0oO71TSv4Ed",
    joke:"Why was it called the dark ages? Because of all the knights"
}
const postData = async (jokeObj) => {
    const response = await fetch("http://httpbin.org/post",{
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse.headers)

}