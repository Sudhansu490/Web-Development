// Name='Sudhansu Ranjan Nayak';
// console.log(Name);

// age=24;
// console.log(age);

// price=25.50;
// console.log(price);

// x=null;
// console.log(x);

// y=undefined;
// console.log(y);

// isEat=true;
// console.log(isEat);

// ------------------------------------
// Rules to define variables

// 1.Variable names are case sensitive.
// lastname='Nayak'
// lastName='Behera'
// console.log(lastname)
// console.log(lastName)

// 2.Only letters,digits,underscore(_) and $ is allowed.(not even space)
// 3.Only a letter,underscore(_) or $ should be 1st character.

// 3sonia='10'  //Error
// 23$0='ehjj'   //Error
// $value=25
// console.log($value)

// 4.Reserved words can't be variable names.
// console='somu'   //Error
// Console='Litu'
// console.log(Console)

// ---------------------------------------------------------------------
// var =>Variable can be re-declared & updated. A global scope variable.
// var age=23;
// var age=500;
// console.log(age);

// let =>Variable cannot be re-declared but can be updated. A block scope variable.
// let fullName='Sonu Sharma';
// console.log(fullName);

// let a;  
// console.log(a);
// a=10;
// console.log(a);   //update

// const =>Variable cannot be re-declared & updated. A block scope variable.
// const price=23.5
// price=50
// console.log(price)   //TypeError: Assignment to constant variable

// const a;
// console.log(a);  //SyntaxError: Missing initializer in const declaration