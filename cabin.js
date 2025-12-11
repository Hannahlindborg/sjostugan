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