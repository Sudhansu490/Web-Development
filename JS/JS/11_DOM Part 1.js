document.title = 'DOM';
// console.log(window);
// console.log('Hello');
// window.console.log('Hello2');
// console.log(document);
// console.dir(document);
// console.log(document.body);
// console.dir(document.body);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].rows);

// write the below code in console then the background color changes dynamically to green.
// document.body.style.background('green');

// ---------------------------------------------------------------------------------------
//DOM Manipulation

// 1.Selecting with ID
// let Heading = document.getElementById("head-ID");
// console.log(Heading);
// console.dir(Heading);

// 2.Selecting with Class
// let Headings = document.getElementsByClassName('head-class');
// console.log(Headings);
// console.dir(Headings);

// 3.Selecting with Tag
// let paras = document.getElementsByTagName('p');
// console.log(paras);
// console.dir(paras);

// 4.Query Selecter
// let first_el = document.querySelector('#b-ID');  //with ID
// console.dir(first_el);
// let first_element = document.querySelector('.head-class');  //with Class
// console.dir(first_element);
let first_elem = document.querySelector('p'); //with Tag Name
// console.dir(first_elem);
// let all_elements = document.querySelectorAll('p');  //returns a Node List.
// console.dir(all_elements);

// --------------------------------------------------------------------------
// Properties of DOM Manipulation

// tagName-: returns tag for element nodes.
// console.log(first_elem);
// console.log(first_elem.tagName);

// innerText-: returns the text content of the element and all its children.
let div = document.querySelector('div');
console.dir(div);
console.log(div.innerText);
let old_Head = document.querySelector('h1');
// We can also changes the value at runtime. Write the below code at console.
// old_Head.innerText = 'New Heading';
// old_Head.innerHTML = '<i>New Heading</i>';

// innerHTML-: returns the plain text or HTML contents in the element.
console.log(div.innerHTML);

// outerHTML-: It contains the innerHTML & element itself.
// console.log(div.outerHTML);

// textContent-: returns textual content even for hidden elements.
// console.log(old_Head.textContent);