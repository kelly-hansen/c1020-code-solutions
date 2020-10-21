var $span = document.querySelectorAll('span');
var currentIndex = 0;
$span[currentIndex].className = 'current';

function typing(event) {
  if (currentIndex < $span.length) {
    var currentLetter;
    if ($span[currentIndex].textContent === ' ') {
      currentLetter = ' ';
    } else {
      currentLetter = $span[currentIndex].textContent;
    }
    if (event.key === currentLetter) {
      $span[currentIndex].className = 'correct';
      currentIndex++;
      if (currentIndex < $span.length - 1) {
        $span[currentIndex].className = 'current';
      }
    } else {
      $span[currentIndex].className = 'incorrect';
    }
  }
}

document.addEventListener('keydown', typing);
