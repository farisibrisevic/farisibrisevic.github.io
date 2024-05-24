document.addEventListener('DOMContentLoaded', function () {
  const text = "Hi, my name is Faris Ibrišević and I am a software engineering student!";
  const text_2 = "This page is always under development. For any bugs or suggestions, please contact me. Or check out my GitHub profile."
  const typedTextElement = document.getElementById('typed-text');
  const caretElement = document.getElementById('caret');
  let currentIndex = 0;
  const typedTextElement2 = document.getElementById('typed-text2');
  const caretElement2 = document.getElementById('caret2');
  let currentIndex2 = 0;

  function type() {
    if (currentIndex < text.length) {
      typedTextElement.textContent += text.charAt(currentIndex);
      currentIndex++;
      setTimeout(type, 50); 
    } else {
      caretElement.style.visibility = 'hidden';
    }
  }
  type();

  function type2() {
    if (currentIndex2 < text_2.length) {
      typedTextElement2.textContent += text_2.charAt(currentIndex2);
      currentIndex2++;
      setTimeout(type2, 50); 
    } else {
      caretElement2.style.visibility = 'hidden';
    }
  }

  type2();
});

/*document.addEventListener('DOMContentLoaded', function () {
  const text_2 = "This page is always under development. For any bugs or suggestions, please contact me. Or check out my GitHub profile."
  const typedTextElement2 = document.getElementById('typed-text2');
  const caretElement2 = document.getElementById('caret2');
  let currentIndex2 = 0;

  function type2() {
    if (currentIndex2 < text_2.length) {
      typedTextElement2.textContent += text_2.charAt(currentIndex2);
      currentIndex2++;
      setTimeout(type2, 50); 
    } else {
      caretElement2.style.visibility = 'hidden';
    }
  }

  type2();
});*/

document.getElementById('email-icon').addEventListener('click', function() {
  var emailAddress = 'faris.ibrisevic.22@size.ba';

  if (window.navigator && window.navigator.msLaunchUri) {

      window.navigator.msLaunchUri('mailto:' + emailAddress);
  } else {

      window.location.href = 'mailto:' + emailAddress;
  }
});