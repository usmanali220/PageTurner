document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});
// Dynamic Text Animation
const dynamicText = document.getElementById('dynamic-text');
const phrases = [
  "CONNECT THROUGH BOOKS",
  "DISCOVER NEW WORLDS",
  "FIND YOUR NEXT ADVENTURE",
];
let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function typeText() {
  const currentPhrase = phrases[phraseIndex];
  if (typing) {
    dynamicText.textContent += currentPhrase.charAt(charIndex);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      typing = false;
      setTimeout(() => typing = true, 1000); // Pause before deleting
    }
  } else {
    dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length; // Loop to next phrase
    }
  }
  setTimeout(typeText, typing ? 100 : 50); // Typing and deleting speeds
}

// Start typing animation
typeText();

// Increment Book Counter
const counter = document.getElementById('counter');
let bookCount = 1235;

setInterval(() => {
  bookCount += Math.floor(Math.random() * 5) + 1; // Increment randomly
  counter.textContent = `Books Available: ${bookCount}`;
}, 2000);




document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstname || !email || !message) {
        alert('Please fill out all required fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for reaching out! We will get back to you soon.');
    this.reset();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

