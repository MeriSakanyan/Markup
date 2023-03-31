// slideShow 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// hamburger menu 
function toggleClass(){
  let menu = document.querySelector(".mainMenu");
  menu.classList.toggle("toggleCls");
}


// Fade in Ob scroll
window.addEventListener('scroll', ()=>{
  let content = document.querySelector('.images');
 
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(contentPosition < screenPosition) {
    content.classList.add('active');
  } else {
    content.classList.remove('active')
  }
}); 