/* ==========================================================================
   MY PROFILE - HIGH-TECH CYBERPUNK PORTFOLIO CORE JAVASCRIPT
   - Multi-section continuous scrolling (#home, #about, #projects, #skills, #contact)
   - Bottom floating dock navigation with sliding white pill
   - Background blur(8px) brightness(.5) outside of Hero
   - All visible text in English
   - Modals and popups removed in favor of stacked sections
   ========================================================================== */

/* ---------------- Icons Map (Lucide & Custom SVG) ---------------- */
const P = {
  house: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  sparkle: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  github: '<path class="f" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  discord: '<path class="f" d="M19.5 5.3A16 16 0 0 0 15.6 4l-.5 1a14.8 14.8 0 0 0-4.2 0l-.5-1a16 16 0 0 0-3.9 1.3C4 9 3.3 12.6 3.6 16.1A16 16 0 0 0 8.4 18.5l1-1.6c-.6-.2-1.1-.5-1.6-.8l.4-.3a11.5 11.5 0 0 0 9.6 0l.4.3c-.5.3-1 .6-1.6.8l1 1.6a16 16 0 0 0 4.8-2.4c.4-4.1-.7-7.7-2.9-10.8zM9.3 14c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8zm5.4 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8z"/>',
  brain: '<circle cx="8" cy="8" r="2.5"/><circle cx="16" cy="8" r="2.5"/><circle cx="12" cy="16" r="2.5"/><path d="M9.8 9.8l1.2 4M14.2 9.8l-1.2 4M10.5 8h3"/>',
  code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12"/>',
  download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  pin: '<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev: '<path d="M9 6l6 6-6 6"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  vol: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  mute: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  sword: '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  grad: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  gamepad: '<rect x="2" y="7" width="20" height="10" rx="5"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="11" x2="15" y2="11"/><line x1="18" y1="13" x2="18" y2="13"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>'
};

