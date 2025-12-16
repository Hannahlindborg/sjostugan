//Swup

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import Swup from "https://unpkg.com/swup@4?module";
import { initHomePage } from "./homepage.js";
import { initCabinPage } from "./cabin.js";
import { initContactPage } from "./contact.js";
import { initCabinIndexPage } from "./cabinindex.js";
import { initAboutPage } from "./about.js";
import { initBookingPage } from "./booking.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin);

const swup = new Swup({
  containers: ["#swup"],
  plugins: [new SwupHeadPlugin()],
});

let ctx;

function onPageLoad() {
  if (ctx) ctx.revert();

  ctx = gsap.context(() => {
    runPageScript();
    initFooterAnimation();
  });

  ScrollTrigger.refresh();
}

onPageLoad();
swup.hooks.on("content:replace", onPageLoad);

function runPageScript() {
  const page = document.body.dataset.page;

  switch (page) {
    case "home":
      initHomePage();
      break;
    case "cabin":
      initCabinPage();
      break;
    case "contact":
      initContactPage();
      break;
    case "cabinindex":
      initCabinIndexPage();
      break;
    case "about":
      initAboutPage();
      break;
    case "booking":
      initBookingPage();
      break;
  }
}

//runPageScript();
//swup.hooks.on("content:replace", runPageScript);

//Footer

function initFooterAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const footerContainer = document.querySelector("#footer-container");
  if (!footerContainer) return; // safety check

  console.log("Footer element found:", footerContainer);

  gsap.set(footerContainer, {
    opacity: 0,
    y: 50,
  });

  gsap.to(footerContainer, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: footerContainer,
      start: "top 80%",
      once: true,
      markers: true,
    },
  });
}
