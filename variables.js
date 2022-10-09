// var, let and const

// Variables defined with var keywored can be re-declared and re-assigned a value.
// var x = 1;
// var x = 2;
// console.log(x);

// Variables defined with let keywored cannot be re-declared but can be re-assigned a value.
// let y = 1;
// y = 2;
// console.log(y);

// Variables defined with const keywored cannot be re-declared or re-assigned a value.
// const z = 1;
// console.log(z);




// Scope
// Global scope
// var a = 1;
// let b = 2;
// const c = 3;

// Local scope -  1. Block scope & 2. Function scope

// Local scope - Function scope
// function myFunction() {
//     const z = 8;
//     console.log(b);

//     // Local scope - Block scope
//     if (true) {
//         let b = 5;
//         console.log(b);
//     }
// }
// myFunction()





var x = 1; // function scoped 
let y = 2; // block scoped 
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x = 10;
    const z = 5;
    // console.log(`function: ${x}`);
    // console.log(`function: ${y}`);
    // console.log(`function: ${z}`);

    {
        var x = 11; // function scoped 
        const z = 6; // block scoped
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

myFunc();