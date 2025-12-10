const nav = document.querySelector(".top-menu");

const threshold = 700;

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > threshold) {
    nav.classList.add("top-menu-with-background");
  } else {
    nav.classList.remove("top-menu-with-background");
  }
});
