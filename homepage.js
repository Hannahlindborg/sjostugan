const nav = document.querySelector(".top-menu");

const threshold = 700;

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > threshold) {
    nav.classList.add("top-menu-with-background");
  } else {
    nav.classList.remove("top-menu-with-background");
  }
});

// Split scroll effect
//https://www.youtube.com/watch?v=3ePl0OnmG3Y

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const verticalScroll = document.querySelector(".vertical-scroll");
  //const leftColumn = document.querySelector(".left-column");
  const rightColumn = document.querySelector(".right-column");

  const tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "+1000",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  });

  tl.fromTo(
    rightColumn,
    { y: () => verticalScroll.offsetHeight - rightColumn.offsetHeight },
    { y: 0 },
    "start"
  );

  scrollTrigger.create({
    trigger: ".container",
    start: "top top",
    end: "",
    invalidateOnRefresh: true,
  });
});
