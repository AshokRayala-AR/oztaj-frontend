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
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      ImgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  ImgObserver.observe(image);
});

const navLink = document.querySelectorAll(".normal");
for (let i = 0; i < navLink.length; i++) {
  
  if (i === 0) {
      navLink[i].addEventListener("click", function () {
      navLink[0].classList.add("color");
      navLink[1].classList.remove("color");
      navLink[2].classList.remove("color");
      navLink[3].classList.remove("color");
      navLink[4].classList.remove("color");
    });
  }
  else if (i === 1) {
    navLink[i].addEventListener("click", function () {
      navLink[0].classList.remove("color");
      navLink[1].classList.add("color");
      navLink[2].classList.remove("color");
      navLink[3].classList.remove("color");
      navLink[4].classList.remove("color");
    });
  }
  else if (i === 2) {
    navLink[i].addEventListener("click", function () {
      navLink[0].classList.remove("color");
      navLink[1].classList.remove("color");
      navLink[2].classList.add("color");
      navLink[3].classList.remove("color");
      navLink[4].classList.remove("color");
    });
  }
  else if (i === 3) {
    navLink[i].addEventListener("click", function () {
      navLink[0].classList.remove("color");
      navLink[1].classList.remove("color");
      navLink[2].classList.remove("color");
      navLink[3].classList.add("color");
      navLink[4].classList.remove("color");
    });
  }
  else if (i === 4) {
    navLink[i].addEventListener("click", function () {
      navLink[0].classList.remove("color");
      navLink[1].classList.remove("color");
      navLink[2].classList.remove("color");
      navLink[3].classList.remove("color");
      navLink[4].classList.add("color");
    });
  }
}