const ic = (n, c) => `<svg class="i ${c || ""}" viewBox="0 0 24 24">${P[n] || P.sparkle}</svg>`;
const esc = s => String(s || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const url = s => `url("${new URL(String(s), document.baseURI).href.replace(/"/g, "%22")}")`;
const $ = id => document.getElementById(id);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const has = a => /[\p{L}\p{N}]/u.test((a || []).join(""));

/* Mailto helper */
const mailOf = c => { const m = String(c.url || "").match(/^mailto:([^?]+)/i) || String(c.value || "").match(/[\w.+-]+@[\w-]+\.[\w.-]+/); return m ? (m[1] || m[0]) : ""; };
const fixMail = u => { const m = String(u || "").match(/^mailto:([^?]+)/i); return m ? "https://mail.google.com/mail/?view=cm&fm=1&to=" + encodeURIComponent(m[1]) : u; };

/* Clipboard copy */
async function copyText(t) {
  try { await navigator.clipboard.writeText(t); return true; }
  catch (e) {
    try {
      const ta = document.createElement("textarea");
      ta.value = t; ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select();
      const ok = document.execCommand("copy"); ta.remove();
      return ok;
    } catch (_) { return false; }
  }
}
document.addEventListener("click", async e => {
  const b = e.target.closest("[data-copy]"); if (!b || b.dataset.busy) return;
  b.dataset.busy = "1";
  const old = b.innerHTML, ok = await copyText(b.dataset.copy);
  b.innerHTML = ic(ok ? "check" : "copy") + `<em>${ok ? "COPIED" : "ERROR"}</em>`;
  b.classList.toggle("done", ok);
  setTimeout(() => { b.innerHTML = old; b.classList.remove("done"); delete b.dataset.busy; }, 1600);
});

/* Direct navigation action */
function run(a) {
  const [t, v] = String(a).split(/:(.+)/);
  const k = String(v || t).replace(/^#/, "");
  if (k === "home") {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  } else {
    const el = $(k);
    if (el) el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    else if (t === "link") window.open(v, "_blank", "noopener");
  }
}
document.addEventListener("click", e => {
  const el = e.target.closest("[data-a]"); if (el) { e.preventDefault(); run(el.dataset.a); }
});

/* ---------------- Configuration & Setup ---------------- */
const C = Object.assign({}, PROFILE, LINKS, SITE, {
  projects: window.PROJECTS || [],
  skills: window.SKILLS || [],
  about: window.ABOUT || {},
  contact: window.CONTACT || []
});

/* ---------------- Language (EN / VI) ---------------- */
const LANG = window.LANG === "vi" ? "vi" : "en";
const T = (window.I18N && window.I18N[LANG]) || {};
const t = (k, d) => (T[k] != null ? T[k] : (d != null ? d : k));
Object.assign(C, (C.i18n && C.i18n[LANG]) || {});

Object.entries(C.theme || {}).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
const bgUrlStr = C.images.bg ? url(C.images.bg) : "none";
document.documentElement.style.setProperty("--bg-url", bgUrlStr);
document.documentElement.style.setProperty("--bg-pos", C.layout.bgPosition);
const bgEl = document.querySelector(".bg-img");
if (bgEl && C.images.bg) {
  bgEl.style.backgroundImage = bgUrlStr;
  bgEl.style.backgroundPosition = C.layout.bgPosition || "center center";
  bgEl.style.backgroundSize = "cover";
  bgEl.style.backgroundRepeat = "no-repeat";
}

/* ---------------- Background Video ---------------- */
const bv = $("bgv");
let bvReady = false;
const forceVid = () => ["position:absolute", "inset:0", "width:100%", "height:100%", "object-fit:cover", "opacity:1", "visibility:visible", "display:block", "z-index:1"].forEach(p => { const [k, v] = p.split(":"); bv.style.setProperty(k, v, "important"); });
function videoOn(on) {
  if (!bv || !bv.isConnected || !C.images.bgVideo) return;
  if (on) {
    if (!bvReady) {
      forceVid();
      if (C.images.bg) bv.poster = C.images.bg;
      if (!bv.getAttribute("src")) bv.src = C.images.bgVideo;
      bv.onerror = () => { console.warn("Video failed to play:", C.images.bgVideo); bv.remove(); };
      bvReady = true;
    }
    bv.play().catch(err => console.warn("Video autoplay prevented:", err));
  } else bv.pause();
}
if (!C.images.bgVideo) { if (bv) bv.remove(); } else videoOn(true);

/* ---------------- Render Hero (#home) ---------------- */
const intro = `<div class="intro">
  <div class="hello">${esc(C.hello || "HELLO, I'M")}</div>
  <h1 class="title">${esc(C.name)}</h1>
  <div class="sub"><span id="role-text">${esc((C.roles && C.roles[0]) || C.heroSub)}</span><span class="type-cursor">|</span></div>
  <p class="hq">${(C.heroQuote || []).map(esc).join("<br>")}</p>
  <div class="btns">
    <a class="btn p" data-a="scroll:projects" href="#projects">${ic("folder")}${esc(t("viewProjects"))}${ic("arrow")}</a>
    <a class="btn" data-a="link:./assets/docs/cv.pdf" href="./assets/docs/cv.pdf" target="_blank" rel="noopener noreferrer">${ic("download")}${esc(t("downloadCV"))}</a>
  </div>
</div>`;

const card = `<aside class="pcard glass">
  <div class="phead"><span>${ic("sparkle")}${esc(t("profile"))}</span><div class="st"><i class="dot" id="dot"></i><b id="stx">OFFLINE</b></div></div>
  <div class="who"><img class="av" id="av" src="${esc(C.images.avatar)}" alt="${esc(C.name)}" title="${esc(t("avTitle"))}">
    <div><div class="nm">${esc(C.name)}</div><div class="hd">${esc(C.handle)}</div><div class="role"><i></i>${esc(C.role)}</div></div></div>
  <div class="act" id="act" hidden><img id="actimg" alt="" hidden><div><b id="actt"></b><small id="actd" hidden></small></div></div>
  ${has(C.bubble) ? `<div class="bub">${C.bubble.map(esc).join("<br>")}</div>` : ""}
  ${has(C.bio) ? `<p class="bio">${C.bio.map(esc).join("<br>")}</p>` : ""}
  <div class="two">
    <div class="mini">${ic("pin")}<div><b>${esc(C.location)}</b><small>${esc(t("location"))}</small></div></div>
    <div class="mini">${ic("clock")}<div><b id="clk">--:--:--</b><small>${esc(C.tzLabel)} · ${esc(t("localTime"))}</small></div></div>
  </div>
  <div class="soc">${C.socials.map(s => `<a href="${esc(fixMail(s.url))}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.label)}">${ic(s.icon)}</a>`).join("")}</div>
  ${(C.links || []).map(l => `<button class="row" data-a="${l.action}"><span class="ic">${ic(l.icon)}</span><span><b>${esc(((T.links || {})[l.action] || l).title)}</b><small>${esc(((T.links || {})[l.action] || l).sub)}</small></span><span class="go">${ic("chev")}</span></button>`).join("")}
</aside>`;

// "Home" is first screen only: profile card on LEFT, intro title & buttons on RIGHT
$("home").innerHTML = card + intro;
const av = $("av");
if (av) {
  av.onerror = () => {
    if (!av.isConnected) return;
    const initials = C.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
      '<rect width="100" height="100" fill="#1a2332"/>' +
      '<text x="50" y="56" text-anchor="middle" font-family="Montserrat,sans-serif" ' +
      'font-weight="700" font-size="40" fill="#6fb3e0">' + initials + '</text></svg>';
    av.onerror = null;
    av.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  };
}

/* ---------------- Render About Section (#about) ---------------- */
function renderAbout() {
  const A = T.about || window.ABOUT || {};
  const bioHtml = (A.bio || []).map((b, idx) => `<p class="about-p ${idx === 0 ? 'lead-p' : ''}">${esc(b)}</p>`).join("");

  const questsHtml = (A.quests || []).map(q => `
    <div class="about-tl-item">
      <div class="about-tl-content">
        <b>${esc(q.t)}</b>
        <small>${esc(q.s || "")}</small>
      </div>
    </div>
  `).join("");

  const metaItemsHtml = (A.info || []).map(i => `
    <div class="about-meta-item">
      <span class="about-meta-key">${esc(i.k)}</span>
      <span class="about-meta-val">${esc(i.v)}</span>
    </div>
  `).join("");

  const hobbiesHtml = (A.hobbies || []).map(h => `<span class="about-interest-tag">${esc(h)}</span>`).join(`<span class="about-interest-sep">·</span>`);

  $("about").innerHTML = `
    <div class="about-open-layout">
      <div class="about-content-col">
        <div class="about-title-wrap">
          <h2 class="about-main-title">${esc(t("aboutTitle"))}</h2>
        </div>

        <div class="about-bio-text">
          ${bioHtml}
        </div>

        <div class="about-journey-section">
          <h3 class="about-sub-title">${esc(t("journey"))}</h3>
          <div class="about-timeline">
            ${questsHtml}
          </div>
        </div>

        <div class="about-meta-grid">
          ${metaItemsHtml}
        </div>

        <div class="about-interests-row">
          <span class="about-interests-lbl">${esc(t("interests"))}</span>
          <div class="about-interests-list">
            ${hobbiesHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}
renderAbout();

/* ---------------- Render Projects Section (#projects) ---------------- */
function renderProjects() {
  const projs = window.PROJECTS || [];
  const projsHtml = projs.map((p, idx) => `
    <article class="project-showcase-card">
      <div class="project-thumb-wrap">
        <div class="project-thumb-img" style="background-image: url('${esc(p.image)}')"></div>
        <div class="project-thumb-overlay"></div>
        <span class="project-num">0${idx + 1}</span>
        <span class="project-tag-badge">${esc(p.tag)}</span>
      </div>
      <div class="project-content">
        <div class="project-header-row">
          <h3 class="project-card-title">${esc(p.title)}</h3>
          <a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" class="project-link-trigger" aria-label="Open ${esc(p.title)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="proj-arrow-ic">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
        <p class="project-card-desc">${esc(p.desc)}</p>
        <div class="project-tech-strip">
          ${(p.stack || []).map(s => `<span class="project-tech-item">${esc(s)}</span>`).join(`<span class="tech-dot">·</span>`)}
        </div>
      </div>
    </article>
  `).join("");

  $("projects").innerHTML = `
    <div class="sec-header-editorial">
      <h2 class="sec-main-title">Featured Projects</h2>
      <p class="sec-subtitle">Selected works in Artificial Intelligence, Computer Vision &amp; Modern Web.</p>
    </div>
    <div class="projects-deck">
      ${projsHtml}
    </div>
  `;
}
renderProjects();

/* ---------------- Render Skills Section (#skills) ---------------- */
function renderSkills() {
  const skills = window.SKILLS || [];
  const skillsHtml = skills.map((cat, idx) => `
    <div class="skill-track-column ${idx === 0 ? 'highlight-track' : ''}">
      <div class="skill-track-head">
        <div class="skill-track-indicator"></div>
        <h3 class="skill-track-title">${esc(cat.category)}</h3>
      </div>
      <div class="skill-track-body">
        ${cat.items.map(it => `
          <div class="skill-micro-tile">
            <span class="skill-tile-dot"></span>
            <span class="skill-tile-name">${esc(it)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  $("skills").innerHTML = `
    <div class="sec-header-editorial">
      <h2 class="sec-main-title">Capabilities &amp; Tech Stack</h2>
      <p class="sec-subtitle">Technologies, frameworks, and core disciplines I leverage for development.</p>
    </div>
    <div class="skills-tracks-wrap">
      ${skillsHtml}
    </div>
  `;
}
renderSkills();

/* ---------------- Render Contact Section (#contact) ---------------- */
function renderContact() {
  const contact = window.CONTACT || [];
  const emailItem = contact.find(c => c.icon === "mail" || (c.label && c.label.toLowerCase() === "email"));
  const socialItems = contact.filter(c => c !== emailItem);

  const emailVal = emailItem ? emailItem.value : "trongtinh280206@gmail.com";
  const emailUrl = emailItem ? emailItem.url : `mailto:${emailVal}`;

  const discordHandle = (window.PROFILE && window.PROFILE.contactInfo && window.PROFILE.contactInfo.discord)
    ? window.PROFILE.contactInfo.discord
    : null;

  const socialItemsHtml = socialItems.map(c => {
    const isDiscord = c.icon === "discord";
    const displayVal = (isDiscord && discordHandle) ? discordHandle : c.value;
    const copyBtn = (isDiscord && discordHandle)
      ? `<button class="channel-copy-discord" data-copy="${esc(discordHandle)}" title="${esc(t("copyHandle"))}" aria-label="${esc(t("copyDiscord"))}">${ic("copy")}</button>`
      : "";
    return `
    <a href="${esc(fixMail(c.url))}" target="_blank" rel="noopener noreferrer" class="contact-channel-item">
      <div class="channel-icon-box">${ic(c.icon)}</div>
      <div class="channel-text">
        <small class="channel-lbl">${esc(c.label)}</small>
        <b class="channel-val">${esc(displayVal)}</b>
      </div>
      ${copyBtn}
      <span class="channel-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="proj-arrow-ic">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </span>
    </a>`;
  }).join("");

  $("contact").innerHTML = `
    <div class="sec-header-editorial">
      <h2 class="sec-main-title">${esc(t("getInTouch"))}</h2>
      <p class="sec-subtitle">${esc(t("contactSub"))}</p>
    </div>
    <div class="contact-hub-layout">
      <div class="contact-hero-tile">
        <div class="contact-status-pill">
          <span class="status-radar-dot"></span>
          <span>${esc(t("openToChat"))}</span>
        </div>
        <div class="contact-hero-main">
          <div class="hero-email-lbl">${esc(t("directEmail"))}</div>
          <a href="${esc(emailUrl)}" class="hero-email-val">
            ${esc(emailVal)}
          </a>
        </div>
        <div class="contact-hero-actions">
          <button class="hero-copy-btn" data-copy="${esc(emailVal)}">
            ${ic("copy")}
            <span>${esc(t("copyEmail"))}</span>
          </button>
          <a href="${esc(emailUrl)}" class="hero-send-btn">
            <span>${esc(t("sendMail"))}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="proj-arrow-ic">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <div class="contact-social-grid">
        ${socialItemsHtml}
      </div>
    </div>
    <p class="contact-footer-copy">&copy; 2026 Tran Trong Tinh</p>
  `;

  $("contact").querySelectorAll(".channel-copy-discord").forEach(btn => {
    btn.addEventListener("click", async e => {
      e.preventDefault();
      e.stopPropagation();
      if (btn.dataset.busy) return;
      btn.dataset.busy = "1";
      const ok = await copyText(btn.dataset.copy);
      const oldHtml = btn.innerHTML;
      btn.innerHTML = ic(ok ? "check" : "copy");
      btn.classList.toggle("done", ok);
      setTimeout(() => {
        btn.innerHTML = oldHtml;
        btn.classList.remove("done");
        delete btn.dataset.busy;
      }, 1500);
    });
  });
}
renderContact();

/* ---- Viewer toàn màn hình (chỉ tạo 1 lần) ---- */
const ggViewer = (function () {
  let el, imgEl, vidEl, capEl, prevBtn, nextBtn, closeBtn;
  let list = [], idx = 0, lastTile = null, prevOverflow = "", prevPad = "";

  function build() {
    el = document.createElement("div");
    el.className = "gg-viewer";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.innerHTML = `
      <button type="button" class="gg-v-close" aria-label="Close">&times;</button>
      <button type="button" class="gg-v-nav gg-v-prev" aria-label="Previous">&#8249;</button>
      <figure class="gg-v-fig">
        <img alt="" hidden>
        <video muted loop playsinline hidden></video>
        <figcaption></figcaption>
      </figure>
      <button type="button" class="gg-v-nav gg-v-next" aria-label="Next">&#8250;</button>`;
    document.body.appendChild(el);
    imgEl = el.querySelector("img");
    vidEl = el.querySelector("video");
    capEl = el.querySelector("figcaption");
    closeBtn = el.querySelector(".gg-v-close");
    prevBtn = el.querySelector(".gg-v-prev");
    nextBtn = el.querySelector(".gg-v-next");
    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", () => step(-1));
    nextBtn.addEventListener("click", () => step(1));
    el.addEventListener("click", e => { if (e.target === el) close(); });
    window.addEventListener("keydown", onKey, true);
  }

  function read(tile) {
    const img = tile.querySelector("img"), vid = tile.querySelector("video");
    return {
      tile,
      src: img.dataset.still || img.getAttribute("src"),
      title: img.alt || "",
      video: vid ? (vid.dataset.hoverSrc || "") : ""
    };
  }

  function show() {
    const d = list[idx];
    if (d.video) {
      imgEl.hidden = true; vidEl.hidden = false;
      vidEl.poster = d.src; vidEl.src = d.video;
      vidEl.play().catch(() => { });
    } else {
      vidEl.pause(); vidEl.removeAttribute("src"); vidEl.hidden = true;
      imgEl.hidden = false; imgEl.src = d.src; imgEl.alt = d.title;
    }
    capEl.textContent = d.title;
    capEl.hidden = !d.title;
  }

  function step(n) { idx = (idx + n + list.length) % list.length; show(); }

  function onKey(e) {
    if (!el || !el.classList.contains("open")) return;
    const k = e.key;
    if (k === "Escape") { e.preventDefault(); e.stopPropagation(); close(); }
    else if (k === "ArrowLeft" && list.length > 1) { e.preventDefault(); e.stopPropagation(); step(-1); }
    else if (k === "ArrowRight" && list.length > 1) { e.preventDefault(); e.stopPropagation(); step(1); }
    else if (k === "Tab") {
      e.preventDefault();
      const f = [closeBtn, prevBtn, nextBtn].filter(b => !b.hidden);
      const i = f.indexOf(document.activeElement);
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  }

  function open(tile, custom, start) {
    if (!el) build();
    if (custom && custom.length) {
      list = custom.map(d => ({ tile, src: d.src, title: d.title || "", video: d.video || "" }));
      idx = Math.min(Math.max(parseInt(start, 10) || 0, 0), list.length - 1);
    } else {
      const scope = tile.closest(".gg-grid, .gaming-shots-strip") || document;
      list = [...scope.querySelectorAll(".gg-tile")]
        .filter(t => t.querySelector("img") && t.offsetParent !== null).map(read);
      idx = Math.max(0, list.findIndex(d => d.tile === tile));
    }
    lastTile = tile;
    prevBtn.hidden = nextBtn.hidden = list.length < 2;
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    prevOverflow = document.body.style.overflow;
    prevPad = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (sbw > 0) document.body.style.paddingRight = sbw + "px";
    show();
    el.classList.add("open");
    closeBtn.focus();
  }

  function close() {
    el.classList.remove("open");
    vidEl.pause();
    document.body.style.overflow = prevOverflow;
    document.body.style.paddingRight = prevPad;
    if (lastTile) lastTile.focus({ preventScroll: true });
  }

  return { open };
})();

/* ---- Tile: hover zoom + hover media + mở viewer (Gaming shots & Gallery) ---- */
function attachTileHandlers(container, isLiteMode, isTouch, opener) {
  container.querySelectorAll(".gg-tile").forEach(tile => {
    const img = tile.querySelector("img");
    if (!img) return;
    const video = tile.querySelector("video");
    const grid = tile.closest(".gg-grid, .gaming-shots-strip");
    const hoverSrc = (img.dataset.hoverSrc) || (video && video.dataset.hoverSrc) || "";
    const isVid = video !== null;
    let videoLoaded = false;

    function startAnim() {
      if (isVid) {
        if (!videoLoaded) { video.src = hoverSrc; videoLoaded = true; }
        tile.classList.add("gg-playing"); video.play().catch(() => { });
      } else img.src = hoverSrc;
    }
    function stopAnim() {
      if (isVid) { video.pause(); video.currentTime = 0; tile.classList.remove("gg-playing"); }
      else img.src = img.dataset.still;
    }
    function setHot(on) {
      tile.classList.toggle("gg-hot", on);
      if (grid) grid.classList.toggle("gg-dim", on);
    }

    if (!isLiteMode && !isTouch) {
      tile.addEventListener("mouseenter", () => { setHot(true); if (hoverSrc) startAnim(); });
      tile.addEventListener("mouseleave", () => { setHot(false); if (hoverSrc) stopAnim(); });
      tile.addEventListener("focus", () => { if (tile.matches(":focus-visible")) setHot(true); });
      tile.addEventListener("blur", () => setHot(false));
    }

    const openTile = () => (opener ? opener(tile) : ggViewer.open(tile));
    tile.addEventListener("click", openTile);
    tile.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openTile(); }
    });
  });
}

/* ---- Build tile HTML (shared by Gaming shots & Gallery) ---- */
function buildTileHtml(item, isLiteMode) {
  const src = String(item.src || "").trim();
  const hover = isLiteMode ? "" : String(item.hover || "").trim();
  const title = esc(item.title || "");
  const hasHover = hover.length > 0;
  const isVideo = hasHover && /\.(mp4|webm)$/i.test(hover);
  const isAnimImg = hasHover && /\.(gif|webp)$/i.test(hover);

  let mediaHtml;
  if (!src) {
    mediaHtml = `
      <div class="gg-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
        </svg>
        <span class="gg-placeholder-text">${title || "No image"}</span>
      </div>`;
  } else if (isVideo) {
    mediaHtml = `
      <img src="${esc(src)}" alt="${title}" loading="lazy" data-still="${esc(src)}">
      <video muted loop playsinline preload="none" poster="${esc(src)}" data-hover-src="${esc(hover)}" aria-hidden="true"></video>`;
  } else if (isAnimImg) {
    mediaHtml = `<img src="${esc(src)}" alt="${title}" loading="lazy" data-still="${esc(src)}" data-hover-src="${esc(hover)}">`;
  } else {
    mediaHtml = `<img src="${esc(src)}" alt="${title}" loading="lazy">`;
  }

  return `
    <div class="gg-item">
      <div class="gg-tile"${src ? ` tabindex="0" role="button" aria-label="${title || "Open image"}"` : ""}>${mediaHtml}</div>
      ${title ? `<span class="gg-caption">${title}</span>` : ""}
    </div>`;
}

/* ---------------- Render Gaming Section (#gaming) ---------------- */
function renderGaming() {
  const isLiteMode = !!(window.FX && window.FX.lite) ||
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = matchMedia("(pointer: coarse)").matches;

  const games = window.GAMES || [];

  const setup = (window.SETUP || []).filter(r => {
    const v = String(r.value || "").trim();
    return v.length > 0 && !/^\[.+\]$/.test(v);
  });
  const specsHtml = setup.length ? `
    <div class="gaming-glass-card gaming-specs-card">
      <div class="gaming-specs-label">${esc(t("mySetup"))}</div>
      <div class="gaming-specs-grid">
        ${setup.map(r => `
          <span class="gaming-specs-key">${esc(r.label)}</span>
          <span class="gaming-specs-val">${esc(r.value)}</span>
        `).join("")}
      </div>
    </div>` : "";

  const ICON_COPY = `<svg class="i-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      <svg class="i-ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
  const ICON_CHEV = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;

  function parseGame(g) {
    const raw = String(g.desc || "").trim();
    if (String(g.id || "").trim()) return { before: raw, id: String(g.id).trim(), after: "" };
    const m = raw.match(/\bID\s*:?\s*([^\r\n]+)/i);
    if (!m) return { before: raw, id: "", after: "" };
    const clean = t => t.replace(/[|·-]\s*$/, "").trim();
    return {
      before: clean(raw.slice(0, m.index)),
      id: m[1].trim(),
      after: raw.slice(m.index + m[0].length).trim()
    };
  }

  const catMap = new Map(), catCount = {};
  games.forEach(g => (g.meta || []).forEach((m, mi) => {
    const label = String(m || "").trim(), key = label.toLowerCase();
    if (!key) return;
    catCount[key] = (catCount[key] || 0) + 1;
    if (mi === 0 && !catMap.has(key)) catMap.set(key, label);
  }));
  games.forEach(g => (g.meta || []).forEach(m => {
    const label = String(m || "").trim(), key = label.toLowerCase();
    if (key && catCount[key] >= 2 && catCount[key] < games.length && !catMap.has(key)) catMap.set(key, label);
  }));
  const filterHtml = catMap.size > 1 ? `
    <div class="gx-filter" id="gm-filter" role="group" aria-label="${esc(t("filterGames"))}">
      <button type="button" class="gx-chip active" data-cat="all" aria-pressed="true">${esc(t("allGames"))}</button>
      ${[...catMap].map(([k, label]) =>
    `<button type="button" class="gx-chip" data-cat="${esc(k)}" aria-pressed="false">${esc(label)}</button>`).join("")}
    </div>` : "";

  const viewItems = [];
  const gamesHtml = games.map((g, i) => {
    const coverSrc = String(g.cover || "").trim();
    const iconSrc = String(g.icon || "").trim();
    const initial = esc((String(g.title || "?").trim()[0] || "?").toUpperCase());
    const { before, id, after } = parseGame(g);
    const cats = (g.meta || []).map(m => String(m || "").trim().toLowerCase()).filter(Boolean).join("|");
    const metas = (g.meta || []).map(m => String(m || "").trim()).filter(Boolean);

    const shots = (g.shots || []).slice(0, 3).filter(s => String(s.src || "").trim());

    viewItems[i] = [
      ...(coverSrc ? [{ src: coverSrc, title: g.title }] : []),
      ...shots.map(s => ({
        src: String(s.src).trim(), title: s.title || "",
        video: /\.(mp4|webm)$/i.test(String(s.hover || "")) ? String(s.hover).trim() : ""
      }))
    ];

    const coverHtml = coverSrc ? `
      <div class="gx-cover" data-open="${i}" tabindex="0" role="button" aria-label="${esc(t("viewGame"))} ${esc(g.title)}">
        <img src="${esc(coverSrc)}" alt="${esc(g.title)} cover" loading="lazy" decoding="async"
             onerror="var c=this.closest('.gx-cover');if(c)c.remove()">
      </div>` : "";

    const iconHtml = `<span class="gx-icon" aria-hidden="true">${iconSrc
      ? `<img src="${esc(iconSrc)}" alt="" data-i="${initial}" onerror="this.parentNode.textContent=this.dataset.i">`
      : initial}</span>`;

    const headRow = `
      <div class="gx-sec gx-head">
        ${iconHtml}
        <div class="gx-head-text">
          <div class="gx-title">${esc(g.title)}</div>
          ${metas.length ? `<div class="gx-tags">${metas.map(m => `<span>${esc(m)}</span>`).join("")}</div>` : ""}
        </div>
        ${g.tag ? `<span class="gx-state"><i class="gx-dot" aria-hidden="true"></i>${esc(g.tag)}</span>` : ""}
      </div>`;

    const infoRow = (before || id || after) ? `
      <div class="gx-sec gx-info${before && id ? "" : " one"}">
        ${before ? `<div><div class="gx-lbl">${esc(t("ingameName"))}</div><div class="gx-name">${esc(before)}</div></div>` : ""}
        ${id ? `<div><div class="gx-lbl">${esc(t("playerId"))}</div>
          <div class="gx-idbox"><span class="gx-idval">${esc(id)}</span>
          <button type="button" class="gx-copy" data-copy="${esc(id)}" aria-label="${esc(t("copyId"))}" title="${esc(t("copyId"))}">${ICON_COPY}</button></div></div>` : ""}
        ${after ? `<div class="gx-note">${esc(after)}</div>` : ""}
      </div>` : "";

    const shotsRow = shots.length ? `
      <div class="gx-sec gx-shots">
        <div class="gaming-shots-strip" id="gm-shots-${i}">
          ${shots.map(s => buildTileHtml(s, isLiteMode)).join("")}
        </div>
      </div>` : "";

    return `
      <div class="gaming-game-block gx-block" data-cats="${esc(cats)}">
        <article class="gx-card">
          ${coverHtml}
          <div class="gx-body">${headRow}${infoRow}${shotsRow}</div>
        </article>
      </div>`;
  }).join("");

  $("gaming").innerHTML = `
    <div class="sec-header-editorial">
      <h2 class="sec-main-title">${esc(t("gaming"))}</h2>
    </div>
    ${filterHtml}
    <div class="gx-grid">
      ${gamesHtml}
    </div>
    ${specsHtml}
  `;

  const root = $("gaming");
  const blocks = [...root.querySelectorAll(".gaming-game-block")];

  function layout() {
    const vis = blocks.filter(b => !b.hidden);
    blocks.forEach(b => b.classList.remove("gx-feature"));
    if (!vis.length) return;
    vis[0].classList.add("gx-feature");
    const rest = vis.slice(1);
    if (rest.length % 2 === 1) rest[rest.length - 1].classList.add("gx-feature");
  }
  layout();

  games.forEach((g, i) => {
    const el = $(`gm-shots-${i}`);
    if (!el) return;
    const offset = String(g.cover || "").trim() ? 1 : 0;
    attachTileHandlers(el, isLiteMode, isTouch, tile => {
      const k = [...el.querySelectorAll(".gg-tile")].indexOf(tile);
      ggViewer.open(tile, viewItems[i], k + offset);
    });
  });

  const bar = $("gm-filter");
  if (bar) bar.addEventListener("click", e => {
    const b = e.target.closest(".gx-chip");
    if (!b) return;
    bar.querySelectorAll(".gx-chip").forEach(c => {
      const on = c === b;
      c.classList.toggle("active", on);
      c.setAttribute("aria-pressed", String(on));
    });
    const key = b.dataset.cat;
    blocks.forEach(bl => {
      const show = key === "all" || bl.dataset.cats.split("|").includes(key);
      bl.hidden = !show;
    });
    layout();
    blocks.forEach(bl => {
      const ready = bl.classList.contains("gx-in") || !bl.classList.contains("gx-rv");
      if (!bl.hidden && ready && !isLiteMode) {
        bl.classList.remove("gx-pop"); void bl.offsetWidth; bl.classList.add("gx-pop");
      }
    });
  });

  root.querySelectorAll("[data-open]").forEach(el => {
    const go = () => ggViewer.open(el, viewItems[+el.dataset.open]);
    el.addEventListener("click", go);
    if (el.getAttribute("role") === "button") el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
    });
  });

  async function copyText(t) {
    try { await navigator.clipboard.writeText(t); return true; }
    catch (e) {
      try {
        const ta = document.createElement("textarea");
        ta.value = t; ta.style.cssText = "position:fixed;opacity:0";
        document.body.appendChild(ta); ta.select();
        const ok = document.execCommand("copy"); ta.remove(); return ok;
      } catch (_) { return false; }
    }
  }
  root.querySelectorAll(".gx-copy").forEach(btn => {
    btn.addEventListener("click", async () => {
      if (btn.dataset.busy) return;
      if (await copyText(btn.dataset.copy)) {
        btn.dataset.busy = "1"; btn.classList.add("copied");
        setTimeout(() => { btn.classList.remove("copied"); delete btn.dataset.busy; }, 1500);
      }
    });
  });

  if (!isLiteMode && "IntersectionObserver" in window) {
    if (window.anime) {
      const seen = new WeakSet();
      blocks.forEach(b => {
        b.style.opacity = "0";
        b.style.transform = "translateY(14px)";
      });
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const fresh = blocks.filter(b => !b.hidden && !seen.has(b));
          if (!fresh.length) { io.unobserve(e.target); return; }
          fresh.forEach(b => seen.add(b));
          anime({
            targets: fresh,
            opacity: [0, 1],
            translateY: [14, 0],
            duration: 500,
            easing: "easeOutQuad",
            delay: anime.stagger(90),
            complete: () => {
              fresh.forEach(b => {
                b.style.opacity = "";
                b.style.transform = "";
              });
            }
          });
          io.unobserve(e.target);
        });
      }, { threshold: 0.12 });
      blocks.forEach(b => io.observe(b));
    } else {
      blocks.forEach(b => b.classList.add("gx-rv"));
      const io = new IntersectionObserver(entries => {
        entries.filter(e => e.isIntersecting).forEach((e, k) => {
          e.target.style.setProperty("--d", (k * 90) + "ms");
          e.target.classList.add("gx-in");
          io.unobserve(e.target);
        });
      }, { threshold: 0.12 });
      blocks.forEach(b => io.observe(b));
    }
  }
}
renderGaming();

/* ---------------- Render Gallery Section (#gallery) ---------------- */
function renderGallery() {
  const isLiteMode = !!(window.FX && window.FX.lite) ||
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = matchMedia("(pointer: coarse)").matches;

  const gallery = (window.GALLERY || []).filter(item => String(item.src || "").trim());

  const sec = $("gallery");
  if (!sec) return;
  sec.hidden = false;

  if (!gallery.length) {
    const count = String(gallery.length).padStart(2, "0");
    sec.innerHTML = `
    <div class="sec-header-editorial">
      <h2 class="sec-main-title">${esc(t("gallery"))}</h2>
    </div>
    <div class="gg-empty" role="status">
      <div class="gg-empty-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>
      </div>
      <h3 class="gg-empty-title">${esc(t("galleryEmptyTitle"))}</h3>
      <p class="gg-empty-text">${esc(t("galleryEmptyText"))}</p>
      <div class="gg-empty-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 5h6"/><path d="M19 2v6"/><path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>
        <strong>${esc(t("noArtwork"))}</strong>
        <span>${esc(t("noArtworkSub"))}</span>
      </div>
      <div class="gg-empty-foot">${esc(t("personalArchive"))} · ${count} ${esc(t("items"))}</div>
    </div>`;
    return;
  }

  const tilesHtml = gallery.map(item => buildTileHtml(item, isLiteMode)).join("");

  sec.innerHTML = `
    <div class="sec-header-editorial">
      <h2 class="sec-main-title">${esc(t("gallery"))}</h2>
    </div>
    <div class="gg-grid">${tilesHtml}</div>
  `;

  attachTileHandlers(sec, isLiteMode, isTouch);
}
renderGallery();

/* ---------------- Section Entrance Reveal Animation ---------------- */
(function initSectionReveal() {
  if (reduced) {
    document.querySelectorAll(".site-section").forEach(s => s.classList.add("in-view"));
    return;
  }
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".site-section").forEach(sec => revealObserver.observe(sec));
})();

/* ---------------- Dock labels (EN/VI) + nút đổi ngôn ngữ ---------------- */
(function initLang() {
  document.querySelectorAll(".dock-item .dock-label").forEach(l => {
    const k = l.textContent.trim();
    if (C.nav && C.nav[k]) l.textContent = C.nav[k];
  });
  const sw = document.createElement("div");
  sw.className = "lang-sw";
  sw.setAttribute("role", "group");
  sw.setAttribute("aria-label", t("langLabel"));
  sw.innerHTML = ["en", "vi"].map(l =>
    `<button type="button" data-lang="${l}" class="${l === LANG ? "on" : ""}" aria-pressed="${l === LANG}">${l.toUpperCase()}</button>`).join("");
  sw.addEventListener("click", e => {
    const b = e.target.closest("[data-lang]");
    if (!b || b.dataset.lang === LANG) return;
    try { localStorage.setItem("lang", b.dataset.lang); } catch (err) { }
    location.reload();
  });
  document.body.appendChild(sw);
})();

/* ---------------- Hide sections (SITE.layout.hide) ---------------- */
(function hideSections() {
  const ids = (C.layout && C.layout.hide) || [];
  const off = el => el && el.style.setProperty("display", "none", "important");
  ids.forEach(id => {
    off(document.getElementById(id));
    document.querySelectorAll('.dock-item[data-target="' + id + '"]').forEach(off);
    document.querySelectorAll('[data-a="scroll:' + id + '"]').forEach(off);
  });
})();

/* ==========================================================================
   FLOATING DOCK CONTROLLER
   ========================================================================== */
(function initDock() {
  const dockBar = document.querySelector(".dock-bar");
  const dockPill = document.querySelector(".dock-pill");
  const dockItems = document.querySelectorAll(".dock-item");
  if (!dockBar || !dockPill || !dockItems.length) return;

  const reducedMotionQuery = matchMedia("(prefers-reduced-motion: reduce)");
  let isReducedMotion = reducedMotionQuery.matches;
  reducedMotionQuery.addEventListener("change", e => { isReducedMotion = e.matches; });

  let isManualScrolling = false;
  let manualScrollTimer = null;

  function updatePill(targetItem, animate = true) {
    if (!targetItem || !dockPill) return;

    if (!animate || isReducedMotion) {
      dockPill.style.transition = "none";
    } else {
      dockPill.style.transition = "";
    }

    const x = targetItem.offsetLeft;
    const w = targetItem.offsetWidth;

    dockPill.style.transform = `translateX(${x}px)`;
    dockPill.style.width = `${w}px`;

    if (!animate || isReducedMotion) {
      void dockPill.offsetWidth;
      dockPill.style.transition = "";
    }
  }

  function activateItem(item, animatePill = true) {
    if (!item) return;
    dockItems.forEach(d => {
      d.classList.remove("active");
      d.removeAttribute("aria-current");
    });
    item.classList.add("active");
    item.setAttribute("aria-current", "page");

    updatePill(item, animatePill);

    const targetId = item.dataset.target || (item.getAttribute("href") || "").replace(/^#/, "");
    if (targetId === "home") {
      document.body.classList.remove("not-home");
    } else {
      document.body.classList.add("not-home");
    }
  }

  const initialActive = document.querySelector(".dock-item.active") || dockItems[0];
  if (initialActive) {
    activateItem(initialActive, false);
  }

  if (document.fonts) {
    document.fonts.ready.then(() => {
      const cur = document.querySelector(".dock-item.active");
      if (cur) updatePill(cur, false);
    });
  }

  window.addEventListener("resize", () => {
    const cur = document.querySelector(".dock-item.active");
    if (cur) updatePill(cur, false);
  }, { passive: true });

  dockItems.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const targetId = item.dataset.target || (item.getAttribute("href") || "").replace(/^#/, "");

      isManualScrolling = true;
      clearTimeout(manualScrollTimer);
      manualScrollTimer = setTimeout(() => { isManualScrolling = false; }, 850);

      activateItem(item, true);

      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: isReducedMotion ? "auto" : "smooth" });
      } else {
        const sec = document.getElementById(targetId);
        if (sec) {
          sec.scrollIntoView({ behavior: isReducedMotion ? "auto" : "smooth", block: "start" });
        }
      }
    });
  });

  const sectionIds = ["home", "about", "gaming", "gallery", "projects", "skills", "contact"];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      if (isManualScrolling) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const matchItem = Array.from(dockItems).find(it => (it.dataset.target === id || it.getAttribute("href") === `#${id}`));
          if (matchItem && !matchItem.classList.contains("active")) {
            activateItem(matchItem, true);
          }
        }
      });
    }, {
      threshold: 0.6
    });

    sections.forEach(sec => observer.observe(sec));
  }

  window.addEventListener("scroll", () => {
    if (isManualScrolling) return;
    if (window.scrollY < 60) {
      const homeItem = Array.from(dockItems).find(it => it.dataset.target === "home" || it.getAttribute("href") === "#home");
      if (homeItem && !homeItem.classList.contains("active")) {
        activateItem(homeItem, true);
      }
    }
  }, { passive: true });
})();

