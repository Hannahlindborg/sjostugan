//ScrollTrigger cabin cards

export function initCabinIndexPage() {
  document.fonts.ready.then(() => {
    return gsap.context(() => {
      initSplitText();
      initCabinCardTrigger();
    });
  });
}

//Title animation
function initSplitText() {
  const split = SplitText.create("#title", {
    type: "chars",
    charsClass: "char",
  });

  if (!split) return;

  gsap.from(
    split.chars,
    {
      x: -120,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.035,
      ease: "power4.out",
    },
    "+=0.3"
  );
}

function initCabinCardTrigger() {
  const cabinCards = document.querySelectorAll(".cabin");
  if (!cabinCards) return;

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
}
