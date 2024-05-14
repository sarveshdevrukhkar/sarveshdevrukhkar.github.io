/* About Tagline */
const dynamicText = document.querySelector("#about-tagline");
const words = [
  " A MERN Stack Developer.",
  " A Passionate Programmer.",
  " An Open Source Contributor.",
];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 25);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();

/* Show Go To Top Button */
const goToTopButton = document.querySelector(".go-to-top");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (scrolled < 600) {
    goToTopButton.style.display = "none";
  }
  if (scrolled >= 600) {
    goToTopButton.style.display = "flex";
  }
});

goToTopButton.addEventListener("click", (event) => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});
