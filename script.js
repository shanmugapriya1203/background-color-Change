var r;
var g;
var b;
var color;

function backgroundColor() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  color = `rgb(${r},${g},${b})`;
  document.getElementById("container").style.background = color;
  document.getElementById("color").innerHTML = color;

}

window.onload = function() {
  backgroundColor();
}