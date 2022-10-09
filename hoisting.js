/**
 * JavaScript Hoisting -
 * Declarations are hoised but initialization are not.
 ****/

// console.log(x);
// var x = 5;

// setpOne();
// function setpOne() {
//     console.log("Step one");
// }

// const and let are never hoisted

// console.log(a);
// let a = 5;


// setpTwo();
// const setpTwo = () => {
//     console.log("Step two");
// }

// This will work if variables or function declaired with let or canst called after initialization.

// const setpTwo = () => {
//     console.log("Step two");
// }
// setpTwo();



const initApp = () => {
    // console.log(stepThree);
    stepThree();
}

document.addEventListener('DOMContentLoaded', initApp);

const stepThree = () => {
    console.log("Step three");
}

