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
  });

  ScrollTrigger.refresh();
}

onPageLoad();
swup.hooks.on("content:replace", onPageLoad);

function runPageScript() {
  const page = document.body.dataset.page;
  console.log(
    "check",
    window.location.pathname,
    window.location.pathname == "/index.html"
  );

  if (window.location.pathname == "/index.html") {
    initHomePage();
  } else if (window.location.pathname == "/cabins.html") {
    initCabinIndexPage();
  } else if (
    window.location.pathname == "/lillstugan.html" ||
    "/storstugan.html" ||
    "/björkstugan.html" ||
    "/ladan.html" ||
    "/torpet.html"
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

  console.log("Footer element found:", footerContainer);

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
        markers: true,
      },
    }
  );
}
