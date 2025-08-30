// -------------------------
// Navigation Menu Toggle
// -------------------------

// Get references to menu button, nav links container, and the icon inside the button
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Event: Toggle navigation menu when menu button is clicked
menuBtn.addEventListener("click", (e) => {
    // Toggle "open" class to show/hide nav links
    navLinks.classList.toggle("open");

    // Check if menu is open
    const isOpen = navLinks.classList.contains("open");

    // Change icon based on menu state (hamburger ↔ close)
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

// Event: Close menu when a nav link is clicked
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// -------------------------
// Scroll Reveal Animations
// -------------------------

// Common reveal options
const scrollRevealOption = {
    distance: "50px",  // move element up by 50px when revealing
    origin: "bottom",  // animation starts from bottom
    duration: 1000,    // animation lasts 1 second
};

// Reveal heading
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});

// Reveal paragraph (with delay for smooth sequence)
ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 500,
});

// Reveal buttons (with more delay for sequencing)
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1000,
});
