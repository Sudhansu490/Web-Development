// function nice(name) {  //parameter = input
//     console.log('Hey ' + name + ' you are nice.');
//     console.log('Hey ' + name + ' you are good.');
//     console.log('Hey ' + name + ' your T-Shirt is nice.');
//     console.log('Hey ' + name + ' your course is good too!');
// }
// nice('Sudhansu');  //Argument

// function sum(a,b,c=6) {
    // Local variable-> Scope
//     return a+b+c;
//     console.log("After Return Statement");  //Not Printed
// }
// result1 = sum(5,3);
// result2 = sum(7);
// console.log('The sum of these three numbers are-:',result1);
// console.log('The sum of these three numbers are-:',result2);

// ------------------------------------------------------------
// Arrow Function

// const print = () => {
//     console.log('Hello');
// }
// print();

// const fun = (x, y) => {
//     console.log('The Addition is',x+y);
// }
// fun(25,50);

// const mul = (a, b) => {
//     return a * b;
// }
// console.log('The Multiplication is',mul(20,5));

// ----------------------------------------------------------------------------------------------------------------------------
// Q.1->Create a function using the 'function' keyword that takes a String as an argument & returns the number of vowels in the string.
// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     console.log('Number of Vowels are',count);
// }
// word=prompt('Enter any word:');
// countVowels(word);

// using Arrow Function
// const countvow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     console.log('Number of Vowels are',count);
// }
// countvow('sonu');

// --------------------------------------------
// ForEach Loop(Higher Order Functions/Methods)

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){  //value at each index
//     console.log(val);
// });

// As an Arrow Function
// let nm = ['sonu','tina','minu','lina'];
// let printNm = (val,i,nm) => {
//     console.log(val.toUpperCase(),i,nm);
// };
// nm.forEach(printNm);

// ------------------------------------------
// Find Factorial of a number using for loop.

function fact(num) {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res = res * i
    }
    return res
}
console.log(fact(5));

// --------------------------------------------------------------------------------------
// Q.For a given array of numbers, print the square of each value using the ForEach Loop.

// using ForEach method
// let nmbrs = [1,2,3,4,5];
// nmbrs.forEach(function square(num) {
//     console.log(num**2);
// });

// using Arraow Function
// let nmbrs = [1,2,3,4,5];
// let calcSq = (num) => {
//     console.log(num**2);
// };
// nmbrs.forEach(calcSq);