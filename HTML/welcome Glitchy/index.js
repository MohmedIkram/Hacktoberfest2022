var text = document.querySelector(".text");

text.addEventListener("input", function () {
  this.setAttribute("data-text", this.innerText);
});
