var item = ["go to the merket", "buy books"];
set = new Set (["go to the merket", "buy books"]);

function attach() {
   var ul = document.querySelector(".items");
for(var i =0; i<item.length; i++) {
        var li = makeList(item[i]);
        ul.appendChild(li);
        }

}

function makeList(text) {
var li = document.createElement("li");
var a = document.createElement("a");
a.href = "#";
a.innerHTML = "x";
a.onclick = function() {
    deleteItem(this);
}
var textNode = document.createTextNode(text);
li.appendChild(a);
li.appendChild(textNode);
return li;
}

function clear() {
    var itemList = document.querySelector(".items");
    itemList.innerHTML = "";
}

function handleClickEvent() {
   var inputItem = document.querySelector("#new-item");
    var val = inputItem.value;
    if(set.has(val)) {
        document.querySelector(".msg").innerHTML = "item exist";
    }
    else if(val) {
         item.push(val);
    clear();
    attach(item);
    set.add(val);
  inputItem.value = '';
    }
  else
    {
        document.querySelector(".msg").innerHTML = "Invalid Entry";
    }
    
}

function deleteItem(anchor) {
    var items = anchor.parentNode.lastChild.textContent;
    var index = item.indexOf(items);
    if(index !== -1) {
        item.splice(index, 1);
    clear();
    attach();
}
console.log(index);
}
document.querySelector("#addItem").addEventListener("click", handleClickEvent);

attach(item);