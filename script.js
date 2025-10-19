document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic (Existing Code) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set the theme
    function setTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeToggleBtn.querySelector('i').className = 'bx bxs-moon'; // Change to moon icon
        } else {
            body.classList.remove('light-mode');
            themeToggleBtn.querySelector('i').className = 'bx bxs-sun'; // Change to sun icon
        }
        localStorage.setItem('theme', theme); // Save preference
    }

    // Check for saved theme preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // If no preference saved, check OS preference
        setTheme('light');
    } else {
        setTheme('dark'); // Default to dark if no preference or OS preference is dark
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    // --- NEW: Current Year for Copyright (Paste this block) ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    // --- End of NEW Code ---

}); // Closes the DOMContentLoaded listener
/* =========================================== */
/* === NEW: HAMBURGER MENU TOGGLE === */
/* =========================================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Changes the icon to an 'X'
    navbar.classList.toggle('active'); // Shows/hides the mobile menu
};

/* =========================================== */
/* === Optional: Close menu when a link is clicked === */
/* =========================================== */
let navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x'); // Remove 'X'
        navbar.classList.remove('active'); // Hide menu
    };
});
