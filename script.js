// Typed.js details for landing page
var typed = new Typed("#element", {
    strings: [
        "API/devOPS'er",
        "UI/UX Designer",
        "Technical Writer",
        "Freelance Dev",
        "Data Engineer",
        "Software Developer"
    ],
    typeSpeed: 75,
});

// Dynamic fetching year in footer
const currYear = document.querySelector('#currYear');
currYear.textContent = new Date().getFullYear();