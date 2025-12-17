export function initAboutPage() {
  document.fonts.ready.then(() => {
    initSplitText();
  });
}

function initSplitText() {
  const split = SplitText.create("#sjöstugan-title", {
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
