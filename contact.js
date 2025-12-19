export function initContactPage() {
  document.fonts.ready.then(() => {
    initSplitText();
    initGallerySlider();
    initBookingForm();
  });
}

//Title animation
function initSplitText() {
  const split = SplitText.create("#contact-title", {
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

function initGallerySlider() {
  const el = document.querySelector(".blaze-slider");
  if (!el) return;

  new BlazeSlider(el, {
    all: {
      enableAutoplay: true,
      autoplayInterval: 3000,
      transitionDuration: 500,
      slidesToShow: 3,
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

function initBookingForm() {
  const bookingForm = document.querySelector(".message-form form");
  const loader = document.querySelector(".loading");

  if (!bookingForm || !loader) return;

  function clearErrors() {
    document
      .querySelectorAll(".error")
      .forEach((el) => el.classList.remove("error"));
    document
      .querySelectorAll(".error-text")
      .forEach((el) => (el.textContent = ""));
  }

  function validateStep() {
    let valid = true;
    clearErrors();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

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

    return valid;
  }

  // Submit
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateStep()) {
      loader.classList.add("active");

      setTimeout(() => {
        loader.classList.remove("active");

        alert("Thank you! Your message has been sent.");
      }, 2000);
    }
  });
}
