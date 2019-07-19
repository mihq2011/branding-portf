/* AOS init */
AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'animated',
});

/*Mobile Menu */
var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')
var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn);

/* Scroll Reveail */
window.sr = ScrollReveal();

sr.reveal('#top .blue-square', {
  duration: 1500,
  origin: 'right',
  distance: '1200px',
  mobile: false
});

sr.reveal('#top .background-img', {
  duration: 1200,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  distance: '0',
  delay: 650,
  mobile: false
});

sr.reveal('.logo', {
  duration: 700,
  scale: 100,
  delay: 2100,
  mobile: false
});

sr.reveal('#top a', {
  duration: 700,
  scale: 0,
  delay: 2900,
  mobile: false
});

sr.reveal('#services h1', {
  duration: 700,
  scale: 0,
  delay: 500,
  mobile: false
});

sr.reveal('#services .services-container .box', {
  duration: 700,
  scale: 0,
  delay: 650,
  mobile: false
});

sr.reveal('#portfolio .portfolio-container .box', {
  duration: 1000,
  scale: 10,
  delay: 1000,
  mobile: false
});

/* TypedJS */
var typed = new Typed(".type", {
  strings: ["Mauricio Heredia"],
  typeSpeed: 40,
  backSpeed: 20,
  startDelay:1200,
  loop: false
});

/* Maps API */
var map = new GMaps({
  el: '#map',
  lat: 34.256363,
  lng: -118.465736,
  zoom: 10.3
});
