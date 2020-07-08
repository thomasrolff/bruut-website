gsap.registerPlugin(ScrollTrigger);

// gsap.to(".lp", {
//   duration: .2, 
//   x: 200, rotation: 360
// });
  

// You can use a ScrollTrigger in a tween or timeline
gsap.to(".lp", {
  x: 200,
  // rotation: 360, 
  scrollTrigger: {
    trigger: ".banner",
    start: "top 72%",
    end: "top 15%",
    scrub: 0,
    markers: true,
    id: "scrub"
  }
});