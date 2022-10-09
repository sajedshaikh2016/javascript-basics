/**
 * JavaScript Loops
 */

// While loop
// let myNumber = 0;
// while (myNumber < 50) {
//     myNumber += 2;
//     console.log(myNumber);
// }

// Do While loop
// let myNumber = 0;
// do {
//     myNumber += 2;
//     console.log(myNumber);
// } while (myNumber < 50);


// For loop
// let firstName = "Sajed";
// for (i = 0; i <= firstName.length; i++) {
//     console.log(firstName.charAt(i));
// }



let firstName = "Dave";
let counter = 0;
let myLetter;

while (counter <= 3) {
    myLetter = firstName[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === 'v') break;
    counter++;
}
console.log(counter);