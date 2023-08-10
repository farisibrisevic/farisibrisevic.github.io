document.addEventListener('DOMContentLoaded', function () {
  const text = "Hi, my name is Faris Ibrišević and I am a software engineering student!";
  const typedTextElement = document.getElementById('typed-text');
  const caretElement = document.getElementById('caret');
  let currentIndex = 0;

  function type() {
    if (currentIndex < text.length) {
      typedTextElement.textContent += text.charAt(currentIndex);
      currentIndex++;
      setTimeout(type, 50); 
    } else {
      caretElement.style.visibility = 'hidden';
    }
  }

  type(); // Start the typing effect
});


document.getElementById('email-icon').addEventListener('click', function() {
  var emailAddress = 'faris.ibrisevic.22@size.ba';

  if (window.navigator && window.navigator.msLaunchUri) {

      window.navigator.msLaunchUri('mailto:' + emailAddress);
  } else {

      window.location.href = 'mailto:' + emailAddress;
  }
});