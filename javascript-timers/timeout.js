function h1Change() {
  var $h1 = document.querySelector('h1');
  $h1.textContent = 'Hello There';
}

setTimeout(h1Change, 2 * 1000);
