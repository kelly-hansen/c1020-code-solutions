var $cont = document.querySelector('#cont');
var $bulb = document.querySelector('#bulb');

function onOff(event) {
  if ($bulb.className === 'bulb-off') {
    $bulb.className = 'bulb-on';
    $cont.className = 'cont-on';
  } else {
    $bulb.className = 'bulb-off';
    $cont.className = 'cont-off';
  }
}

$bulb.addEventListener('click', onOff);
