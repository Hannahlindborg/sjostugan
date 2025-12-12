//Testimonials
//Testimonials slideshow

document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  window.plusSlides = function (n) {
    showSlides((slideIndex += n));
  };
  window.currentSlide = function (n) {
    showSlides((slideIndex = n));
  };

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial-slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) {
      return;
    }
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  showSlides(slideIndex);

  gsap.registerPlugin(ScrollTrigger);

  const testimonialsContainer = document.querySelector(".testimonials");

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
});

//Footer
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const footerContainer = document.querySelector("#footer-container");
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
});
