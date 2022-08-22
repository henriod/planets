gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TweenMax);
gsap.to(".sun_img", {
  rotation: 360,
  duration: 38,
  repeat: -1,
  ease: Power0.easeNone,
});
const tr = gsap.timeline({
  scrollTrigger: {
    trigger: ".general",
    start: "60% 20%",
    end: "bottom 20%",
    scrub: false,
    // pin: ".general",
    toggleActions: "play none none reverse",
  },
});
// tr.to(".panel", {
//   duration: 1,
//   y: 400,
//   ease: "circ.in",
//   repeat: 1,
//   yoyo: true,
// });

const tz = gsap.timeline({
  scrollTrigger: {
    trigger: ".details",
    start: "top 60%",
    end: "bottom top",
    // markers: true,
    scrub: false,
    // pin: ".general",
    toggleActions: "play none none reverse",
    onEnterBack:
      () =>
      ({ progress, direction, isActive }) =>
        console.log(progress, direction, isActive),
  },
});
tz.to(".merc_img", {
  css: {
    top: "400px",
    left: "300px",
    height: "340px",
  },
  ease: "none",
});
tz.add(() => {
  merc_img.pause();
});

tz.to(" .venus_img,.earth_img,.mars_img", {
  y: -400,
  duration: 0.2,
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".general",
    start: "top top",
    end: "bottom top",
    // markers: true,
    scrub: false,
    // pin: ".general",
    toggleActions: "play none none reverse",
  },
});
tl.to(
  ".indicator",
  {
    opacity: 0,
  },
  0
);
tl.to(".sun", {
  opacity: 0,
});
tl.to(".title", {
  opacity: 0,
});
tl.to(".mercury, .venus,.earth,.mars", {
  css: { border: "none" },
});
// plannnet scroll trigger animation
tl.to(".merc_img", {
  css: {
    top: "180px",
    left: "300px",
  },
  ease: "none",
});
tl.to(".venus_img", {
  css: {
    top: "340px",
    left: "380px",
  },
  ease: "none",
});
tl.to(".earth_img", {
  css: {
    top: "850px",
    left: "910px",
  },
  ease: "none",
});
tl.to(".mars_img", {
  css: {
    top: "1680px",
    left: "1380px",
  },
  ease: "none",
});
// tl.to(".venus_img", {
//   x: 200,
//   y: -410,
//   scale: 1.4,
// });

// mercury
let merc = gsap.fromTo(
  ".mercury",
  {
    rotation: 220,
  },
  {
    rotation: 330,
    duration: 3,
    ease: "linear",
    // repeat: -1,
  }
);
let merc_img = gsap.fromTo(
  ".merc_img",
  {
    x: 800,
    rotation: 0,
  },
  {
    x: 800,
    rotation: -360,
    duration: 1,
    repeat: -1,
    ease: "none",
  }
);
//venus
gsap.fromTo(
  ".venus",
  {
    rotation: 300,
  },
  {
    rotation: 360,
    duration: 5,
    ease: "linear",
    // repeat: -1,
  }
);
gsap.fromTo(
  ".venus_img",
  {
    x: 1100,
    rotation: 0,
  },
  {
    x: 1100,
    rotation: -360,
    duration: 3,
    repeat: -1,
    ease: "none",
  }
);
// Earth animations
gsap.fromTo(
  ".earth",
  {
    rotation: 310,
  },
  {
    rotation: 345,
    duration: 7,
    ease: "linear",
    // repeat: -1,
  }
);
gsap.fromTo(
  ".earth_img",
  {
    x: 1400,
    rotation: 0,
  },
  {
    x: 1400,
    rotation: -360,
    duration: 7,
    repeat: -1,
    ease: "none",
  }
);
//mars
gsap.fromTo(
  ".mars",
  {
    rotation: 300,
  },
  {
    rotation: 330,
    duration: 7,
    ease: "linear",
    // repeat: -1,
  }
);
gsap.fromTo(
  ".mars_img",
  {
    x: 1700,
    rotation: 0,
  },
  {
    x: 1700,
    rotation: -360,
    duration: 9,
    repeat: -1,
    ease: "none",
  }
);
