// Primitive Data Types(7)
// 1.Number
// let age=24;
// let price=50.5;
// console.log(typeof age);
// console.log(typeof price);

// 2.String
// let fullName='Sonu Sharma'
// console.log(typeof fullName);

// 3.Boolean
// isFollow=true;
// console.log(typeof isFollow);

// 4.Undefined
// let a;
// console.log(typeof a);

// 5.Null
// let x=null;
// console.log(typeof x);

// 6.BigInt
// let y = BigInt('1234567890');
// console.log(typeof y);

// 7.Symbol
// let z = Symbol('Hello!');
// console.log(typeof z);

// Non-Primitive Data Types
// 1.Objects
const student = {
    fullName: 'Susan Mohanty',
    age: 24,
    cgpa: 7.71,
    isPass: true
};
console.log(typeof student);
console.log(student['cgpa']);   //1st method
console.log(student.isPass);   //2nd method
student['age']= student.age+5;   //updating
console.log(student.age);