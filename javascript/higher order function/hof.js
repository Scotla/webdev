// Higher order functions
// A higher order function is a function that does at least one of the following:
// ** Takes or more functions as arguments/parameters
// ** Returns a function as a result
import {posts} from "./posts.js";

posts.forEach((post)=>{
    console.log(post);
});
console.clear();

const filteredPost = posts.filter((post) =>{
    return post.userId ===10;
});
console.log(filteredPost);

const mappedPosts = filteredPost.map((post)=>{
    return post.id*10;
});
console.log(mappedPosts);

const reducedPostValues =mappedPosts.reduce((sum, post) =>{
    return sum + post;
});
console.log(reducedPostValues)