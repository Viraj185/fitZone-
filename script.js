// ===== CONFIG =====
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxBCh6DPCRI6WzpUv5X62okz1GzP0zwTtwv4xNHslnBkwogOMaVPDC6AF9OEDc1oyKU/exec";

// ===== JOIN FORM HANDLER =====
document.addEventListener("DOMContentLoaded", () => {
    const joinForm = document.getElementById("joinForm");

    if (joinForm) {
        joinForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(joinForm);

            try {
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    body: formData
                });

                if (response.ok) {
                    alert("✅ Thank you for joining! We'll contact you soon.");
                    joinForm.reset();
                } else {
                    alert("⚠️ Something went wrong. Please try again later.");
                }
            } catch (error) {
                console.error("Form submission error:", error);
                alert("❌ Error sending your details. Check your connection.");
            }
        });
    }
});

// ===== MOBILE NAV TOGGLE =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== SCROLL ANIMATIONS =====
function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run on page load

// ===== HERO TEXT FADE IN =====
window.addEventListener("load", () => {
    const heroText = document.querySelector(".hero-text");
    if (heroText) {
        heroText.classList.add("fade-in");
    }
});
