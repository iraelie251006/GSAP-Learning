import gsap from "gsap";

const icons = document.querySelectorAll(".reactions button");

icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
        gsap.fromTo(icon, {
            scale: 1,
        }, {
            y: -10,
            rotateY: 30,
            repeat: -1
        })
    });

    icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
            scale: 1,
            y: 0,
            rotateY: 0,
            repeat: 0
        })
})

})