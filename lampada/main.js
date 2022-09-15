const turnOn = document.querySelector("#turnOn");
const turnOff = document.querySelector("#turnOff");
const lamp = document.querySelector("#lamp");

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "assets/img/ligada.png";
  }
}
function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "assets/img/desligada.png";
  }
}

function lampBroken() {
  lamp.src = "assets/img/quebrada.png";
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);
