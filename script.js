// script.js

document.addEventListener('DOMContentLoaded', function () {
  const text = "Hi, my name is Faris Ibrišević and I am a software engineering student!";
  const typedTextElement = document.getElementById('typed-text');
  const caretElement = document.getElementById('caret');
  let currentIndex = 0;

  function type() {
    if (currentIndex < text.length) {
      typedTextElement.textContent += text.charAt(currentIndex);
      currentIndex++;
      setTimeout(type, 50); // Adjust the typing speed (in milliseconds)
    } else {
      caretElement.style.visibility = 'hidden'; // Hide the caret when typing is complete
    }
  }

  type(); // Start the typing effect
});