/* ==========================================================================
   BACKGROUND MUSIC (BGM) CONTROLLER
   ========================================================================== */
(function initBGM() {
  const musicBtn = document.getElementById("music-btn");
  if (!musicBtn) return;

  const VOL_MIN = 0.04;
  const VOL_MAX = 0.5;
  const SLIDER_DEFAULT = 5;
  const STORE_KEY = "bgmVol2";

  const sliderToVol = s => (s <= 0 ? 0 : VOL_MIN + (VOL_MAX - VOL_MIN) * Math.pow(s / 100, 2));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  let level = SLIDER_DEFAULT;
  try {
    const saved = parseInt(localStorage.getItem(STORE_KEY), 10);
    if (!isNaN(saved)) level = clamp(saved, 0, 100);
  } catch (_) { }

  let target = sliderToVol(level);
  let isPlaying = false;
  let fadeTimer = null;

  const bgm = new Audio("./assets/audio/music.mp3");
  bgm.loop = true;
  bgm.preload = "auto";
  bgm.volume = 0;
  window.__bgmAudio = bgm;

  function fadeTo(to, ms, done) {
    clearInterval(fadeTimer);
    const from = bgm.volume, t0 = performance.now();
    fadeTimer = setInterval(() => {
      const k = Math.min(1, (performance.now() - t0) / ms);
      const end = to === "target" ? target : to;
      bgm.volume = clamp(from + (end - from) * k, 0, 1);
      if (k >= 1) {
        clearInterval(fadeTimer);
        fadeTimer = null;
        if (done) done();
      }
    }, 30);
  }

  function updateMusicUI(playing) {
    isPlaying = playing;
    musicBtn.classList.toggle("playing", playing);
    musicBtn.setAttribute("aria-pressed", String(playing));
    musicBtn.title = playing ? "Pause background music" : "Play background music";

    const iconContainer = musicBtn.querySelector(".music-icon-wrap");
    if (iconContainer) {
      iconContainer.innerHTML = ic(playing ? "vol" : "mute");
    }
  }

  async function start() {
    try {
      if (bgm.paused) bgm.volume = 0;
      await bgm.play();
      updateMusicUI(true);
      fadeTo("target", 900);
    } catch (err) {
      console.warn("Audio playback blocked by browser:", err);
      updateMusicUI(false);
    }
  }

  function stop() {
    updateMusicUI(false);
    fadeTo(0, 350, () => bgm.pause());
  }

  const pop = document.createElement("div");
  pop.className = "vol-pop";
  pop.id = "vol-pop";
  pop.setAttribute("role", "group");
  pop.setAttribute("aria-label", "Music volume");
  pop.innerHTML =
    `<span class="vol-ico"></span>` +
    `<input class="vol-range" id="vol-range" type="range" min="0" max="100" step="1" aria-label="Music volume">` +
    `<b class="vol-val"></b>`;
  document.body.appendChild(pop);

  const range = pop.querySelector(".vol-range");
  const volIco = pop.querySelector(".vol-ico");
  const volVal = pop.querySelector(".vol-val");

  function renderVolumeUI() {
    range.value = level;
    range.style.setProperty("--p", level + "%");
    range.setAttribute("aria-valuetext", level + " percent");
    volVal.textContent = level + "%";
    volIco.innerHTML = ic(level === 0 ? "mute" : "vol");
  }

  function setLevel(v) {
    level = clamp(Math.round(v), 0, 100);
    target = sliderToVol(level);
    if (isPlaying && !fadeTimer) bgm.volume = target;
    try { localStorage.setItem(STORE_KEY, String(level)); } catch (_) { }
    renderVolumeUI();
  }

  range.addEventListener("input", () => setLevel(+range.value));
  window.__bgmVol = { get: () => level, set: v => setLevel(v) };
  renderVolumeUI();
  document.dispatchEvent(new CustomEvent("bgmvol", { detail: level }));
  let hideT = null, dragging = false;

  function placePop() {
    const r = musicBtn.getBoundingClientRect();
    const w = pop.offsetWidth, h = pop.offsetHeight, gap = 10, m = 8;
    const left = clamp(r.right - w, m, Math.max(m, innerWidth - w - m));
    let top = r.top - h - gap;
    if (top < m) top = Math.min(r.bottom + gap, innerHeight - h - m);
    pop.style.left = left + "px";
    pop.style.top = top + "px";
  }

  function hidePop() {
    if (dragging || pop.matches(":hover") || pop.contains(document.activeElement)) return;
    pop.classList.remove("show");
  }

  function showPop(autoHideMs) {
    clearTimeout(hideT);
    placePop();
    pop.classList.add("show");
    if (autoHideMs) hideT = setTimeout(hidePop, autoHideMs);
  }

  const hideSoon = (ms) => { clearTimeout(hideT); hideT = setTimeout(hidePop, ms || 600); };

  musicBtn.addEventListener("mouseenter", () => showPop());
  musicBtn.addEventListener("mouseleave", () => hideSoon());
  musicBtn.addEventListener("focus", () => showPop());
  musicBtn.addEventListener("blur", () => hideSoon());
  pop.addEventListener("mouseenter", () => clearTimeout(hideT));
  pop.addEventListener("mouseleave", () => hideSoon());
  pop.addEventListener("focusout", () => hideSoon());
  pop.addEventListener("pointerdown", () => { dragging = true; clearTimeout(hideT); });
  addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    hideSoon(2500);
  });
  addEventListener("keydown", (e) => { if (e.key === "Escape") { pop.classList.remove("show"); } });
  addEventListener("resize", () => { if (pop.classList.contains("show")) placePop(); });

  function togglePlay() {
    if (isPlaying) stop(); else start();
    showPop(3500);
  }

  musicBtn.addEventListener("click", togglePlay);

  const startOnGesture = async () => {
    if (!isPlaying && bgm.paused) {
      await start();
    }
    document.removeEventListener("click", startOnGesture);
    document.removeEventListener("keydown", startOnGesture);
  };


  bgm.addEventListener("ended", () => {
    if (!bgm.loop) updateMusicUI(false);
  });
})();

