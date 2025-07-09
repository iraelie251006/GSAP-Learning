import gsap from "gsap";

const cardBox = document.querySelector("#card");

gsap.from(".card", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power2.out"
});


cardBox.addEventListener("mouseenter", () => {
    gsap.to("#card", {
        duration: 0.6,
        rotationY: 180,
        ease: "power2.inOut",
        transformOrigin: "center center"
});
})

cardBox.addEventListener("mouseleave", () => {
    gsap.to("#card", {
        duration: 0.6,
        rotationY: 0,
        ease: "power2.inOut",
        transformOrigin: "center center"
});
})