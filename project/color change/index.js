const buttons = document.querySelectorAll(".button"); // NodeList
console.log(buttons);

let intervalID; // Variable to store interval ID

function log(e, button) {
  console.log(e.target);
  if (e.target.id === button.id) {
    document.querySelector("body").style.backgroundColor = button.id;
    alert("Debasish");
  }
}

function color() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

buttons[5].addEventListener("click", (e) => {
  if (intervalID) {
    clearInterval(intervalID); // Stop the interval if it's running
    intervalID = null; // Reset interval ID
  } else {
    intervalID = setInterval(() => {
      document.querySelector("body").style.backgroundColor = color();
    }, 1000);
  }
});