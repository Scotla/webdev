//abstract into functions
// may be pull data from a form
const getDataFromForm = () =>{
    const reqestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequest = (requestData) => {
    return `http://api.icndb.com/jokes.random?firstName=${firstName}&lastName = ${lastName}&limitTo=${requestData.categories}`;
}

const requestData = async(url) =>{
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage

}
const postJokeToPage = (joke) =>{
    console.log(joke);
}

//procedural "workflow" function

const processJokeRequest = async () =>{
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished!")
}
processJokeRequest();

const requestJoke = async(firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes.random?firstName=${firstName}&lastName = ${lastName}`);
    const jsonResponse = await response.json();

    console.log(jsonResponse.value.joke);
}
requestJoke("Bruce","lee");