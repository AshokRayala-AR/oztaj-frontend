var quotation = document.getElementById('quote-para');
const firstQuote = 'We fuel your growth';
const secondQuote = 'We help your business grow';
const thirdQuote = 'Your partner in Tax and Accounting Compliance!';

var typewriter = new Typewriter(quotation, {
  loop: true,
  delay: 125,
  strings : [firstQuote, secondQuote, thirdQuote],
  autoStart: true,
  pauseFor:
  3000
});

 
