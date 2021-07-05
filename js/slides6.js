var slideIndex = 1;
showSlides6(slideIndex);

// Next/previous controls
function plusSlides6(n) {
  showSlides6(slideIndex += n);
}

// Thumbnail image controls
function currentSlide6(n) {
  showSlides6(slideIndex = n);
}

function showSlides6(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides6");
  var dots = document.getElementsByClassName("demo6");
  var captionText = document.getElementById("caption6");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}