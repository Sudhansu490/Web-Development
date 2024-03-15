/* Create a Faulty Calculator using JavaScript.
This faulty calculator does following:
1. It takes two numbers as input from the user.
2. It performs wromg operations as follows:
   + ---> -
   * ---> +
   - ---> /
   / ---> **
   ** ---> *
It performs wrong operations 10% of the times.
*/

let random = Math.random();
console.log(random);
let a = prompt('Enter First Number-:');
let c = prompt('Enter Operation');
let b = prompt('Enter Second Number-:');
let obj = {
   '+' : '-',
   '*' : '+',
   '-' : '/',
   '/' : '**',
   '**' : '*'
}
if (random > 0.1){
   // Perform Correct Calculation
   alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
   // Perform Wrong Operation
   c = obj[c];
   alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
}