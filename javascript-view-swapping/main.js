var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

function changeDataView(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].className = 'tab active';
        var targetDataView = event.target.getAttribute('data-view');
        for (var x = 0; x < $views.length; x++) {
          var dataView = $views[x].getAttribute('data-view');
          if (targetDataView === dataView) {
            $views[x].className = 'view';
          } else {
            $views[x].className = 'view hidden';
          }
        }
      } else {
        $tabs[i].className = 'tab';
      }
    }
  }
}

$tabContainer.addEventListener('click', changeDataView);
