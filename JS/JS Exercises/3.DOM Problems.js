// Q.1-Create a H2 heading element with text -:'Hello JavaScript!'. Append 'from Apna College students' to this text using JS.
// let h2 = document.querySelector('h2');
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from Apna College students";

// ------------------------------------------------------------------------------------------------------------------------------
// Q.2-Create 5 divs with common class name -:"box". Access them then change the color to 'greenyellow' & add some unique text to each of them.
// let divs = document.querySelectorAll('.box');
// divs.forEach(e =>{
//     e.style.backgroundColor = 'greenYellow';
// })
// let i = 1;
// for (let div of divs) {
//     div.innerText = `new unique value ${i}`;
//     console.log(div.innerText);
//     i++;
// }

// ------------------------------------------------------------------------------------------------------------------------------
// Q.3-Create a new button element.Give it a text 'click me', background color of red & text color of white. Insert the button as the first element inside the body tag.
// let btn = document.createElement('button');
// btn.innerText = 'Click ME!';
// btn.style.backgroundColor = 'red';
// btn.style.color = 'white';
// document.querySelector('body').prepend(btn);

// ---------------------------------------------------------------------------------------------------------------------------------
// Q.4-Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS & try to append this class to the <p> element. Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
let para = document.querySelector('p');
console.log(para.getAttribute('class'));
// console.log(para.setAttribute('class','newClass'));
// If we use the above property then newClass overrides the class so we cannot use this property.
console.log(para.classList.add('newClass'));