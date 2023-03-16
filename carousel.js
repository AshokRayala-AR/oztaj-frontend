// quotation scrolling script

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

// progressive image loading script

const images = document.querySelectorAll("[src]");
function preloadImage(img) {
  const source = img.getAttribute("src");
  if (!source) {
    return;
  }
  img.src = source;
}
const imgOptions = {};

const ImgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
})