/* ---------------- Cyber / Matrix Decrypt Text Effect ---------------- */
(function initRoleDecrypter() {
  const roleEl = $("role-text");
  if (!roleEl) return;
  const roles = (C.roles && C.roles.length) ? C.roles : ["AI Engineer", "Gamer"];
  if (roles.length <= 1) {
    roleEl.textContent = roles[0] || "";
    return;
  }
  const GLYPHS = "!<>-_\\/[]{}-=+*^?#_0101XYZ#$";
  let rIdx = 0;

  function scrambleTo(targetText, onDone) {
    if (document.documentElement.classList.contains("lite") || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      roleEl.textContent = targetText;
      if (onDone) setTimeout(onDone, 2600);
      return;
    }
    const currentText = roleEl.textContent || "";
    const maxLen = Math.max(currentText.length, targetText.length);
    let frame = 0;
    const totalFrames = 18;
    const FRAME_MS = 32;
    let last = 0;

    function draw() {
      let output = "";
      const progress = frame / totalFrames;
      const lockedChars = Math.floor(progress * targetText.length);
      for (let i = 0; i < maxLen; i++) {
        if (i < lockedChars) output += targetText[i];
        else if (i < targetText.length) output += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        else if (frame < totalFrames * 0.7) output += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      roleEl.textContent = output;
    }

    function step(now) {
      if (!last) { last = now; draw(); frame++; requestAnimationFrame(step); return; }
      if (now - last < FRAME_MS) { requestAnimationFrame(step); return; }
      last = now;
      if (frame > totalFrames) {
        roleEl.textContent = targetText;
        if (onDone) setTimeout(onDone, 2600);
        return;
      }
      draw();
      frame++;
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function cycle() {
    rIdx = (rIdx + 1) % roles.length;
    scrambleTo(roles[rIdx], cycle);
  }

  setTimeout(cycle, 2200);
})();

/* ---------------- Super Saiyan Click Avatar Effect (3 power levels) ---------------- */
(function initSuperSaiyan() {
  const avEl = $("av");
  if (!avEl) return;

  const root = document.documentElement;
  const pcard = document.querySelector(".pcard");
  const who = avEl.closest(".who") || avEl.parentElement;
  const phead = pcard ? pcard.querySelector(".phead") : null;
  const roleBadge = document.querySelector(".pcard .role");
  const roleTextNode = roleBadge ? Array.from(roleBadge.childNodes).find(n => n.nodeType === 3) : null;
  const roleDefault = roleTextNode ? roleTextNode.nodeValue : "";

  const LEVELS = [
    { cls: "ssj-1", label: "⚡ SUPER SAIYAN", toast: "⚡ SUPER SAIYAN ACTIVATED! ⚡", power: 9001, over: "IT'S OVER 9000!" },
    {
      cls: "ssj-2", label: "⚡ ASCENDED SAIYAN 2", toast: "⚡ ASCENDED SAIYAN 2 ⚡", power: 18000, over: "",
      bolts: { n: 5, ms: 110, len: 26 }, rings: 1
    },
    {
      cls: "ssj-3", label: "🔥 SUPER SAIYAN GOD", toast: "🔥 SUPER SAIYAN GOD ACTIVATED! 🔥", power: 50000, over: "",
      bolts: { n: 8, ms: 80, len: 34 }, rings: 2, stream: { n: 8, ms: 450 }
    }
  ];
  const HTML_CLASSES = LEVELS.map(l => l.cls);
  const LV_CLASSES = ["ssj-lv1", "ssj-lv2", "ssj-lv3"];
  const DEBOUNCE_MS = 800;
  const AUTO_OFF_MS = 0;
  const COUNT_MS = 1000;
  const PARTICLE_COUNT = 16;

  who.style.position = "relative";

  let level = 0;
  let lockedUntil = 0;
  let powerAnim = null;
  let cineTimeline = null;
  const timers = new Set();
  const nodes = new Set();

  const isLite = () =>
    !!(window.FX && window.FX.lite) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const mobileMQ = window.matchMedia("(max-width: 768px)");
  const isMobile = () => mobileMQ.matches;

  const rand = (a, b) => a + Math.random() * (b - a);
  const fmtNum = n => n.toLocaleString("en-US");

  function later(fn, ms) {
    const id = setTimeout(() => { timers.delete(id); fn(); }, ms);
    timers.add(id);
    return id;
  }
  function mount(el, parent, ttl) {
    parent.appendChild(el);
    nodes.add(el);
    if (ttl) later(() => { nodes.delete(el); el.remove(); }, ttl);
    return el;
  }
  function clearFx() {
    timers.forEach(clearTimeout);
    timers.clear();
    if (powerAnim) { powerAnim.pause(); powerAnim = null; }
    if (cineTimeline) { cineTimeline.pause(); cineTimeline = null; }
    nodes.forEach(el => el.remove());
    nodes.clear();
    if (pcard) pcard.classList.remove("ssj-shake");
  }

  function boxAround(el, pad) {
    el.style.left = (avEl.offsetLeft - pad) + "px";
    el.style.top = (avEl.offsetTop - pad) + "px";
    el.style.width = (avEl.offsetWidth + pad * 2) + "px";
    el.style.height = (avEl.offsetHeight + pad * 2) + "px";
    return el;
  }

  function flash(n) {
    const f = document.createElement("div");
    f.className = "ssj-flash-overlay ssj-flash-" + n;
    mount(f, document.body, 700);
  }

  function shockwave(n) {
    const s = document.createElement("div");
    s.className = "ssj-shockwave ssj-wave-" + n;
    boxAround(s, 5);
    mount(s, who, 750);
  }

  function fullscreenShockwave(n) {
    try {
      const rect = avEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const sw = document.createElement("div");
      sw.className = "ssj-fullscreen-shockwave ssj-fsw-" + n;
      sw.style.left = cx + "px";
      sw.style.top = cy + "px";
      document.body.appendChild(sw);
      setTimeout(() => sw.remove(), 750);
    } catch (e) { }
  }

  function shake() {
    if (!pcard) return;
    pcard.classList.remove("ssj-shake");
    void pcard.offsetWidth;
    pcard.classList.add("ssj-shake");
    later(() => pcard.classList.remove("ssj-shake"), 500);
  }

  function particles(count) {
    const wrap = boxAround(document.createElement("div"), 0);
    wrap.className = "ssj-fx";
    for (let i = 0; i < (count || PARTICLE_COUNT); i++) {
      const p = document.createElement("span");
      p.className = "ssj-p";
      p.style.setProperty("--x", rand(-28, 28).toFixed(1) + "px");
      p.style.setProperty("--y", (-rand(40, 80)).toFixed(1) + "px");
      p.style.setProperty("--s", rand(3, 6).toFixed(1) + "px");
      p.style.setProperty("--dl", rand(0, 0.3).toFixed(2) + "s");
      p.style.setProperty("--t", rand(0.9, 1.2).toFixed(2) + "s");
      p.style.left = rand(15, 85).toFixed(0) + "%";
      wrap.appendChild(p);
    }
    mount(wrap, who, 1600);
  }

  function bolts(cfg, opt) {
    const SVG_NS = "http://www.w3.org/2000/svg";
    const base = opt ? opt.size : avEl.offsetWidth;
    const pad = cfg.len + 14;
    const size = base + pad * 2;
    const c = size / 2;
    const r0 = base / 2 + 2;
    const wrap = opt ? document.createElement("div") : boxAround(document.createElement("div"), pad);
    if (opt) {
      wrap.style.left = "50%";
      wrap.style.top = "50%";
      wrap.style.width = size + "px";
      wrap.style.height = size + "px";
      wrap.style.marginLeft = (-size / 2) + "px";
      wrap.style.marginTop = (-size / 2) + "px";
    }
    wrap.className = "ssj-bolts";
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 " + size + " " + size);
    const glow = document.createElementNS(SVG_NS, "path");
    glow.setAttribute("class", "ssj-bolt-glow");
    const core = document.createElementNS(SVG_NS, "path");
    core.setAttribute("class", "ssj-bolt-core");
    svg.append(glow, core);
    wrap.appendChild(svg);
    mount(wrap, opt ? opt.parent : who);

    const draw = () => {
      let d = "";
      for (let i = 0; i < cfg.n; i++) {
        const a = rand(0, Math.PI * 2);
        const len = rand(cfg.len * 0.55, cfg.len);
        const cx = Math.cos(a), sy = Math.sin(a);
        d += "M" + (c + cx * r0).toFixed(1) + " " + (c + sy * r0).toFixed(1);
        const segs = 5;
        for (let s = 1; s <= segs; s++) {
          const rr = r0 + len * s / segs;
          const jit = s === segs ? 0 : rand(-7, 7);
          d += "L" + (c + cx * rr - sy * jit).toFixed(1) + " " + (c + sy * rr + cx * jit).toFixed(1);
        }
      }
      if (!(opt && opt.noGlow)) glow.setAttribute("d", d);
      core.setAttribute("d", d);
    };
    const blank = () => { glow.setAttribute("d", ""); core.setAttribute("d", ""); };
    const end = opt && opt.until ? performance.now() + opt.until : 0;
    const loop = () => {
      if (end && performance.now() >= end) { blank(); return; }
      draw();
      if (cfg.on) later(blank, cfg.on);
      later(loop, cfg.ms);
    };
    loop();
  }

  function rings(n) {
    for (let i = 0; i < n; i++) {
      const r = document.createElement("div");
      r.className = "ssj-ring ssj-ring-" + i;
      boxAround(r, 7 + i * 8);
      mount(r, who);
    }
  }

  function toast(text, cls) {
    const t = document.createElement("div");
    t.className = "ssj-toast " + cls;
    t.textContent = text;
    mount(t, who, 1600);
  }

  function showPower(L, lite) {
    if (!phead) return;
    const box = document.createElement("span");
    box.className = "ssj-power";
    const lab = document.createElement("span");
    lab.className = "ssj-power-l";
    lab.textContent = "POWER LEVEL";
    const num = document.createElement("b");
    num.className = "ssj-power-n";
    num.textContent = "0";
    box.append(lab, num);
    mount(box, phead);

    const finish = () => {
      if (L.over) { box.classList.add("ssj-over"); box.textContent = L.over; }
      else num.textContent = fmtNum(L.power);
    };
    if (lite) { finish(); return; }

    if (powerAnim) { powerAnim.pause(); powerAnim = null; }
    const counter = { value: 0 };
    powerAnim = anime({
      targets: counter,
      value: L.power,
      duration: COUNT_MS,
      easing: "easeOutCubic",
      update: () => { num.textContent = fmtNum(Math.round(counter.value)); },
      complete: () => { powerAnim = null; finish(); }
    });
  }

  const PV_SRC = (C.images && C.images.powerVideos) || {};
  const PV_FADE_MS = 600;
  const bgBox = $("bg");
  const pv = {};

  const pvReady = v => !!v && v.classList.contains("ready") && !v.paused;

  function pvMake(k) {
    if (!PV_SRC[k] || !bgBox || pv[k]) return;
    const v = document.createElement("video");
    v.id = "bgv-ssj" + k;
    v.className = "bg-vid2";
    v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true;
    v.setAttribute("playsinline", ""); v.setAttribute("webkit-playsinline", "");
    v.disablePictureInPicture = true;
    v.setAttribute("aria-hidden", "true");
    v.preload = "auto";
    v.dataset.on = "0";
    v.addEventListener("playing", () => {
      if (v.dataset.on !== "1") return;
      v.classList.add("ready");
      later(pvSettle, PV_FADE_MS + 50);
    });
    v.addEventListener("canplaythrough", () => { if (k === 2) pvMake(3); }, { once: true });
    v.addEventListener("error", () => {
      console.warn("Power video failed to load:", PV_SRC[k]);
      v.remove();
      delete pv[k];
      if (level >= 2) videoOn(true);
    });
    v.src = PV_SRC[k];
    bgBox.appendChild(v);
    pv[k] = v;
  }

  function pvLoad() {
    if (isLite()) return;
    pvMake(2);
    if (!PV_SRC[2]) pvMake(3);
  }

  function pvShow(v) {
    v.dataset.on = "1";
    if (pvReady(v)) return;
    try { v.currentTime = 0; } catch (e) { }
    const p = v.play();
    if (p && p.catch) p.catch(err => console.warn("Power video autoplay prevented:", err));
  }

  function pvHide(v) {
    v.dataset.on = "0";
    v.classList.remove("ready");
    later(() => { if (v.dataset.on !== "1") v.pause(); }, PV_FADE_MS);
  }

  function pvSettle() {
    if (level >= 3 && pvReady(pv[3])) {
      if (pv[2]) pv[2].pause();
      videoOn(false);
    } else if (level >= 2 && pvReady(pv[2])) {
      videoOn(false);
    }
  }

  function pvSync(n) {
    if (isLite()) return;
    pvLoad();
    if (n >= 3) pvMake(3);
    [2, 3].forEach(k => {
      const v = pv[k];
      if (!v) return;
      const keep = (k === 2 && n >= 2) || (k === 3 && n === 3);
      if (keep) pvShow(v); else pvHide(v);
    });
    if (n < 2) videoOn(true);
    else later(pvSettle, PV_FADE_MS + 50);
  }

  // Warm up power videos: hover, first touch, or #home in view.
  avEl.addEventListener("pointerenter", pvLoad, { once: true });
  document.addEventListener("pointerdown", pvLoad, { once: true, passive: true });
  document.addEventListener("touchstart", pvLoad, { once: true, passive: true });
  if ("IntersectionObserver" in window) {
    const homeEl = document.getElementById("home");
    if (homeEl) {
      const homeObs = new IntersectionObserver((entries) => {
        if (entries.some(e => e.isIntersecting)) { pvLoad(); homeObs.disconnect(); }
      }, { threshold: 0.25 });
      homeObs.observe(homeEl);
    }
  }

  function applyLevel(n) {
    const L = LEVELS[n - 1];
    root.classList.remove(...HTML_CLASSES);
    root.classList.add(L.cls);
    avEl.classList.remove(...LV_CLASSES);
    avEl.classList.add("super-saiyan", "ssj-lv" + n);
    if (roleBadge) {
      roleBadge.classList.remove(...LV_CLASSES);
      roleBadge.classList.add("ssj-role", "ssj-lv" + n);
      if (roleTextNode) roleTextNode.nodeValue = L.label;
    }
    pvSync(n);
  }

  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  const SAIYAN_AUDIO_CONFIG = {
    files: {
      ssj1: "",
      ssj2: "",
      charge: "",
      down: "",
    },
    volume: {
      ssj1: 0.65,
      ssj2: 0.75,
      charge: 0.2,
      down: 0.55,
      bgmDucking: 0.25
    },
    timing: {
      chargeDelayMs: 0,
      duckingDuration: 2200
    }
  };

  const saiyanAudioCache = {};
  let activeSaiyanAudio = null;

  function preloadSaiyanAudio() {
    Object.values(SAIYAN_AUDIO_CONFIG.files).filter(Boolean).forEach(src => {
      if (!saiyanAudioCache[src]) {
        const a = new Audio(src);
        a.preload = "auto";
        saiyanAudioCache[src] = a;
      }
    });
  }
  preloadSaiyanAudio();

  function playImpactSynth() {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(180, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.45);
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.6);
    } catch (e) { }
  }

  function playSaiyanCustomAudio(type) {
    if (isLite()) return;

    if (activeSaiyanAudio) {
      try { activeSaiyanAudio.pause(); activeSaiyanAudio.currentTime = 0; } catch (_) { }
      activeSaiyanAudio = null;
    }

    const src = SAIYAN_AUDIO_CONFIG.files[type];
    const vol = SAIYAN_AUDIO_CONFIG.volume[type] ?? 0.7;

    const bgm = window.__bgmAudio;
    if (bgm && !bgm.paused) {
      const originalBgmVol = bgm.volume;
      bgm.volume = Math.min(originalBgmVol, SAIYAN_AUDIO_CONFIG.volume.bgmDucking);
      setTimeout(() => { if (bgm) bgm.volume = originalBgmVol; }, SAIYAN_AUDIO_CONFIG.timing.duckingDuration);
    }

    if (src) {
      let audio = saiyanAudioCache[src];
      if (!audio) {
        audio = new Audio(src);
        audio.preload = "auto";
        saiyanAudioCache[src] = audio;
      }
      try { audio.currentTime = 0; } catch (_) { }
      audio.volume = vol;
      activeSaiyanAudio = audio;
      const p = audio.play();
      if (p && p.catch) {
        p.catch(() => {
          playSaiyanFallbackSynth(type === "charge" ? 3 : type === "down" ? 0 : type === "ssj2" ? 2 : 1);
        });
      }
      return audio;
    } else {
      playSaiyanFallbackSynth(type === "charge" ? 3 : type === "down" ? 0 : type === "ssj2" ? 2 : 1);
    }
  }

  function playSaiyanFallbackSynth(lv) {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const t = ctx.currentTime;

      if (lv === 1) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(180, t);
        osc.frequency.exponentialRampToValueAtTime(540, t + 0.35);
        gain.gain.setValueAtTime(0.002, t);
        gain.gain.linearRampToValueAtTime(0.022, t + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0005, t + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.5);
      } else if (lv === 2) {
        const osc = ctx.createOscillator();
        const sub = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        sub.type = "triangle";
        osc.frequency.setValueAtTime(260, t);
        osc.frequency.exponentialRampToValueAtTime(820, t + 0.4);
        sub.frequency.setValueAtTime(130, t);
        sub.frequency.exponentialRampToValueAtTime(410, t + 0.4);
        gain.gain.setValueAtTime(0.002, t);
        gain.gain.linearRampToValueAtTime(0.025, t + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0005, t + 0.5);
        osc.connect(gain);
        sub.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        sub.start(t);
        osc.stop(t + 0.55);
        sub.stop(t + 0.55);
      } else if (lv === 3) {
        const bass = ctx.createOscillator();
        const lead = ctx.createOscillator();
        const gain = ctx.createGain();
        bass.type = "triangle";
        lead.type = "sawtooth";
        bass.frequency.setValueAtTime(85, t);
        bass.frequency.exponentialRampToValueAtTime(42, t + 0.5);
        lead.frequency.setValueAtTime(320, t);
        lead.frequency.exponentialRampToValueAtTime(1100, t + 0.6);
        gain.gain.setValueAtTime(0.003, t);
        gain.gain.linearRampToValueAtTime(0.03, t + 0.07);
        gain.gain.exponentialRampToValueAtTime(0.0005, t + 0.7);
        bass.connect(gain);
        lead.connect(gain);
        gain.connect(ctx.destination);
        bass.start(t);
        lead.start(t);
        bass.stop(t + 0.75);
        lead.stop(t + 0.75);
      } else {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(420, t);
        osc.frequency.exponentialRampToValueAtTime(75, t + 0.35);
        gain.gain.setValueAtTime(0.015, t);
        gain.gain.exponentialRampToValueAtTime(0.0005, t + 0.38);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.4);
      }
    } catch (e) { }
  }

  function playSaiyanSfx(lv) {
    if (lv === 1) playSaiyanCustomAudio("ssj1");
    else if (lv === 2) playSaiyanCustomAudio("ssj2");
    else if (lv === 3) playSaiyanCustomAudio("charge");
    else playSaiyanCustomAudio("down");
  }

  const CINE_LOCK_MS = 2700;
  const CINE_BACK_MS = 520;
  const CINE_SCALE = 0.86;
  const GOD_AVATAR = (C.images && C.images.avatarGod) || "";
  const heroEl = document.querySelector("#home .intro");
  let cineOn = false;
  let cineCorner = null;

  function cineReset() {
    cineOn = false;
    cineCorner = null;
    root.classList.remove("cine-on", "cine-gone", "cine-open", "cine-back");
    avEl.classList.remove("cine-shake", "cine-pop");
    if (pcard) {
      pcard.style.removeProperty("--cine-dx");
      pcard.style.removeProperty("--cine-dy");
      pcard.style.removeProperty("--cine-origin");
      pcard.style.clipPath = "";
      pcard.style.transformOrigin = "";
    }
    if (heroEl) heroEl.style.removeProperty("--cine-hx");
    const oldVid = document.querySelector(".cine-aura-vid");
    if (oldVid) oldVid.remove();
  }

  function playCineAuraVideo() {
    const vid = document.createElement("video");
    vid.className = "cine-aura-vid";
    vid.src = "assets/video/aura.mp4";
    vid.autoplay = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.webkitPlaysInline = true;
    vid.setAttribute("playsinline", "");
    vid.setAttribute("webkit-playsinline", "");
    document.body.appendChild(vid);

    requestAnimationFrame(() => {
      vid.classList.add("active");
      const p = vid.play();
      if (p && p.catch) p.catch(() => { });
    });

    return {
      burst: () => {
        vid.classList.add("burst");
        setTimeout(() => vid.remove(), 320);
      },
      remove: () => {
        vid.remove();
      }
    };
  }

  function cineRing(layer, d) {
    const w = document.createElement("div");
    w.className = "cine-ring";
    w.style.setProperty("--d", d + "px");
    const g = document.createElement("div");
    g.className = "ssj-ring";
    g.style.cssText = "left:0;top:0;width:100%;height:100%";
    w.appendChild(g);
    mount(w, layer, 700);
  }

  function cineShockwave() {
    const sw = document.createElement("div");
    sw.className = "ssj-fullscreen-shockwave ssj-fsw-3";
    const d = Math.round(Math.min(root.clientWidth, root.clientHeight) * 0.5);
    sw.style.cssText = "left:50%;top:50%;width:" + d + "px;height:" + d + "px";
    mount(sw, document.body, 750);
  }

  function cineCornerShow() {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cine-corner";
    b.setAttribute("aria-label", "Power down");
    const img = document.createElement("img");
    img.src = GOD_AVATAR || avEl.currentSrc || avEl.src;
    img.alt = "";
    b.appendChild(img);
    const wave = document.createElement("div");
    wave.className = "ssj-shockwave ssj-wave-3";
    wave.style.cssText = "top:0;left:0;width:72px;height:72px";
    b.appendChild(wave);
    b.addEventListener("click", () => {
      const now = performance.now();
      if (now < lockedUntil) return;
      lockedUntil = now + DEBOUNCE_MS;
      powerDown(true);
    });
    mount(b, document.body);
    mount(wave, b, 750);
    cineCorner = b;
    void b.offsetWidth;
    b.classList.add("show");
  }

  let auraVideoHandle = null;

  function powerUpCine(L) {
    clearFx();
    cineReset();
    cineOn = true;
    lockedUntil = performance.now() + CINE_LOCK_MS;

    pvLoad();
    pvMake(3);
    if (pv[3]) pvShow(pv[3]);

    const prevTransform = pcard.style.transform;
    pcard.style.transform = "none";
    const r = pcard.getBoundingClientRect();
    const avR = avEl.getBoundingClientRect();
    pcard.style.transform = prevTransform;

    const vw = root.clientWidth, vh = root.clientHeight;
    const avCenterX = avR.left + avR.width / 2;
    const avCenterY = avR.top + avR.height / 2;

    const originX = ((avCenterX - r.left) / r.width) * 100;
    const originY = ((avCenterY - r.top) / r.height) * 100;
    pcard.style.transformOrigin = originX.toFixed(2) + "% " + originY.toFixed(2) + "%";
    pcard.style.setProperty("--cine-origin", originX.toFixed(2) + "% " + originY.toFixed(2) + "%");

    const dx = Math.round(vw / 2 - avCenterX);
    const dy = Math.round(vh / 2 - avCenterY);
    pcard.style.setProperty("--cine-dx", dx + "px");
    pcard.style.setProperty("--cine-dy", dy + "px");

    if (heroEl) {
      const h = heroEl.getBoundingClientRect();
      heroEl.style.setProperty("--cine-hx", (h.left + h.width / 2 < r.left + r.width / 2 ? -28 : 28) + "px");
    }

    void pcard.offsetWidth;
    root.classList.add("cine-on");

    const layer = document.createElement("div");
    layer.className = "cine-layer";
    mount(layer, document.body, 1900);

    auraVideoHandle = playCineAuraVideo();

    cineTimeline = anime.timeline({
      complete: () => {
        cineTimeline = null;
        level = 3;
        pvSettle();
        cineCornerShow();
      }
    });

    cineTimeline.add({
      duration: 600,
      begin: () => {
        avEl.classList.add("cine-shake");
        playSaiyanCustomAudio("charge");
      }
    });

    cineTimeline.add({
      duration: 800,
      begin: () => {
        avEl.classList.remove("cine-shake");
        avEl.classList.add("cine-pop");
        root.classList.add("cine-gone");
        if (auraVideoHandle) {
          auraVideoHandle.burst();
          auraVideoHandle = null;
        }
        flash(3);
        cineShockwave();
        applyLevel(3);
        playImpactSynth();
        showPower(L, false);
        if (typeof navigator.vibrate === "function") {
          try { navigator.vibrate(80); } catch (e) { }
        }
      }
    });

    cineTimeline.add({
      duration: 300,
      begin: () => root.classList.add("cine-open")
    });

    cineTimeline.add({ duration: 600 });
  }

  function cineReturn(corner) {
    if (auraVideoHandle) {
      auraVideoHandle.remove();
      auraVideoHandle = null;
    }
    avEl.classList.remove("cine-shake", "cine-pop");
    root.classList.remove("cine-gone");
    root.classList.add("cine-back");
    if (corner) {
      nodes.add(corner);
      corner.classList.remove("show");
      corner.classList.add("leave");
      later(() => { nodes.delete(corner); corner.remove(); }, 320);
    }
    cineCorner = null;
    later(cineReset, CINE_BACK_MS + 40);
  }

  function powerUp(n) {
    const L = LEVELS[n - 1];
    const lite = isLite();
    if (n === 3 && !lite && pcard) { powerUpCine(L); return; }
    clearFx();
    cineReset();
    level = n;
    applyLevel(n);
    playSaiyanSfx(n);
    if (!lite) {
      flash(n);
      shockwave(n);
      fullscreenShockwave(n);
      shake();
      particles();
      if (L.bolts) bolts(L.bolts);
      if (L.rings) rings(L.rings);
      if (L.stream) {
        const streamLoop = () => { particles(L.stream.n); later(streamLoop, L.stream.ms); };
        later(streamLoop, L.stream.ms);
      }
      if (typeof navigator.vibrate === "function") {
        try { navigator.vibrate(80); } catch (e) { }
      }
    }
    toast(L.toast, "ssj-toast-" + n);
    showPower(L, lite);
    if (AUTO_OFF_MS > 0) later(() => powerDown(true), AUTO_OFF_MS);
  }

  function powerDown(announce) {
    if (!level) return;
    const wasCine = cineOn;
    const corner = cineCorner;
    if (corner) nodes.delete(corner);
    clearFx();
    level = 0;
    root.classList.remove(...HTML_CLASSES);
    avEl.classList.remove("super-saiyan", ...LV_CLASSES);
    if (roleBadge) {
      roleBadge.classList.remove("ssj-role", ...LV_CLASSES);
      if (roleTextNode) roleTextNode.nodeValue = roleDefault;
    }
    pvSync(0);
    if (wasCine) cineReturn(corner);
    if (announce) {
      playSaiyanSfx(0);
      toast("POWER DOWN", "ssj-toast-down");
    }
  }

  avEl.addEventListener("click", () => {
    if (isMobile()) return;
    const now = performance.now();
    if (now < lockedUntil) return;
    lockedUntil = now + DEBOUNCE_MS;
    if (level >= LEVELS.length) powerDown(true);
    else powerUp(level + 1);
  });

  // Chuyển sang mobile (thu nhỏ cửa sổ, xoay máy): về Base ngay, không toast/âm thanh
  const onMobileChange = () => { if (isMobile()) powerDown(false); };
  if (mobileMQ.addEventListener) mobileMQ.addEventListener("change", onMobileChange);
  else if (mobileMQ.addListener) mobileMQ.addListener(onMobileChange);
})();

