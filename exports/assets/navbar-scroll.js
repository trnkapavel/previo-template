(function () {
  var header = document.querySelector('header[data-export-section="navbar"]');
  if (!header) return;

  var threshold = 20;

  function update() {
    if (window.scrollY > threshold) {
      header.classList.add('navbar-scrolled');
    } else {
      header.classList.remove('navbar-scrolled');
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
