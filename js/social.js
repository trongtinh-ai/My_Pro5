/* social.js — hút từ tính + chú thích cho icon social. Load SAU main.js. */
(function () {
  var soc = document.querySelector('.pcard .soc');
  if (!soc) return;
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return; // bỏ qua cảm ứng

  var links = Array.prototype.slice.call(soc.querySelectorAll('a'));

  /* ----- chú thích (lấy từ aria-label) ----- */
  var tip = document.createElement('div');
  tip.className = 'soc-tip';
  tip.setAttribute('aria-hidden', 'true');
  document.body.appendChild(tip);

  function showTip(a) {
    var t = a.getAttribute('aria-label');
    if (!t) return;
    var r = a.getBoundingClientRect();
    tip.textContent = t;
    tip.style.left = (r.left + r.width / 2) + 'px';
    tip.style.top = r.top + 'px';
    tip.classList.add('on');
  }
  function hideTip() { tip.classList.remove('on'); }

  links.forEach(function (a) {
    a.addEventListener('mouseenter', function () { showTip(a); });
    a.addEventListener('mouseleave', hideTip);
    a.addEventListener('focus', function () { showTip(a); });
    a.addEventListener('blur', hideTip);
  });

  /* ----- hút từ tính ----- */
  var rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (rm || (window.FX && window.FX.lite)) return;

  var RADIUS = 64;   // px: bán kính ảnh hưởng
  var PULL = 0.3;    // độ hút
  var MAX = 7;       // px: dịch tối đa
  var raf = 0, ev = null;

  links.forEach(function (a) { a._x = 0; a._y = 0; });

  function frame() {
    raf = 0;
    if (!ev) return;
    links.forEach(function (a) {
      var r = a.getBoundingClientRect();
      var cx = r.left + r.width / 2 - a._x;   // tâm gốc (trừ phần đã dịch)
      var cy = r.top + r.height / 2 - a._y;
      var dx = ev.clientX - cx, dy = ev.clientY - cy;
      var d = Math.sqrt(dx * dx + dy * dy);
      var x = 0, y = 0;
      if (d < RADIUS) {
        var k = 1 - d / RADIUS;
        x = Math.max(-MAX, Math.min(MAX, dx * PULL * k));
        y = Math.max(-MAX, Math.min(MAX, dy * PULL * k));
      }
      a._x = x; a._y = y;
      a.style.transform = (x || y) ? 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)' : '';
    });
    if (tip.classList.contains('on')) {
      var h = soc.querySelector('a:hover');
      if (h) showTip(h);
    }
  }

  soc.addEventListener('pointermove', function (e) {
    ev = e;
    if (!raf) raf = requestAnimationFrame(frame);
  }, { passive: true });

  soc.addEventListener('pointerleave', function () {
    ev = null;
    links.forEach(function (a) { a._x = a._y = 0; a.style.transform = ''; });
    hideTip();
  });
})();
