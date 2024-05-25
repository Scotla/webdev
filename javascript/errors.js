 "use strict";
 const makeError = ()=>{
    try{
        throw new customError("This is a custom error");
    }catch(error){
        console.log(error);
    }
 };
 makeError();
 function customError(message){
    this.message = message;
    this.name = "custom error";
    this.stack = `${this.name}: ${this.message}`;
 }
