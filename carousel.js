var quotation = document.getElementById("quote-para");
const quotes = [
  "We fuel your growth",
  "We help your business grow",
  "Your partner in Tax and Accounting Compliance!",
];

var typewriter = new Typewriter(quotation, {
  loop: true,
  delay: 15,
  deleteSpeed: 15,
  strings: quotes,
  autoStart: true,
  pauseFor: 3000,
});
