const linksToAnimate = document.querySelectorAll(".footer-top a");
const possibleColors = [
  "red",
  "blue",
  "green",
  "purple",
  "pink",
  "orange",
  "yellow",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * possibleColors.length);
  return possibleColors[randomIndex];
};

linksToAnimate.forEach((link) => {
  link.addEventListener("mouseover", () => {
    const randomColor = getRandomColor();
    console.log("hovered link:", link);
    link.style.color = randomColor;
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "black";
  });
});

const buttonsToAnimate = document.querySelectorAll("button");

buttonsToAnimate.forEach((button) => {
  button.addEventListener("mouseover", () => {
    const randomColor = getRandomColor();
    button.style.color = randomColor;
  });

  button.addEventListener("button", () => {
    button.style.color = "black";
  });
});

const dancingLetters = document.querySelectorAll(
  ".animated-image-section-text span"
);

const getRandomYValue = () => {
  let directionFactor;

  if (Math.random() < 0.5) {
    directionFactor = -1;
  } else {
    directionFactor = 1;
  }

  const scaleValue = Math.random() * 200;
  return scaleValue * directionFactor;
};

function animateLetters() {
  dancingLetters.forEach((letter) => {
    gsap.to(letter, {
      y: getRandomYValue(),
      duration: 3,
      ease: "power4.inOut",
      delay: 0.2 + Math.random(),
    });
  });
}

setInterval(animateLetters, 4000);
