/**
 * JavaScript Web Storage API
 * 
 * Not part of the DOM - Refers to the window API
 * Available to JavaScript via global variable: window
 * We don not have to type window. It is implied.
 */

// window.sessionStorage
// window.localStorage

const myArray = ["eat", "sleep", "code"];
const myObject = {
    firstName: "Sajed",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
        console.log(myObject.firstName);
    }
};
myObject.logName();
sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);