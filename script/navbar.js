const htmlElement = document.querySelector("html");

let icons = document.querySelector(".theme-icons");

document.querySelector("#mode-btn").addEventListener("click", toggleTheme);

function toggleTheme() {
  let isLight = htmlElement.dataset.theme === "light";

  htmlElement.dataset.theme = isLight ? "dark" : "light";

  icons.src = isLight
    ? "./assets/svg/light_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg"
    : "./assets/svg/dark_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg";
}
