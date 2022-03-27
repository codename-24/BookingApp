//parent
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//childNodes
console.log(itemList.childNodes);
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);

//siblings
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);

//create
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container= document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px';

var newDiv2 = document.createElement('div');
newDiv2.className = 'hello1';
newDiv2.id = 'hello2';
newDiv.setAttribute('title','Hello Div2');
var newDivText2 = document.createTextNode('Hello 1');
newDiv2.appendChild(newDivText2);

var container2= document.querySelector('.title');
var h2 = document.querySelector('header h2');
console.log(newDiv2);
container2.insertBefore(newDiv2, h2);
newDiv2.style.fontSize = '30px';


