// Attributes

// let divbox = document.querySelector('div');
// console.log(divbox);
// let ID = divbox.getAttribute('id');
// console.log(ID);
// let Name = divbox.getAttribute('name');
// console.log(Name);

// let Para = document.querySelector('p');
// console.log(Para.getAttribute('class'));
// console.log(Para.setAttribute('class','newClass'));

// ------------------------------------------------
// Style
// let Div = document.querySelector('div');
// console.log(Div.style);
// Div.style.backgroundColor = 'red';
// Div.style.fontSize = '25px';
// Div.innerText = 'Hello!'

// --------------------------------------------------
// Insert Elements => let El=document.createElement('div')

let newBtn = document.createElement('button');
newBtn.innerText = "Click ME!";
console.log(newBtn);
let newHeading = document.createElement('h1');
newHeading.innerHTML ="<i>DOM Manipulation</i>";

// node.append(El)-> adds at the end of node(inside)
let div = document.querySelector('div');
div.append(newBtn);

// node.prepend(El)-> adds at the start of node(inside)
div.prepend(newBtn);
document.querySelector('body').prepend(newHeading);

// node.before(El)-> adds before the node(outside)
div.before(newBtn);

// node.after(El)-> adds after the node(outside)
let para = document.querySelector('p');
para.after(newBtn);

// --------------------------------------------------
// Delete Element => node.remove()-> removes the node

let prgrph = document.querySelector('p');
prgrph.remove();