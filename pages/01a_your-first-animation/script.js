gsap.to(".card", {
    opacity: 1,
    scale: 1,
    duration: 1,
    onComplete: () => {
        gsap.to(".card", {
            y: -100,
            yoyo: true,
            repeat: -1,
            duration: 0.5
        });
        gsap.to(".card", {
            boxShadow: `0 0 10px rgba(0, 255, 150, 0.5),
            0 0 20px rgba(0, 150, 255, 0.4),
            0 0 40px rgba(0, 255, 200, 0.3)`,
            repeat: -1,
            yoyo: true,
            duration: 1,
        })
    }
})
