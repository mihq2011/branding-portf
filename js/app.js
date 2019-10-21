

/* AOS init */
AOS.init();

/*Mobile Menu */
var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')
var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn);

/* Scroll Reveail */
window.sr = ScrollReveal();

sr.reveal('.logo', {
  duration: 500,
  scale: 100,
  delay: 700,
  mobile: false
});

sr.reveal('#services .title, #portfolio .title, #blog .title, #testimonial .title', {
  duration: 700,
  scale: 0,
  delay: 0,
  mobile: false
});

sr.reveal('#services .services-container .box.blue', {
  duration: 500,
  scale: 0,
  delay: 300,
  mobile: false
});

sr.reveal('#services .services-container .box.red', {
  duration: 500,
  scale: 0,
  delay: 400,
  mobile: false
});

sr.reveal('#services .services-container .box.yellow', {
  duration: 500,
  scale: 0,
  delay: 500,
  mobile: false
});

sr.reveal('#portfolio .portfolio-container .box', {
  duration: 800,
  scale: 10,
  delay: 600,
  mobile: false
});

sr.reveal('#portfolio-projects .project-image .img', {
  duration: 700,
  distance: '1000px',
  origin: 'left',
  delay: 1000,
  mobile: false
});



/* TypedJS */
var typed = new Typed(".type", {
  strings: ["Mauricio  Heredia"],
  typeSpeed: 60,
  startDelay:0,
  loop: false
});


