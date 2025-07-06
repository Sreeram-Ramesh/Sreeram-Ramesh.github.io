document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.sidebar-toggle');
  var content = document.querySelector('.sidebar-content');
  if (toggle && content) {
    toggle.addEventListener('click', function() {
      var isOpen = content.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
