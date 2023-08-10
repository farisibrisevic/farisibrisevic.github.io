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


document.getElementById('email-icon').addEventListener('click', function() {
  // Replace 'your.email@example.com' with your actual email address
  var emailAddress = 'faris.ibrisevic.22@size.ba';

  // Check if the user's device supports the 'mailto' protocol
  if (window.navigator && window.navigator.msLaunchUri) {
      // For Windows devices
      window.navigator.msLaunchUri('mailto:' + emailAddress);
  } else {
      // For other devices
      window.location.href = 'mailto:' + emailAddress;
  }
});



