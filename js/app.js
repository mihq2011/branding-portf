/* Smooth Scroll */
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

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


