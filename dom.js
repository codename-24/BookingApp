var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);

for(var i=0; i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
var li = document.getElementsByTagName('li');
li[4].style.color = 'green';
console.log(li[4]);

var qs = document.querySelector('.list-group-item');
qs.style.backgroundColor = 'red';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = '#f4f4f4';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';

var qsa = document.querySelectorAll('.list-group-item');
qsa[1].style.color = 'red';

var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var j=0;j<odd.length;j++){
    odd[j].style.backgroundColor='green';
}