/* ---------------- Clock ---------------- */
const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: C.timeZone, hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
const tickClock = () => { if ($("clk")) $("clk").textContent = fmt.format(new Date()); };
tickClock(); setInterval(tickClock, 1000);

/* ---------------- Discord (Lanyard) ---------------- */
const COL = { online: "#3ba55d", idle: "#faa61a", dnd: "#ed4245", offline: "#747f8d" };
function setSt(s) {
  if (!COL[s]) s = "offline";
  if ($("dot")) $("dot").style.background = COL[s];
  if ($("stx")) { $("stx").textContent = s.toUpperCase(); $("stx").style.color = COL[s]; }
}
function actImg(g) {
  const a = g.assets && g.assets.large_image;
  if (!a) return "";
  if (a.startsWith("mp:")) return "https://media.discordapp.net/" + a.slice(3);
  return g.application_id ? `https://cdn.discordapp.com/app-assets/${g.application_id}/${a}.png` : "";
}
function setAct(d) {
  const box = $("act"), img = $("actimg"); if (!box) return;
  let title = "", sub = "", pic = "";
  if (d && d.listening_to_spotify && d.spotify) {
    title = "♪ " + d.spotify.song; sub = String(d.spotify.artist || "").replace(/;\s*/g, ", "); pic = d.spotify.album_art_url || "";
  } else if (d) {
    const acts = d.activities || [], g = acts.find(a => [0, 1, 3, 5].includes(a.type)), cs = acts.find(a => a.type === 4);
    if (g) {
      title = ({ 0: "Playing ", 1: "Streaming ", 3: "Watching ", 5: "Competing in " }[g.type] || "") + g.name;
      sub = [g.details, g.state].filter(Boolean).join(" · "); pic = actImg(g);
    } else if (cs && (cs.state || (cs.emoji && cs.emoji.name))) {
      title = ((cs.emoji && cs.emoji.name) ? cs.emoji.name + " " : "") + (cs.state || "");
    }
  }
  $("actt").textContent = title; $("actd").textContent = sub; $("actd").hidden = !sub;
  img.onerror = () => { img.hidden = true; };
  img.hidden = !pic; if (pic) img.src = pic;
  box.hidden = !title;
}
async function pollDiscord() {
  try {
    if (!/^\d+$/.test(C.discordId)) throw 0;
    const j = await (await fetch("https://api.lanyard.rest/v1/users/" + C.discordId)).json();
    setSt(j.success ? j.data.discord_status : "offline");
    setAct(j.success ? j.data : null);
  } catch (e) { setSt("offline"); setAct(null); }
}
setSt("offline"); pollDiscord(); setInterval(pollDiscord, 20000);

