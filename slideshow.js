//JS for slideshows

    const slides = document.querySelectorAll(".slideshow-main .slide");
    const thumbnails = document.querySelector(".slideshow-thumbnails");
    const thumbnailImages = document.querySelectorAll(".slideshow-thumbnails img");

    let currentSlide = 0;
    let slideTimer;


    function showSlide(index) {
        slides.forEach(function(slide) {
            slide.classList.remove("active");
        });

        currentSlide = index;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

        moveThumbnails();
    }


    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    function manualNext() {
        nextSlide();
        resetTimer();
    }
    function selectSlide(index) {
        showSlide(index);
        resetTimer();
    }

    function prevSlide() {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    }
    

    function manualPrev() {
        prevSlide();
        resetTimer();
    }
    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 3000);
    }


    function moveThumbnails() {
    const visibleThumbnails = 5;
    const maxPosition = thumbnailImages.length - visibleThumbnails;

    let position = currentSlide;

    if (position > maxPosition) {
        position = maxPosition;
    }

    if (position < 0) {
        position = 0;
    }

    thumbnails.style.transform =
        "translateX(-" + (position * 6) + "rem)";
}
    resetTimer();
    


//JS for image animation tracking


const testimonyItems =
    document.querySelectorAll(".testimony-animation");

const testimonyObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

testimonyItems.forEach(function(item) {
    testimonyObserver.observe(item);
});
