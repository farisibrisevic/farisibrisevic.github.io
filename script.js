<<<<<<< HEAD
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
      setTimeout(type, 100); // Adjust the typing speed (in milliseconds)
    } else {
      caretElement.style.visibility = 'hidden'; // Hide the caret when typing is complete
    }
  }

  type(); // Start the typing effect
});
=======
window.onload=function(){
    alert('Stranica je u izradi!');
    window.location.href = "https://www.google.com";
}
>>>>>>> 12e785483e47ee02e835303c984288babcc2bfc4
