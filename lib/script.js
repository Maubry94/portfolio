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
 * Project scroll animation
 */
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('#top-nav a[href^="#"]');
  Array.from(links).forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      if (!link.classList.contains("active")) {
        links.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
      }
      let targetId = link.getAttribute("href"),
        targetEl = document.querySelector(targetId),
        targetElTop = Math.floor(targetEl.getBoundingClientRect().top);
      window.scrollBy({
        top: targetElTop,
        behavior: "smooth",
      });
      window.history.pushState("", "", targetId);
    });
  });
});

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
