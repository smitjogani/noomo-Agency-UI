const lenisJs = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 400);
  });

  gsap.ticker.lagSmoothing(0);
};
lenisJs();

function loadingAnimation() {
  const startingTl = gsap.timeline();

  startingTl.from(".page1-part5-text >h1", {
    y: 200,
    stagger: {
      amount: 1,
    },
  });

  startingTl.from("nav", {
    y: -100,
  });
}

loadingAnimation();

function page1Animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page1",
      start: "top 0",
      end: "top -800%",
      scrub: 1,
      pin: true,
      //   markers: true,
      // pinSpacing: false,
    },
  });

  tl.to(".page1-part5 nav", {
    top: "-100%",
  });

  tl.to(
    ".page1-part5-main-text",
    {
      scale: 2,
      top: "110%",
    },
    "a1"
  );

  tl.to(
    ".page1-part4",
    {
      top: "0%",
    },
    "a1"
  );

  tl.from(
    ".page1-part4-title>h1",
    {
      y: 500,
    },
    "a1"
  );

  tl.from(".page1-part4-text", {
    opacity: 0,
  });

  tl.to(
    ".page1-part4",
    {
      scale: 2,
      top: "200%",
    },
    "a2"
  );

  tl.to(
    ".page1-part3",
    {
      top: "0%",
    },
    "a2"
  );

  tl.from(
    ".page1-part3-title>h1",
    {
      y: 500,
    },
    "a2"
  );

  tl.from(".page1-part3-text", {
    opacity: 0,
  });

  tl.to(
    ".page1-part3",
    {
      scale: 2,
      top: "200%",
    },
    "a3"
  );

  tl.to(
    ".page1-part2",
    {
      top: "0%",
    },
    "a3"
  );

  tl.from(
    ".page1-part2-title>h1",
    {
      y: 500,
    },
    "a3"
  );

  tl.from(".page1-part2-text", {
    opacity: 0,
  });

  tl.to(
    ".page1-part2",
    {
      scale: 2,
      top: "200%",
    },
    "a4"
  );

  tl.to(
    ".page1-part1",
    {
      top: "0%",
    },
    "a4"
  );

  tl.from(
    ".page1-part1-title>h1",
    {
      y: 500,
    },
    "a4"
  );

  tl.from(".page1-part1-text", {
    opacity: 0,
  });

  tl.to(".page1-part1", {
    scale: 4,
    top: "65%",
  });
}

page1Animation();

function clutterAnimation(element) {
  const htmlTag = document.querySelector(element);
  let clutter = "";
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span>${word}</span>`;
  });
  htmlTag.innerHTML = clutter;
}

function page2Animation() {
  clutterAnimation(".page2>h1:nth-child(1)");
  clutterAnimation(".page2>h1:nth-child(2)");

  gsap.from(".page2>h1:nth-child(1)>span", {
    opacity: 0,
    stagger: {
      amount: 2,
      from: "center",
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top 50%",
      end: "top 25",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".page2>h1:nth-child(2)>span", {
    opacity: 0,
    stagger: {
      amount: 2,
      from: "center",
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".page2",
      start: "top 25%",
      end: "top 0",
      scrub: 1,
      // markers: true,
    },
  });
}

page2Animation();

function page3Animation() {
  const page3Tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page3",
      start: "top 0",
      end: "top -100%",
      scrub: 1,
      pin: true,
    },
  });

  page3Tl.from(
    ".page3-video",
    {
      y: 400,
      transform: "rotate(12deg)",
    },
    "a"
  );

  page3Tl.to(".page3-video", {
    height: "100%",
    width: "100%",
  });
}

page3Animation();

gsap.from(".page4-circle", {
  transform: "rotate(80deg)",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4",
    start: "top 0",
    end: "top -100%",
    pin: true,
    scrub: 1,
    makers: true,
  },
});

function page5Animation() {
  const page5Tl = gsap.timeline({
    repeat: -1,
  });

  page5Tl.from(".page5-box-img>img", {
    opacity: 0,
    stagger: 0.8,
  });

  const page5Elem = document.querySelectorAll(".page5-elem");
  page5Elem.forEach((elem, index) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(".page5-box-img", {
        opacity: 1,
      });
      for (let i = 0; i < page5Elem.length; i++) {
        if (index === i) {
          gsap.to(page5Elem[index], {
            opacity: 1,
          });
        } else {
          gsap.to(page5Elem[i], {
            opacity: 0.5,
          });
        }
      }
    });
  });

  const page5Box = document.querySelector(".page5-box");
  page5Box.addEventListener("mousemove", (dets) => {
    gsap.to(".page5-box-img", {
      left: dets.x - 100,
      top: dets.y - 300,
    });
  });

  page5Box.addEventListener("mouseleave", () => {
    gsap.to(".page5-box-img", {
      opacity: 0,
    });
    gsap.to(".page5-elem", {
      opacity: 1,
    });
  });
}

page5Animation();
