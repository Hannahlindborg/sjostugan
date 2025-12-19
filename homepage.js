export function initHomePage() {
  document.fonts.ready.then(() => {
    return gsap.context(() => {
      initMenuScroll();
      initSplitTextLogo();
      initIntroductionTrigger();
      initCabinSection();
      initBreakfastSection();
      initExploreSection();
      initTestimonialTitle();
      initTestimonialSlider();
      initTestimonialTrigger();
    });
  });
}

// Menu background on scroll

function initMenuScroll() {
  const nav = document.querySelector(".top-menu");
  if (!nav) return;

  const threshold = 700;

  window.addEventListener("scroll", () => {
    if (window.scrollY > threshold) {
      nav.classList.add("top-menu-with-background");
    } else {
      nav.classList.remove("top-menu-with-background");
    }
  });
}

//Split text logo

function initSplitTextLogo() {
  setTimeout(() => {
    let split = SplitText.create("#hero-title", { type: "chars" });
    if (!split) return;

    gsap.from(split.chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.1,
    });
  }, 500);
}

// Split scroll effect
//https://www.youtube.com/watch?v=3ePl0OnmG3Y

function initIntroductionTrigger() {
  const verticalScroll = document.querySelector(".vertical-scroll");
  const textColumn = document.querySelector(".text-column");
  if (!verticalScroll || !textColumn) return;

  const tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: ".column",
      start: "top 80%",
      end: "+1500",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  });

  tl.fromTo(
    textColumn,
    { y: () => verticalScroll.offsetHeight - textColumn.offsetHeight },
    { y: 0 },
    "start"
  );

  ScrollTrigger.create({
    trigger: ".column",
    start: "top 80%",
    end: "",
    invalidateOnRefresh: true,
  });
}

function initCabinSection() {
  const cabinContainer = document.querySelector(".cabin-page");
  const split = SplitText.create("#cabin-title", {
    type: "chars",
    charsClass: "char",
  });
  if (!cabinContainer || !split) return;

  gsap.set(cabinContainer, {
    opacity: 0,
    y: 50,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: cabinContainer,
      start: "top 80%",
      once: true,
    },
  });

  tl.to(cabinContainer, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: cabinContainer,
      start: "top 80%",
      once: true,
    },
  }).from(
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

function initBreakfastSection() {
  const verticalScroll = document.querySelector(".breakfast-section");
  const textColumn = document.querySelector(".breakfast-info");
  if (!verticalScroll || !textColumn) return;

  const tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: ".breakfast-section",
      start: "top 80%",
      end: "+1000",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  });

  tl.fromTo(
    textColumn,
    { y: () => verticalScroll.offsetHeight - textColumn.offsetHeight },
    { y: 0 },
    "start"
  );

  ScrollTrigger.create({
    trigger: ".breakfast-section",
    start: "top top",
    end: "",
    invalidateOnRefresh: true,
  });
}

function initExploreSection() {
  const exploreContainer = document.querySelector("#explore-container");
  const split = SplitText.create("#explore-title", { type: "chars" });
  if (!exploreContainer || !split);

  gsap.set(exploreContainer, {
    opacity: 0,
    y: 50,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: exploreContainer,
      start: "top 80%",
      once: true,
    },
  });

  tl.to(exploreContainer, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: exploreContainer,
      start: "top 80%",
      once: true,
    },
  }).from(
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

//Testimonials

//Title animation
function initTestimonialTitle() {
  const split = SplitText.create("#testimonial-title", {
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
      delay: 0.5,
    },
    "+=0.3"
  );
}

function initTestimonialSlider() {
  const el = document.querySelector(".blaze-slider");
  if (!el) return;

  new BlazeSlider(el, {
    all: {
      enableAutoplay: false,
      stopAutoplayOnInteraction: true,
      autoplayInterval: 10000,
      transitionDuration: 500,
      enablePagination: true,
      transitionTimingFunction: "ease",
      slidesToShow: 2,
      stopAutoplayOnInteraction: false,
    },
    "(max-width: 900px)": {
      slidesToShow: 2,
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
    },
  });
}

function initTestimonialTrigger() {
  const testimonialsContainer = document.querySelector(".testimonials");
  if (!testimonialsContainer) return;

  gsap.set(testimonialsContainer, {
    opacity: 0,
    y: 50,
  });

  gsap.to(testimonialsContainer, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: testimonialsContainer,
      start: "top 80%",
      once: true,
    },
  });
}
