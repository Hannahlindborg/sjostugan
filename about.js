// Split scroll effect
//https://www.youtube.com/watch?v=3ePl0OnmG3Y

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const verticalScroll = document.querySelector(".vertical-scroll");
  const leftColumn = document.querySelector(".left-column");
  const rightColumn = document.querySelector(".right-column");
  const images = gsap.utils.toArray(".img-wrapper img");

  gsap
    .timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: `+=${images.lenght * 50}%`,
        scrub: 2,
        invalidateOnRefresh: true,
      },
    })

    .to(leftColumn, {
      y: () => -(leftColumn.offsetHeight - verticalScroll.offsetHeight),
    })
    .fromTo(
      rightColumn,
      {
        y: () => -(verticalScroll.offsetHeight - rightColumn.offsetHeight),
      },
      {
        y: 0,
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".column",
    start: "top 80%",
    end: "",
    invalidateOnRefresh: true,
    pin: true,
  });
});
