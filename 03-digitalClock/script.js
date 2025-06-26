const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const ampm = document.querySelector("#ampm");
const hh = document.querySelector("#hh");
const mm = document.querySelector("#mm");
const ss = document.querySelector("#ss");
const dotH = document.querySelector(".h_dot");
const dotM = document.querySelector(".m_dot");
const dotS = document.querySelector(".s_dot");
let ap = "";

setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  ap = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = ap;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  dotH.style.transform = `rotate(${h * 30}deg)`;
  dotM.style.transform = `rotate(${m * 6}deg)`;
  dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);
