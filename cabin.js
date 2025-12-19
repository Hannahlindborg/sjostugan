export function initCabinPage() {
  document.fonts.ready.then(() => {
    return gsap.context(() => {
      initSplitText();
      initImageGallery();
      initScrollTo();
      initSplitTextBooking();
      initTestimonialTitle();
      initTestimonialTrigger();
      initTestimonialSlider();
      initAmenitiesTrigger();
      initBookingForm();
      prefillRoom();
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
      delay: 0.5,
    },
    "+=0.3"
  );
}

// Clickable image gallery
// https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
// Adapted to use event listener with help from ChatGpt

function initImageGallery() {
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail-grid img");
  if (!mainImage || !thumbnails) return;

  mainImage.addEventListener("animationend", () => {
    mainImage.classList.remove("animation");
  });

  thumbnails.forEach((img) => {
    img.addEventListener("click", () => {
      mainImage.classList.remove("animation");

      mainImage.classList.add("animation");

      const largeSrc = img.dataset.largesrc || img.src;
      mainImage.src = largeSrc;

      thumbnails.forEach((t) => t.classList.remove("thumbnail-active"));

      img.classList.add("thumbnail-active");
    });
  });
}

//Booking title animation
function initSplitTextBooking() {
  const split = SplitText.create("#booking-title", {
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

//Testimonial Title animation
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

//Scroll from booking link to booking form

function initScrollTo() {
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
      gsap.to(window, {
        scrollTo: elem,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          history.replaceState(
            null,
            document.title,
            window.location.pathname + window.location.search
          );
        },
      });
    }
  }

  document.querySelectorAll("a[href]").forEach((a) => {
    a.addEventListener("click", (e) => {
      scrollToHash(getSamePageAnchor(a), e);
    });
  });

  scrollToHash(window.location.hash);
}

function initAmenitiesTrigger() {
  const amenitiesContainer = document.querySelector(".amenities");
  if (!amenitiesContainer) return;

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
}

// Booking Form

function initBookingForm() {
  const steps = document.querySelectorAll(".step-panel");
  const timelineSteps = document.querySelectorAll(".timeline-step");

  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");

  if (!steps || !timelineSteps || !prevBtn || !nextBtn || !submitBtn) return;

  let currentStep = 0;

  function updateUI() {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === currentStep);
    });

    timelineSteps.forEach((step, i) => {
      step.classList.remove("active", "completed");
      if (i < currentStep) step.classList.add("completed");
      if (i === currentStep) step.classList.add("active");
    });

    prevBtn.style.display = currentStep === 0 ? "none" : "inline-block";
    nextBtn.style.display =
      currentStep === steps.length - 1 ? "none" : "inline-block";
    submitBtn.style.display =
      currentStep === steps.length - 1 ? "inline-block" : "none";
  }

  function clearErrors() {
    document
      .querySelectorAll(".error")
      .forEach((el) => el.classList.remove("error"));
    document
      .querySelectorAll(".error-text")
      .forEach((el) => (el.textContent = ""));
  }

  function validateStep(index) {
    let valid = true;
    clearErrors();

    if (index === 0) {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const address = document.getElementById("address");
      const phone = document.getElementById("phone");
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const addressError = document.getElementById("addressError");
      const phoneError = document.getElementById("phoneError");

      if (!name.value.trim()) {
        name.classList.add("error");
        nameError.textContent = "Full name is required.";
        valid = false;
      }

      if (!email.value.includes("@") || !email.value.includes(".")) {
        email.classList.add("error");
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
      }

      if (!address.value.trim()) {
        address.classList.add("error");
        addressError.textContent = "Address is required.";
        valid = false;
      }

      if (!phone.value.trim()) {
        phone.classList.add("error");
        phoneError.textContent = "Phone number is required.";
        valid = false;
      }
    }

    if (index === 1) {
      const roomChecked = document.querySelector('input[name="room"]:checked');
      const roomError = document.getElementById("roomError");

      if (!roomChecked) {
        roomError.textContent = "Please select a room.";
        valid = false;
      }
    }

    if (index === 2) {
      const arrivalDate = document.getElementById("arrival-date");
      const departureDate = document.getElementById("departure-date");
      const arrivalDateError = document.getElementById("arrival-date-Error");
      const departureDateError = document.getElementById(
        "departure-date-Error"
      );

      if (!arrivalDate.value) {
        arrivalDate.classList.add("error");
        arrivalDateError.textContent = "Please select a date.";
        valid = false;
      }

      if (!departureDate.value) {
        departureDate.classList.add("error");
        departureDateError.textContent = "Please select a time.";
        valid = false;
      }
    }

    return valid;
  }
  function updateReview() {
    const reviewBox = document.getElementById("reviewBox");

    const name = document.getElementById("name").value || "—";
    const email = document.getElementById("email").value || "—";
    const room =
      document.querySelector('input[name="room"]:checked')?.nextElementSibling
        ?.textContent || "—";
    const arrivalDate = document.getElementById("arrival-date").value || "—";
    const departureDate =
      document.getElementById("departure-date").value || "—";
    const notes = document.getElementById("notes").value || "—";

    reviewBox.innerHTML = `
    <div class="review-item">
      <span class="review-label">Name</span>
      <span class="review-value">${name}</span>
    </div>
    <div class="review-item">
      <span class="review-label">Email</span>
      <span class="review-value">${email}</span>
    </div>
    <div class="review-item">
      <span class="review-label">Room</span>
      <span class="review-value">${room}</span>
    </div>
    <div class="review-item">
      <span class="review-label">Date</span>
      <span class="review-value">${arrivalDate}</span>
    </div>
    <div class="review-item">
      <span class="review-label">Time</span>
      <span class="review-value">${departureDate}</span>
    </div>
    <div class="review-item">
      <span class="review-label">Notes</span>
      <span class="review-value">${notes}</span>
    </div>
  `;
  }

  // Next button (only allowed forward path)
  nextBtn.addEventListener("click", () => {
    if (!validateStep(currentStep)) return;
    currentStep++;

    if (currentStep === steps.length - 1) {
      updateReview();
    }

    updateUI();
  });

  // Back button
  prevBtn.addEventListener("click", () => {
    currentStep--;
    updateUI();
  });

  // Step navigation: only allow going backwards
  timelineSteps.forEach((step) => {
    step.addEventListener("click", () => {
      const index = Number(step.dataset.step);
      if (index < currentStep) {
        currentStep = index;
        updateUI();
      }
    });
  });

  const loader = document.querySelector(".loading");

  // Submit
  document.getElementById("multiStepForm").addEventListener("submit", (e) => {
    e.preventDefault();
    loader.classList.add("active");

    setTimeout(() => {
      loader.classList.remove("active");

      alert("Thank you! Your booking request for Sjöstugan has been sent.");
    }, 2000);
  });

  updateUI();
}

// Prefill room selection
function prefillRoom() {
  const selectedOption = document.querySelectorAll(
    'input[name="room"]:checked'
  );

  if (window.location.href.includes("storstugan")) {
    const storstugan = document.querySelector("#storstugan");

    if (storstugan) {
      storstugan.checked = true;
    }
  } else if (window.location.href.includes("lillstugan")) {
    const lillstugan = document.querySelector("#lillstugan");

    if (lillstugan) {
      lillstugan.checked = true;
    }
  } else if (window.location.href.includes("björkstugan")) {
    const björkstugan = document.querySelector("#björkstugan");

    if (björkstugan) {
      björkstugan.checked = true;
    }
  } else if (window.location.href.includes("torpet")) {
    const torpet = document.querySelector("#torpet");

    if (torpet) {
      torpet.checked = true;
    }
  } else if (window.location.href.includes("ladan")) {
    const ladan = document.querySelector("#ladan");

    if (ladan) {
      ladan.checked = true;
    }
  }
}
