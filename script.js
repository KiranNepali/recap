var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top 50%",
    end: "top -5%",
    scrub: 1,
    // markers: true,
  },
});

gsap.from("#hero-img", {
    opacity: 0, 
    duration:4,
    scrub: 1,
});

tl1.to(
  "#side-img1",
  {
    position: "fixed",
    top: "50%",
    left: "-19vh",
    duration: 4,
  },
  "top"
);
tl1.to(
  "#side-img2",
  {
    position: "fixed",
    top: "50%",
    right: "-65vh",
    opacity: 1,
    duration: 4,
  },
  "top"
);
tl1.from(
  ".page2 p",
  {
    x: "-20%",
    opacity: 0,
    duration: 5,
    delay: 2,
  },
  "top"
);
tl1.from(
  ".page2 h1",
  {
    x :"50%",
    opacity: 0,
    duration: 5,
    delay: 4,
  },
  "top"
);
tl1.from(
  ".page2 h2",
  {
    x: "-10%",
    opacity: 0,
    duration: 5,
    delay: 4,
  },
  "top"
);
tl1.from(
  ".page2 .img-box",
  {
    opacity: 0,
    duration: 5,
  },
  "top"
);
// <!-- class="fixed top-1/2 left-[53vh] transform -translate-y-1/2 text-[10rem] h-[7vw] w-[20vw] " -->
// <!-- class="fixed top-1/2 right-[40vh] -translate-y-1/2 text-white text-[10rem] h-[5vw] w-[47vw]  " -->

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page5",
    start: "top 50%",
    end: "top 0",
    scrub: 1,
  },
});

tl2.to(
  "#side-img1",
  {
    left: "53vh",
    duration: 4,
  },
  "bottom"
);

tl2.to(
  "#side-img2",
  {
    right: "40vh",
    duration: 4,
  },
  "bottom"
);
