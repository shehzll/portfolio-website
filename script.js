// Hero section animation
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


// Navigation animation
gsap.from("nav", {
    y: -80,
    opacity: 0,
    duration: 1
});


// Section animation
gsap.from("#about", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: "#about"
});

gsap.from("#skills", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: "#skills"
});

gsap.from("#projects", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: "#projects"
});
