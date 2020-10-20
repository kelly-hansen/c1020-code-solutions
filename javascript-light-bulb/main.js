var $cont = document.querySelector('#cont');

function onOff(event) {
  var contClass = $cont.className;
  if (contClass === 'off') {
    $cont.className = 'on';
  } else {
    $cont.className = 'off';
  }
}

$cont.addEventListener('click', onOff);
