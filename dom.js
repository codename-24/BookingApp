var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
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
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    localStorage.setItem("Item",JSON.stringify(newItem));
    let retrievedData = JSON.parse(localStorage.getItem("Item"));
    console.log(retrievedData);
  }
 




