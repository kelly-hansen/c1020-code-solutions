var $displayedImg = document.querySelector('img');
var $indicators = document.querySelectorAll('.indicator');
var $carousel = document.querySelector('.carousel-cont');

var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

var currentImgIndex = 0;

function switchImage(providedIndex) {
  var newImgIndex;
  if (typeof providedIndex === 'number') {
    newImgIndex = providedIndex;
  } else {
    newImgIndex = currentImgIndex + 1;
  }
  if (newImgIndex >= images.length) {
    newImgIndex = 0;
  } else if (newImgIndex < 0) {
    newImgIndex = images.length - 1;
  }
  $displayedImg.setAttribute('src', images[newImgIndex]);
  $indicators[currentImgIndex].removeAttribute('id');
  $indicators[newImgIndex].id = 'selected';
  currentImgIndex = newImgIndex;
  clearInterval(imgStepInterval);
  imgStepInterval = setInterval(switchImage, 3000);
}

function handleCarouselClick(e) {
  if (e.target.className === 'fas fa-chevron-right') {
    switchImage(currentImgIndex + 1);
  } else if (e.target.className === 'fas fa-chevron-left') {
    switchImage(currentImgIndex - 1);
  } else if (e.target.className === 'indicator') {
    var targetIndex = e.target.getAttribute('index');
    switchImage(parseInt(targetIndex));
  }
}

$carousel.addEventListener('click', handleCarouselClick);

var imgStepInterval = setInterval(switchImage, 3000);
