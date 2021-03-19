var button = document.getElementById("beli");
var input = document.getElementById("inputUser");
var ul = document.querySelector("ul");

function inputLenght() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterKeypress(event) {
  if (inputLenght() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }
});
input.addEventListener("keypress", addListAfterKeypress);
