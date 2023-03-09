let qContainer = document.getElementById("qcontainer");
let quotes = qContainer.children;
let current = quotes.length - 1;

setInterval(function () {
  quotes[current].classList.remove("display");
  current = (current + 1) % quotes.length;
  quotes[current].classList.add("display");
  console.log("curr", quotes[current].innerHTML);
}, 1500);
