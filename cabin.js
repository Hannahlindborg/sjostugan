// Clickable image gallery
// https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
// Adapted to use event listener with help from ChatGpt

document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail-grid img");

  thumbnails.forEach((img) => {
    img.addEventListener("click", () => {
      // 1. Change main image
      const largeSrc = img.dataset.largesrc || img.src;
      mainImage.src = largeSrc;

      // 2. Remove active class
      thumbnails.forEach((t) => t.classList.remove("thumbnail-active"));

      // 3. Add active class to clicked thumbnail
      img.classList.add("thumbnail-active");
    });
  });
});

//Scroll from booking link to booking form

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollToPlugin);
  function getSamePageAnchor(link) {
    if (
      link.protocol !== window.location.protocol ||
      link.host !== window.location.host ||
      link.pathname !== window.location.pathname ||
      link.search !== window.location.search
    ) {
      return false;
    }

    return link.hash;
  }

  function scrollToHash(hash, e) {
    const elem = hash ? document.querySelector(hash) : false;
    if (elem) {
      if (e) e.preventDefault();
      gsap.to(window, { scrollTo: elem });
    }
  }

  document.querySelectorAll("a[href]").forEach((a) => {
    a.addEventListener("click", (e) => {
      scrollToHash(getSamePageAnchor(a), e);
    });
  });

  scrollToHash(window.location.hash);
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const amenitiesContainer = document.querySelector(".amenities");

  gsap.set(amenitiesContainer, {
    opacity: 0,
    y: 50,
  });

  gsap.to(amenitiesContainer, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: amenitiesContainer,
      start: "top 80%",
      once: true,
    },
  });
});
