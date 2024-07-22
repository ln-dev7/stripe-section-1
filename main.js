import "./style.scss";
import gsap from "gsap";

const ease = "power2.out";
const duration = 0.5;

const indicators = document.querySelectorAll(".indicator");
const images = document.querySelectorAll(".image");
const buttons = document.querySelectorAll(".button");
const imageTexts = document.querySelectorAll(".image-text");
const bgGradients = document.querySelectorAll(".bg-gradient");
const infos = document.querySelectorAll(".infos");

const animateElements = (elements, properties) => {
  gsap.to(elements, { ...properties, duration, ease });
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    animateElements(images, { opacity: 0 });
    animateElements(images[index], { opacity: 1 });
    animateElements(buttons, { filter: "grayscale(1)" });
    animateElements(button, { filter: "grayscale(0)" });
    animateElements(indicators, { width: "0%" });
    animateElements(indicators[index], { width: "100%" });
    animateElements(imageTexts, { x: `-${index * 100}%` });
    animateElements(infos, { x: `-${index * 100}%`, delay: 0.2, opacity: 0 });
    animateElements(infos[index], { opacity: 1, delay: 0.2 });
    animateElements(bgGradients, { opacity: 0 });
    animateElements(bgGradients[index], { opacity: 1 });
  });
});
