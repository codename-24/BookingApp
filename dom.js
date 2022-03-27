var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var count = 0;
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
form.addEventListener('submit', addItem);


function removeItem(e){
  if(e.target.classList.contains('delete')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
  }
}
function filterItems(e){
 
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  function addItem(e){
    e.preventDefault();
    
    const newItems = [];
    var newItem = document.getElementById('item').value;
    
    count++;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    for(let j=0;j<count;j++)
    {
    newItems.push(newItem[j]);
    localStorage.setItem('itemName'+[j],JSON.stringify(newItems));
    }
    
  }
 




