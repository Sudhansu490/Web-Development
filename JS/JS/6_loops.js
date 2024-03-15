// For Loop
// let a = 1;
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
// }

// for-in Loop
// let obj = {
//     Name : 'Sonu',
//     Role : 'Owner',
//     ompany : 'Kappa'
// };
// for (const key in obj) {
//     console.log('key=',key, 'value=',obj[key]);
// }

// for-of Loop
// let str = 'SudhansuBhai'
// for (let i of str) {
//     console.log(i);
// };

// -------------------------------
// While Loop

// let i=0;
// while (i<6) {
//     console.log(i);
//     i++;
// };

// --------------------------------
// Do While Loop

// let i=0;
// do {
//    console.log(i);
//    i++; 
// } while (i<6);

// ----------------------------------------------
// Q.1-> Print all the even numbers from 0 to 100.
// for (let num = 1; num <= 100; num++) {
//     if (num%2 === 0) {
//         console.log('num =' ,num);
//     }
// }

// Q.2-> Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 25;
let userNum = prompt('Guess the Game Number');
while (userNum != gameNum) {
    userNum = prompt('You Guess the Wrong Number, Guess agsin : ');
}
console.log('Congratulations, You entered the Right Number');