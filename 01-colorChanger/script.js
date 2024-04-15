const body = document.querySelector("body");
const buttonList = document.querySelectorAll(".button");

buttonList.forEach(function (button) {
  button.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
