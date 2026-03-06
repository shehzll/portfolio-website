// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/* ---------------- HERO ANIMATION ---------------- */

gsap.from(".hero h1", {
    y: -50,
    opacity: 0,
    duration: 1
});

gsap.from(".hero p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

gsap.from(".hero button", {
    scale: 0,
    duration: 0.6,
    delay: 1
});


/* ---------------- NAVBAR ANIMATION ---------------- */

gsap.from("nav", {
    y: -80,
    opacity: 0,
    duration: 1
});


/* ---------------- ABOUT SECTION ---------------- */

gsap.from("#about", {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%"
    }
});


/* ---------------- SKILLS SECTION ---------------- */

gsap.from(".skill", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%"
    }
});


/* ---------------- PROJECTS SECTION ---------------- */

gsap.from(".project-card", {
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%"
    }
});


/* ---------------- CONTACT SECTION ---------------- */

gsap.from("#contact", {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%"
    }
});


/* ---------------- SMOOTH SCROLL ---------------- */

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });
});


