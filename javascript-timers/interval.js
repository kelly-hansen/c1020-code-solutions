var nextNum = 3;
var $h1 = document.querySelector('h1');

function decrementH1() {
  if (nextNum > 0) {
    $h1.textContent = nextNum--;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownInterval);
  }
}

var countdownInterval = setInterval(decrementH1, 1000);
