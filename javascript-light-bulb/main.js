var $cont = document.querySelector('#cont');
var $bulb = document.querySelector('#bulb');

function onOff(event) {
  var bulbClass = $bulb.className;
  if (bulbClass === 'bulb-off') {
    $bulb.className = 'bulb-on';
    $cont.className = 'cont-on';
  } else {
    $bulb.className = 'bulb-off';
    $cont.className = 'cont-off';
  }
}

$bulb.addEventListener('click', onOff);
