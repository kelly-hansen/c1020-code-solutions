var $cont = document.querySelector('#cont');
var bulbOn = false;

function onOff(event) {
  if (bulbOn === false) {
    $cont.className = 'on';
    bulbOn = true;
  } else {
    $cont.className = 'off';
    bulbOn = false;
  }
}

$cont.addEventListener('click', onOff);
