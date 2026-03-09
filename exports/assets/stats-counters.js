(function () {
  var elements = document.querySelectorAll('[data-stat-value]');
  if (!elements.length) return;

  var duration = 2000;
  var easeOut = function (t) {
    return 1 - (1 - t) * (1 - t);
  };

  function animateValue(el) {
    var value = parseInt(el.getAttribute('data-stat-value'), 10);
    if (isNaN(value)) return;
    var start = 0;
    var startTime = null;
    el.textContent = '0';

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOut(progress);
      var current = Math.round(start + (value - start) * eased);
      el.textContent = current.toLocaleString('cs-CZ');
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = value.toLocaleString('cs-CZ');
      }
    }
    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.getAttribute('data-stat-animated') === 'true') return;
        el.setAttribute('data-stat-animated', 'true');
        animateValue(el);
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();
