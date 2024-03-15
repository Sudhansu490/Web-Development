// let arr = [1,2,3,4,5];
// console.log((arr));
// console.log(arr.length);
// console.log(arr[2]);
// console.log(arr[7]);

// Array is mutable in nature.(We can change its index value.)
// arr[0] = 5666;
// console.log((arr));

// -----------------------------------------------------------
// Array Methods
// a = ['sonu','munu','kuna','piku'];

// console.log(a.toString());

// console.log(a.join(' or '));

// console.log(a.pop());  // removes the last element
// console.log(a);

// console.log(a.push('chiku'));  //add the element at the end
// console.log(a);

// console.log(a.shift());  //similar to pop but removes the first element
// console.log(a);

// console.log(a.unshift('tilu'));  //similar to push but add the element at first
// console.log(a);

// delete(a[3]);
// console.log(a);
// console.log(a.length);
// console.log(a[3])

// let a1 = [1,2,3];
// let a2 = [4,5,6];
// let a3 = [7,8,9];
// console.log(a1.concat(a2,a3));

// let arr1 = [3,5,2,7,1,8,4,9,6];
// console.log(arr1.sort());

// let numArr = [3,5,2,7,1,8,4,9,6];
// console.log(numArr.splice(1,4));
// console.log(numArr);
// console.log(numArr.splice(1,2,77,99));
// console.log(numArr);

// let nArr = [3,5,2,7,1,8,4,9,6];
// console.log(nArr.slice(6));
// console.log(nArr.slice(1,4));
// console.log(nArr);

// --------------------------------------
// Array with Loops
// let ar = [1,93,5,9,88];

// for (let i = 0; i < ar.length; i++) {
//     const element = ar[i];
//     console.log(element);
// }

// ar.forEach((value, index, ar) => {
//     console.log(value, index, ar)
// });

// for (const num of ar) {
//     console.log(num)
// }

// --------------------------------------------------------------------------------------------------------------
// Q.1->For a given array with marks of students ->[85,97,44,37,76,60]. Find the average mark of the entire class.
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (const val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`Average mark of the class = ${avg}`);

// ----------------------------------------------------------------------------------------------------------------------------
// Q.2->For a given array with prices of 5 items ->[250,645,300,900,50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// using for Loop
// let prices = [250,645,300,900,50];
// for (let i = 0; i < prices.length; i++) {
//     let offer = prices[i]/10;
//     prices[i] -= offer;
// }
// console.log('Final Price =',prices);

// ------------------------------------------------------------------------------------------------------------------------------
// Q.3->Create an array to store companies ->'Apple','MicroSoft','Uber','Google','IBM','Netflix'.
let companies = ['Apple','MicroSoft','Uber','Google','IBM','Netflix']

// Remove the first company from the array
companies.shift();
console.log(companies);

// Remove Uber & add Ola in its place.
companies.splice(1,1,'Ola');
console.log(companies);

// Add Amazon at the end.
companies.push('Amazon');
console.log(companies);