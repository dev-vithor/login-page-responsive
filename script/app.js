const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  const activeBullet = document.querySelector(".bullets .active");
  const activeImage = document.querySelector(".image.show");

  const activeIndex = parseFloat(activeBullet.dataset.value);
  const nextIndex = activeIndex === 3 ? 1 : activeIndex + 1;

  activeBullet.classList.remove("active");
  activeImage.classList.remove("show");

  const nextBullet = document.querySelector(`.bullets span[data-value="${nextIndex}"]`);
  const nextImage = document.querySelector(`.image.img-${nextIndex}`);

  nextBullet.classList.add("active")
  nextImage.classList.add("show")
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

let intervalTime = 3000;
setInterval(moveSlider, intervalTime);