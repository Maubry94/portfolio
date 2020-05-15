/**
 * lazy-load
 */
const lazyLoadElement = document.querySelectorAll(".lazy-load");

for (const element of lazyLoadElement) {
  if (element.complete) {
    window.setTimeout(() => {
      element.classList.add("loaded");
    }, 1000 + Math.random() * 2000);
  }
  element.onload = () => {
    element.classList.add("loaded");
  };
}

/**
 * Project img animation
 */
const noMercy3d = document.querySelectorAll(".lazy-load");

/**
 * Show CV
 */
const button = document.querySelector(".btn-cv");
let displayed = false;

button.addEventListener("click", event => {
  console.log("cick");
  if (displayed == false) {
    document.querySelector(".cv-ctnr").style.display = "flex";
    document.querySelector(".btn-cv").value = "Hide";
    displayed = true;
  } else {
    document.querySelector(".cv-ctnr").style.display = "none";
    document.querySelector(".btn-cv").value = "Show";
    displayed = false;
  }
});
