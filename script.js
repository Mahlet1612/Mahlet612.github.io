// ==========================
// Smooth Scroll for Navigation
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});

// ==========================
// Close Menu After Clicking
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});

// ==========================
// Fade-in Animation
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".section,.timeline-item,.skill-card,.award-item,.card").forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});

// ==========================
// Only One Project Open
// ==========================

const projectDetails = document.querySelectorAll("#projects details");

projectDetails.forEach(detail => {

    detail.addEventListener("toggle", function () {

        if (this.open) {

            projectDetails.forEach(other => {

                if (other !== this) {

                    other.removeAttribute("open");

                }

            });

        }

    });

});
