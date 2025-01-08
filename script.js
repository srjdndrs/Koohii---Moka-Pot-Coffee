// JavaScript for Slideshow
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex to show the next slide
    slideIndex++;

    // Reset slideIndex if it exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Initial call to start the slideshow
showSlides();








