//ScrollTrigger cabin cards

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const cabinCards = document.querySelectorAll(".cabin");

  gsap.set(cabinCards, {
    opacity: 0,
    y: 50,
  });

  cabinCards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        once: true,
      },
    });
  });
});
