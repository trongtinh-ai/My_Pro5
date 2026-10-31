/* Tiêu đề section: tách chữ để từng ký tự nổi lên khi mục vào màn hình.
   Phần chuyển động nằm trong css/dock.css (khối "từng chữ cái nổi lên").
   Chạy sau main.js, vì tiêu đề do main.js vẽ ra. */
(function initHeadingFx() {
  var STEP_MAX = 55;   // ms giữa hai chữ cái liên tiếp
  var TOTAL_MAX = 700; // tổng thời gian so le tối đa (ms), tiêu đề dài sẽ nén lại

  function split(el) {
    if (el.dataset.hfx) return;
    var text = (el.textContent || "").trim();
    if (!text) return;
    el.dataset.hfx = "1";
    el.setAttribute("aria-label", text);

    var wrap = document.createElement("span");
    wrap.className = "hfx";
    wrap.setAttribute("aria-hidden", "true");

    var count = text.replace(/\s+/g, "").length;
    var step = Math.min(STEP_MAX, Math.floor(TOTAL_MAX / Math.max(count, 1)));
    el.style.setProperty("--step", step + "ms");

    var i = 0;
    text.split(/\s+/).forEach(function (word, w) {
      if (w > 0) wrap.appendChild(document.createTextNode(" "));
      var ws = document.createElement("span");
      ws.className = "hfx-w";
      Array.from(word).forEach(function (ch) {
        var cs = document.createElement("span");
        cs.className = "hfx-ch";
        cs.style.setProperty("--i", String(i++));
        cs.textContent = ch;
        ws.appendChild(cs);
      });
      wrap.appendChild(ws);
    });

    el.textContent = "";
    el.appendChild(wrap);
  }

  document.querySelectorAll(".sec-main-title, .about-main-title").forEach(split);
})();
