// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI"); /*why this is in caps I'm not sure */
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); /*this is an "x" presumably */
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for(i = 0; i < close.length; i++){
  console.log(close[i])
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none"
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if(ev.target.tagName === "LI") { /* not sure why the li has to be in caps */
    ev.target.classList.toggle("checked");
  }
}, false);

//Create a new list item when clicking on the "add" button

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue === ""){
    alert("You must write something!")
  } else {
      document.getElementById("myUL").appendChild(li);
  }
document.getElementById("myInput").value = "";

// append the "x" button to the end of new items

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

// the "x" button closes the new items

  for (i = 0; i < close.length; i++){
    close[i].onclick = function() {
      var div =this.parentElement;
      div.style.display = "none";
    }
  }
}

//can you figure out a way to DRY this code?
//make it so the "enter" key adds new items to the list