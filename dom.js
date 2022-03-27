var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor = "green";
for(var i=0; i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
var li = document.getElementsByTagName('li');
li[4].style.color = 'green';
console.log(li[4]);

