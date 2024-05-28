const clock = document.querySelector(".clock");

setInterval(() => {
  let d = new Date();
  clock.innerHTML = d.toLocaleTimeString();
}, 1000);