/* ---------------- Fixed Background ---------------- */
if ($("bg")) $("bg").style.transform = "none";

/* ---------------- 3D Interactive Card Tilt & Specular Light ---------------- */
(function initCardTilt() {
  const card = document.querySelector(".pcard");
  if (!card) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || matchMedia("(pointer: coarse)").matches) return;
  if ((window.FX && window.FX.lite) || document.documentElement.classList.contains("lite")) return;

  let bounds = null;
  let rafId = 0;
  let targetRotX = 0, targetRotY = 0;
  let currentRotX = 0, currentRotY = 0;

  function updateBounds() {
    bounds = card.getBoundingClientRect();
  }

  function renderTilt() {
    if (document.documentElement.classList.contains("cine-on")) {
      card.style.transform = "";
      rafId = 0;
      return;
    }
    currentRotX += (targetRotX - currentRotX) * 0.14;
    currentRotY += (targetRotY - currentRotY) * 0.14;

    card.style.transform = `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;

    if (Math.abs(targetRotX - currentRotX) > 0.04 || Math.abs(targetRotY - currentRotY) > 0.04) {
      rafId = requestAnimationFrame(renderTilt);
    } else {
      rafId = 0;
      if (targetRotX === 0 && targetRotY === 0) {
        card.style.transform = "";
      }
    }
  }

  card.addEventListener("mouseenter", () => {
    updateBounds();
  });

  card.addEventListener("mousemove", e => {
    if (document.documentElement.classList.contains("cine-on")) return;
    if (!bounds) updateBounds();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    card.style.setProperty("--card-mx", `${x}px`);
    card.style.setProperty("--card-my", `${y}px`);

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    targetRotX = -((y - centerY) / centerY) * 6;
    targetRotY = ((x - centerX) / centerX) * 7.5;

    if (!rafId) {
      rafId = requestAnimationFrame(renderTilt);
    }
  });

  card.addEventListener("mouseleave", () => {
    targetRotX = 0;
    targetRotY = 0;
    card.style.setProperty("--card-mx", `-500px`);
    card.style.setProperty("--card-my", `-500px`);
    if (!rafId) {
      rafId = requestAnimationFrame(renderTilt);
    }
  });

  window.addEventListener("resize", () => { bounds = null; }, { passive: true });
})();
/* ---------- Đổi nhạc nền theo cấp Saiyan + tự bật khi lên God ---------- */
/* ---------- Nhạc theo cấp Saiyan: God tự bật, về base tự tắt ---------- */
(function levelMusic() {
  const bgm = window.__bgmAudio;
  if (!bgm) return;
  const root = document.documentElement;
  const NORMAL = bgm.src;                          // nhạc thường (music.mp3)
  const TRACKS = { 3: "./assets/audio/god.mp3" };  // cấp → file nhạc
  const AUTO_PLAY_LEVEL = 3;                       // lên cấp này thì tự bật nhạc
  let current = NORMAL;
  let prev = 0;
  let swapT = null;

  function setTrack(src, resume = true) {
    if (current === src) return;
    current = src;
    const wasPlaying = resume && !bgm.paused;
    bgm.src = src;
    bgm.loop = true;
    if (wasPlaying) bgm.play().catch(() => { });
  }

  bgm.addEventListener("error", () => {
    if (current !== NORMAL) setTrack(NORMAL);
  });

  function sync() {
    let lv = 0;
    for (const n of [3, 2, 1]) {
      if (root.classList.contains("ssj-" + n)) { lv = n; break; }
    }
    const btn = document.getElementById("music-btn");
    clearTimeout(swapT);

    if (lv === 0 && prev !== 0) {
      // về base: tắt nhạc (có fade), rồi trả lại nhạc thường nhưng KHÔNG phát
      if (!bgm.paused && btn) btn.click();
      swapT = setTimeout(() => setTrack(NORMAL, false), 450);
    } else {
      setTrack(TRACKS[lv] || NORMAL);
    }

    // vừa chuyển lên God và nhạc đang tắt → bật
    if (lv === AUTO_PLAY_LEVEL && prev !== AUTO_PLAY_LEVEL && bgm.paused && btn) {
      btn.click();
    }
    prev = lv;
  }

  new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ["class"] });
  sync();
})();
/* ===== Thẻ nguồn nhạc: mở ra từ nút BGM ===== */
/* ---------- Thẻ nguồn nhạc: mở ra từ nút BGM rồi thu lại ---------- */
(function nowPlaying() {
  const bgm = window.__bgmAudio;
  if (!bgm) return;
  const root = document.documentElement;
  const SHOW_MS = 4500;

  const NOW = {
    3: {
      title: "Shape of You",
      artist: "Ed Sheeran",
      credit: "Nhạc nền chế độ God · Chỉ dùng cá nhân, không thương mại"
    }
  };

  /* ---------- dựng thẻ ---------- */
  const pill = document.createElement("div");
  pill.className = "now-playing";
  pill.innerHTML =
    '<div class="np-top">' +
    '<div class="np-eq"><i></i><i></i><i></i><i></i></div>' +
    '<div class="np-body">' +
    '<span class="np-label">ĐANG PHÁT</span>' +
    '<b class="np-title"></b>' +
    '<span class="np-artist"></span>' +
    '</div>' +
    '</div>' +
    '<div class="np-vol">' +
    '<span class="np-vol-ico"></span>' +
    '<input class="vol-range np-range" type="range" min="0" max="100" step="1" aria-label="Music volume">' +
    '<b class="np-vol-val"></b>' +
    '</div>' +
    '<div class="np-credit"></div>';
  document.body.appendChild(pill);

  const elTitle = pill.querySelector(".np-title");
  const elArtist = pill.querySelector(".np-artist");
  const elCredit = pill.querySelector(".np-credit");
  const range = pill.querySelector(".np-range");
  const volIco = pill.querySelector(".np-vol-ico");
  const volVal = pill.querySelector(".np-vol-val");

  /* ---------- volume: cập nhật giao diện thẻ ---------- */
  let shown = -1;
  function paintVol(v) {
    v = Math.max(0, Math.min(100, Math.round(v)));
    range.value = v;
    range.style.setProperty("--p", v + "%");    // phần tô màu bên trái nút tròn
    volVal.textContent = v + "%";               // số %
    const mute = v === 0;
    if (mute !== (shown === 0)) volIco.innerHTML = ic(mute ? "mute" : "vol");
    shown = v;
  }

  const V = window.__bgmVol;                    // do initBGM cung cấp
  if (V) {
    volIco.innerHTML = ic(V.get() === 0 ? "mute" : "vol");
    paintVol(V.get());

    // kéo thanh: tự cập nhật thẻ trước, rồi mới áp vào âm lượng thật
    const onSlide = () => {
      const v = +range.value;
      paintVol(v);
      V.set(v);
    };
    range.addEventListener("input", onSlide);
    range.addEventListener("change", onSlide);

    // đổi volume từ chỗ khác (popup cũ) thì thẻ cũng theo
    document.addEventListener("bgmvol", e => {
      if (e.detail !== +range.value) paintVol(e.detail);
    });
  } else {
    pill.querySelector(".np-vol").remove();
  }

  /* ---------- giữ thẻ mở khi đang rê chuột / kéo / focus ---------- */
  let timer = null, dragging = false, lastLv = -1;
  const busy = () =>
    dragging || pill.matches(":hover") || pill.contains(document.activeElement);

  function hide() {
    clearTimeout(timer);
    pill.classList.remove("show");
  }
  function arm(ms) {
    clearTimeout(timer);
    timer = setTimeout(() => { if (busy()) arm(1200); else hide(); }, ms || SHOW_MS);
  }

  pill.addEventListener("pointerdown", () => { dragging = true; clearTimeout(timer); });
  addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    if (pill.classList.contains("show")) arm(2500);
  });
  pill.addEventListener("pointerleave", () => {
    if (pill.classList.contains("show") && !dragging) arm(1500);
  });

  /* ---------- hiện thẻ theo cấp Saiyan ---------- */
  function level() {
    for (const n of [3, 2, 1]) if (root.classList.contains("ssj-" + n)) return n;
    return 0;
  }

  function reveal() {
    const info = NOW[level()];
    if (!info || bgm.paused) { hide(); return; }
    elTitle.textContent = info.title;
    elArtist.textContent = info.artist || "";
    elArtist.style.display = info.artist ? "" : "none";
    elCredit.textContent = info.credit || "";
    elCredit.style.display = info.credit ? "" : "none";
    if (V) paintVol(V.get());
    pill.classList.add("show");
    arm();
  }

  bgm.addEventListener("play", reveal);
  bgm.addEventListener("pause", hide);
  bgm.addEventListener("ended", hide);

  new MutationObserver(() => {
    const lv = level();
    if (lv === lastLv) return;
    lastLv = lv;
    reveal();
  }).observe(root, { attributes: true, attributeFilter: ["class"] });
  lastLv = level();

  const btn = document.getElementById("music-btn");
  if (btn) btn.addEventListener("mouseenter", reveal);
})();
/* ---------- Thông điệp God: gõ chữ giữa màn hình ---------- */
(function godMessage() {
  const LINES = C.godMessage;
  if (!Array.isArray(LINES) || !LINES.length) return;

  const root = document.documentElement;
  const TYPE_MS = 38;      // ms mỗi ký tự
  const LINE_GAP = 550;    // nghỉ giữa các dòng
  const HOLD_MS = 6000;    // giữ chữ sau khi gõ xong
  const NO_CINE_DELAY = 1200;
  const CINE_DELAY = 2900; // chờ cảnh biến hình xong

  const layer = document.createElement("div");
  layer.className = "god-msg";
  layer.setAttribute("role", "status");
  layer.setAttribute("aria-label", LINES.join(" "));
  const box = document.createElement("div");
  box.className = "god-msg-box";
  const els = LINES.map((_, i) => {
    const p = document.createElement("p");
    p.className = "god-msg-line" + (i === 0 ? " first" : "");
    p.setAttribute("aria-hidden", "true");
    box.appendChild(p);
    return p;
  });
  layer.appendChild(box);
  document.body.appendChild(layer);

  const cursor = document.createElement("span");
  cursor.className = "god-msg-cur";
  cursor.textContent = "|";

  const isLite = () =>
    !!(window.FX && window.FX.lite) ||
    matchMedia("(prefers-reduced-motion: reduce)").matches;

  let timers = [];
  let state = "idle";   // idle | wait | typing | holding
  const later = (fn, ms) => { const id = setTimeout(fn, ms); timers.push(id); return id; };
  const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };

  function fillAll() {
    els.forEach((el, i) => { el.textContent = LINES[i]; });
    cursor.remove();
  }

  function reset() {
    clearTimers();
    layer.classList.remove("show", "out");
    els.forEach(el => { el.textContent = ""; });
    cursor.remove();
    state = "idle";
  }

  function fadeOut() {
    if (state === "idle") return;
    clearTimers();
    cursor.remove();
    layer.classList.add("out");
    layer.classList.remove("show");
    state = "idle";
    later(() => { layer.classList.remove("out"); els.forEach(el => { el.textContent = ""; }); }, 1100);
  }

  function holdThenFade() {
    state = "holding";
    cursor.remove();
    later(fadeOut, HOLD_MS);
  }

  function typeLine(i) {
    if (i >= LINES.length) { holdThenFade(); return; }
    const el = els[i], text = LINES[i];
    let k = 0;
    el.textContent = "";
    el.appendChild(cursor);
    (function tick() {
      if (k < text.length) {
        el.insertBefore(document.createTextNode(text[k++]), cursor);
        later(tick, TYPE_MS);
      } else {
        later(() => typeLine(i + 1), LINE_GAP);
      }
    })();
  }

  function start() {
    reset();
    layer.classList.add("show");
    if (isLite()) {
      fillAll();
      holdThenFade();
      return;
    }
    state = "typing";
    typeLine(0);
  }

  /* lên God → chờ cảnh biến hình xong rồi mới hiện */
  let wasGod = false;
  new MutationObserver(() => {
    const god = root.classList.contains("ssj-3");
    if (god === wasGod) return;
    wasGod = god;
    if (god) {
      reset();
      state = "wait";
      later(start, root.classList.contains("cine-on") && !isLite() ? CINE_DELAY : NO_CINE_DELAY);
    } else {
      reset();          // power down: tắt ngay
    }
  }).observe(root, { attributes: true, attributeFilter: ["class"] });

  /* bấm: lần 1 hiện hết chữ, lần 2 tắt */
  document.addEventListener("click", e => {
    if (state === "idle" || state === "wait") return;
    if (e.target.closest(".cine-corner, #music-btn, .now-playing")) return;
    if (state === "typing") {
      clearTimers();
      fillAll();
      holdThenFade();
    } else {
      fadeOut();
    }
  });
})();
