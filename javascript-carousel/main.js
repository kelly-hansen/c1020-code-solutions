var $displayedImg = document.querySelector('img');
var $carousel = document.querySelector('.carousel-cont');
var $indicatorsCont = document.querySelector('.indicators-cont');
var $addImageForm = document.querySelector('form');
var $addImageURLInput = document.querySelector('#imageURL');

// images array must have at least one item to render carousel properly
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
  var $indicators = document.querySelectorAll('.indicator');
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
    var targetIndex = e.target.getAttribute('data-index');
    switchImage(parseInt(targetIndex));
  }
}

$carousel.addEventListener('click', handleCarouselClick);

var imgStepInterval = setInterval(switchImage, 3000);

function renderCarousel() {
  $displayedImg.setAttribute('src', images[0]);
  for (var i = 1; i < images.length; i++) {
    var $indicatorDiv = document.createElement('div');
    $indicatorDiv.className = 'indicator';
    $indicatorDiv.setAttribute('data-index', i);
    $indicatorsCont.appendChild($indicatorDiv);
  }
}

$addImageForm.addEventListener('submit', function () {
  images.push($addImageURLInput.value);
  var $indicatorDiv = document.createElement('div');
  $indicatorDiv.className = 'indicator';
  $indicatorDiv.setAttribute('data-index', images.length - 1);
  $indicatorsCont.appendChild($indicatorDiv);
});

window.addEventListener('DOMContentLoaded', function () {
  var localStorageImages = JSON.parse(localStorage.getItem('images'));
  if (localStorageImages) {
    images = localStorageImages;
  }
  renderCarousel();
});

window.addEventListener('beforeunload', function () {
  var imagesJson = JSON.stringify(images);
  localStorage.setItem('images', imagesJson);
});
