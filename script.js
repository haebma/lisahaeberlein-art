let slideIndex = 0;
<<<<<<< HEAD
showSlides();

// Function to show the slides
function showSlides() {
=======
var manually = 0;
showSlides();

// Function to show the slides
function showSlides(c) {
>>>>>>> 991522b68eea7f03825b5dfa5292039f71d1d3bd
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
<<<<<<< HEAD
    setTimeout(showSlides, 4500); // Change image every 5 seconds
=======
    if (!manually){
        setTimeout(showSlides, 4500); // call showSlides again after 4500ms
    }
>>>>>>> 991522b68eea7f03825b5dfa5292039f71d1d3bd
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n - 1; // Adjust slideIndex to the correct position
<<<<<<< HEAD
=======
    if (slideIndex < 0) slideIndex = 0;
    manually = 1;
>>>>>>> 991522b68eea7f03825b5dfa5292039f71d1d3bd
    showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n - 1; // Set slideIndex to the correct position
<<<<<<< HEAD
=======
    manually = 1;
>>>>>>> 991522b68eea7f03825b5dfa5292039f71d1d3bd
    showSlides();
}
