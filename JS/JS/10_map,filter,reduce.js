// let arr = [1,13,5,7,11];

// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }
// console.log(newArr);

// Map
// let newArr = arr.map((e,index,arr) =>{
//     return e**2
// })
// console.log(newArr);

// Filter
// const greatthanThirty = (e) =>{
//     if(e>30){
//         return true;
//     }
//     return false;
// }
// console.log(newArr.filter(greatthanThirty));

// let nums = [1,2,3,4,5,6,7,8,9];
// let evenArr = nums.filter((n) =>{
//     return n % 2 == 0;
// });
// console.log(evenArr);

// Reduce
// const result = (pre,now) => {
//     return pre+now;
// }
// console.log(arr.reduce(result));

// --------------------------------------------------------------------------------------------
// Q.We are given array of marks of students. Filter out the marks of students that scored 90+.
// let marks = [97,64,32,49,99,96,86];
// let greatNinty = marks.filter((m) =>{
//     return m > 90;
// });
// console.log(greatNinty);

// -------------------------------------------------
// Q.Find factorial of a number using reduce method.

// let a = 6;
// function fact(num) {
//     let arr = Array.from(Array(num+1).keys())
//     let c = arr.slice(1,).reduce((a,b) => a*b)
//     return c
// }
// console.log(fact(a));

// ----------------------------------------------------------------------------
// Q.Take a number n as input from user.Create an array of numbers from 1 to n.

let n = prompt('Enter a Number:');
let ar = [];
for (let i = 1; i <= n; i++) {
    ar[i-1] = i;
}
console.log(ar)

// Use the Reduce method to calculate sum of all numbers in the array.
let sum = ar.reduce((res,now) => {
    return res + now;
});
console.log('Total =',sum);

// Use the reduce method to calculate product of all numbers in the array.
let product = ar.reduce((pre,cur) => {
    return pre * cur;
});
console.log('Product =',product);