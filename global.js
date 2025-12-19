//Swup

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import Swup from "https://unpkg.com/swup@4?module";
import { initHomePage } from "./homepage.js";
import { initCabinPage } from "./cabin.js";
import { initContactPage } from "./contact.js";
import { initCabinIndexPage } from "./cabinindex.js";
import { initAboutPage } from "./about.js";
import { initBookingPage } from "./booking.js";

const swup = new Swup({
  containers: ["#swup"],
  plugins: [new SwupHeadPlugin()],
});

let ctx;

async function onPageLoad() {
  if (ctx) ctx.revert();

  ctx = gsap.context(async () => {
    runPageScript();
    initFooterAnimation();
    initHamburgerMenu();
  });

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 50);
}

onPageLoad();
swup.hooks.on("content:replace", onPageLoad);

function runPageScript() {
  if (window.location.pathname == "/index.html") {
    initHomePage();
  } else if (window.location.pathname == "/cabins.html") {
    initCabinIndexPage();
  } else if (
    [
      "/lillstugan.html",
      "/storstugan.html",
      "/björkstugan.html",
      "/ladan.html",
      "/torpet.html",
    ].includes(window.location.pathname)
  ) {
    initCabinPage();
  } else if (window.location.pathname == "/contact.html") {
    initContactPage();
  } else if (window.location.pathname == "/booking.html") {
    initBookingPage();
  } else if (window.location.pathname == "/about.html") {
    initAboutPage();
  }
}

//Footer

function initFooterAnimation() {
  const footerContainer = document.querySelector(".footer-content");
  if (!footerContainer) return;

  gsap.fromTo(
    footerContainer,
    {
      autoAlpha: 0,
      y: 50,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerContainer,
        start: "top 80%",
        once: true,
      },
    }
  );
}

//Hamburger menu

function initHamburgerMenu() {
  const burger = document.querySelector(".burger");
  const sidebar = document.querySelector(".sidebar");
  const links = sidebar.querySelectorAll("a");
  let open = false;

  const tl = gsap.timeline({ paused: true });
  tl.to(sidebar, {
    x: 0,
    duration: 0.45,
    ease: "power3.out",
  });

  tl.from(
    links,
    {
      x: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.2"
  );

  function morphBurger(open) {
    const [top, mid, bottom] = burger.children;

    if (open) {
      gsap.to(top, { y: 9, rotate: 45, duration: 0.3, ease: "power2.out" });
      gsap.to(mid, { opacity: 0, duration: 0.2 });
      gsap.to(bottom, {
        y: -9,
        rotate: -45,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(top, { y: 0, rotate: 0, duration: 0.3 });
      gsap.to(mid, { opacity: 1, duration: 0.2 });
      gsap.to(bottom, { y: 0, rotate: 0, duration: 0.3 });
    }
  }

  burger.addEventListener("click", () => {
    open = !open;

    morphBurger(open);
    open ? tl.play() : tl.reverse();
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      open = false;
      morphBurger(false);
      tl.reverse();
    });
  });
}
