var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

itemList.addEventListener('click', removeItem);

function removeItem(e){
  if(e.target.classList.contains('delete')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
  }
}




