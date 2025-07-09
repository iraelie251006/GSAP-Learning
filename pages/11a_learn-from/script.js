import gsap from "gsap";

const repeat = document.querySelector(".repeat");

gsap.to(".card", {
    y: 100,
  delay: 2,
})

const animation = gsap.from(".card", {
    opacity: 0,
    y: 100,
    duration: 1,
    scale: 0,
    delay: 3,
    ease: "power2.inOut",
    stagger: 0.2,
    immediateRender: false
});


repeat.addEventListener("click", () => {
    animation.restart();
    console.log("clicked")
});
