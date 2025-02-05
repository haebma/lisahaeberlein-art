let slideIndex = 0;
var manually = 0;
showSlides();

// Function to show the slides
function showSlides() {
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
    if (!manually){
        setTimeout(showSlides, 4500); // call showSlides again after 4500ms
    }
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n - 1; // Adjust slideIndex to the correct position
    if (slideIndex < 0) slideIndex = 0;
    manually = 1;
    showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n - 1; // Set slideIndex to the correct position
    manually = 1;
    showSlides();
}

// Touch event listeners for swipe functionality
let startX;

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!startX) return;

    let endX = event.touches[0].clientX;
    let diffX = startX - endX;

    if (Math.abs(diffX) > 20){ // Swipe threshold
        if (diffX > 0){
            plusSlides(1);
        } else {
            plusSlides(-1);
        }
        startX = null; // reset after each swipe
    }
}

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

