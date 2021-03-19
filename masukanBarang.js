var button = document.getElementById("beli");
var input = document.getElementById("inputUser");
var ul = document.querySelector("ul");
var hapus = document.getElementById("tidakJadiBeli");

button.addEventListener("click", function addListAfterClick() {
  if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
});

input.addEventListener("keypress", function addListAfterKeypress(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
});


hapus.addEventListener("click", function addListAfterClick() {
  if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
});