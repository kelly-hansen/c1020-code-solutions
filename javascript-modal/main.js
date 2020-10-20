var $modalCont = document.querySelector('.modal-cont');
var showModal = false;

function toggleModal(event) {
  if (!showModal) {
    $modalCont.className = 'modal-cont flex';
  } else {
    $modalCont.className = 'modal-cont';
  }
  showModal = !showModal;
}

var $openButton = document.querySelector('.open');
var $noButton = document.querySelector('.no');

$openButton.addEventListener('click', toggleModal);
$noButton.addEventListener('click', toggleModal);
