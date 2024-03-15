// Condotional Statements

// Check a Number is Even or Odd
// let num=10;
// if(num%2 == 0){
//     console.log(num,'is Even.');
// }
// else{
//     console.log(num,'is Odd.');
// }

// if else ladder
// let age=0;
// if(age>18){
//     console.log('You can Drive.');
// }
// else if(age==0){
//     console.log('Are you kidding me?')
// }
// else{
//     console.log('You cannot Drive.');
// }

// Q.1-> Get user to input a number using prompt('Enter a Number:'). Check if the number is a multiple of 5 or not.
// let num = prompt('Enter a Number: ');
// if(num%5 === 0){
//     console.log(num,'is a multiple of 5.');
// }
// else{
//     console.log(num,'is not a multiple of 5.');
// }

// Q.2-> WAP which can give grades to students according to their scores.
let score = 90;
// let score = prompt('Enter your Score(0-100):');
let grade;
if((score >= 90) && (score <= 100)){
    grade = 'O';
}
else if((score >= 80) && (score < 90)){
    grade = 'E';
}
else if((score >= 70) && (score < 80)){
    grade = 'A';
}
else if((score >= 60) && (score < 70)){
    grade = 'B';
}
else if((score >= 50) && (score < 60)){
    grade = 'C';
}
else if((score >= 40) && (score < 50)){
    grade = 'D';
}
else{
    grade = 'F-Fail';
}
console.log('According to your Score, your Grade was:',grade);