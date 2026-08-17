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



//JS for mobile navbar button and animation

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", function(event) {
    event.stopPropagation();

    navLinks.classList.toggle("show-menu");
    menuButton.classList.toggle("rotate");
});

navLinks.addEventListener("click", function(event) {
    event.stopPropagation();
});

document.addEventListener("click", function() {
    navLinks.classList.remove("show-menu");
    menuButton.classList.remove("rotate");
});

//JS for dropdown menu actions

const classesLink = document.querySelector(".dropdown > a");
const dropdownMenu = document.querySelector(".dropdown-menu");

classesLink.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    
    dropdownMenu.classList.toggle("show-dropdown");
});


document.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown")) {
        dropdownMenu.classList.remove("show-dropdown");
    }
}, true);