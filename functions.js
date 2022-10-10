/**
 * JavaScript functions
 * Functions provides reusable code
 * Methods are buit in functions
 */

// Function declaration syntax

// function sum(num1, num2) {
//     if (num2 === undefined) {
//         return num1 + num1;
//     }
//     return num1 + num2;
// }
// console.log(sum(2, 7));


// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("playerOne@someRandomEmail.com"));


// Anonymous function
// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("playerOne@someRandomEmail.com"));


// Arrow functions 
// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
// };
// console.log(getUserNameFromEmail("playerOne@someRandomEmail.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("sAjEd"));
