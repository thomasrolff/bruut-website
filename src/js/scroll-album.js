gsap.registerPlugin(ScrollTrigger);

// You can use a ScrollTrigger in a tween or timeline
gsap.to(".lp", {
  x: 208,
  // rotation: 360, 
  scrollTrigger: {
    trigger: ".banner",
    start: "top 75%",
    end: "top 25%",
    scrub: 0,
    // markers: true,
    id: "scrub"
  }
});