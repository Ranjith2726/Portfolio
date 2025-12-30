// Typing effect for h1
const nameElement = document.querySelector(".home-info h1");
const nameText = "Dumpalapalli Ranjith";
let index = 0;

function typeText() {
  if (index < nameText.length) {
    nameElement.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

setTimeout(() => {
  nameElement.textContent = "";
  typeText();
}, 1800);

// Scroll reveal animation for home-info
window.addEventListener("scroll", () => {
  const section = document.querySelector(".home-info");
  const position = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
  }
});