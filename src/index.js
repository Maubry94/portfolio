import "./style/index.css";
import "./style/indexMediaQueries.css";
import "./js/kit.js";
import "./js/webgl.js";
import Typed from "typed.js";
import feelOuhSource from "./music/feel_ouh.mp3";
import robloxFace from "./images/ouh.png";

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
  const links = document.querySelectorAll("#top-nav a");
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

// /**
//  * Reveal
//  */
// const revealElements = document.querySelectorAll(".reveal");
// const revealItems = [];
// const scrollY = window.scrollY;

// for (const _element of revealElements) {
//   const item = {};
//   item.revealed = false;
//   item.element = _element;

//   const bounding = _element.getBoundingClientRect();
//   item.top = bounding.top + scrollY;
//   item.height = bounding.height;

//   revealItems.push(item);
// }

// window.addEventListener("resize", () => {
//   const scrollY = window.scrollY;

//   for (const _item of revealItems) {
//     const bounding = _item.element.getBoundingClientRect();
//     _item.top = bounding.top + scrollY;
//     _item.height = bounding.height;
//   }
// });

// window.addEventListener("scroll", () => {
//   const limit = window.scrollY + window.innerHeight;

//   for (const _item of revealItems) {
//     if (!_item.revealed && limit > _item.top + _item.height * 0.5) {
//       _item.revealed = true;
//       _item.element.classList.add("revealed");
//     }
//   }
// });

/**
 * Typed.js
 */
let typed = new Typed(".test", {
  startDelay: 300,
  loop: true,
  strings: ["Juste un test ;)^700"],
  typeSpeed: 80,
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

/**
 * Easter Eggs
 */
const devEgg = window.location.hash == "#dev";

if (devEgg) {
  console.log("You'r a developper ;)");
}

const ouhEgg = window.location.hash == "#ouh";
const feelOuh = new Audio(feelOuhSource);

const alertBox = document.querySelector(".alert-msg");
const imgs = document.querySelectorAll("img");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const a = document.querySelectorAll("a");
const p = document.querySelectorAll("p");

const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");

let played = false;

if (ouhEgg) {
  alertBox.style.display = "flex";
}

yesBtn.addEventListener("click", () => {
  if (played) return;
  for (const _element of imgs) {
    _element.setAttribute("src", robloxFace);
  }
  for (const _element of h2) {
    _element.innerHTML = "ouh.";
  }
  for (const _element of h3) {
    _element.innerHTML = "ouh.";
  }
  for (const _element of a) {
    _element.innerHTML = "ouh.";
  }
  for (const _element of p) {
    _element.innerHTML = "ouh.";
  }
  feelOuh.play();
  feelOuh.volume = 0.25;
  played = true;
  alertBox.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alertBox.style.display = "none";
  self.location = "./index.html";
});

if (feelOuh.ended == true) document.self.location = "./index.html";
