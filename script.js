"use strict";

const popup = document.querySelector("#popup");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const emailSpan = document.querySelector("#email-span");
const dismissBtn = document.querySelector("#dismiss-btn");
const invalidSpan = document.querySelector("#invalid-span");
const main = document.querySelector("#main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.includes("@")) {
    popup.classList.add("flex");
    popup.classList.remove("hidden");
    main.classList.add("lg:hidden");
    emailSpan.textContent = input.value;
  } else {
    input.classList.add("bg-red-200", "text-red-600");
    invalidSpan.classList.remove("hidden");
  }
});

dismissBtn.addEventListener("click", () => resetInput());

function resetInput() {
  popup.classList.remove("flex");
  popup.classList.add("hidden");
  input.classList.remove("bg-red-200", "text-red-600");
  invalidSpan.classList.add("hidden");
  main.classList.remove("lg:hidden");
  input.value = "";
}
