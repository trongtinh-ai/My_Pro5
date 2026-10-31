/* ============================================================
   terminal.js — Interactive fake terminal for #terminal section
   All output via textContent — never innerHTML on user input.
   ============================================================ */
(function initTerminal() {
  /* ---- Config ---- */
  const T = window.TERMINAL || {};
  const PROMPT    = T.prompt    || "tinh@profile:~$";
  const WELCOME   = T.welcome   || ["Welcome. Type help."];
  const CMDS_DATA = T.commands  || {};
  const ACH_DATA  = T.achievements || {};
  const CHIP_CMDS = ["help", "about", "game", "pomodoro", "contact"];

  const isLite = () =>
    !!(window.FX && window.FX.lite) ||
    matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Achievement state ---- */
  const ach = { first: false, sudo: false, konami: false, coffee: false, guesser: false };
  let achCount = 0;

  /* ---- Pomodoro state ---- */
  let pomTimer   = null;
  let pomEnd     = 0;
  const POM_MS   = 25 * 60 * 1000;

  /* ---- Guess game state ---- */
  let guessActive  = false;
  let guessTarget  = 0;
  let guessLeft    = 0;

  /* ---- History ---- */
  const history    = [];
  let   histIdx    = -1;

  /* ---- DOM refs (set after render) ---- */
  let outputEl = null;
  let inputEl  = null;

  /* ---- Render shell into #terminal ---- */
  function render() {
    const sec = document.getElementById("terminal");
    if (!sec) return;

    /* Header */
    const header = document.createElement("div");
    header.className = "sec-header-editorial";
    const h2 = document.createElement("h2");
    h2.className = "sec-main-title";
    h2.textContent = "Terminal";
    header.appendChild(h2);
    sec.appendChild(header);

    /* Window */
    const win = document.createElement("div");
    win.className = "term-window";

    /* Title bar */
    const bar = document.createElement("div");
    bar.className = "term-titlebar";
    const dots = document.createElement("div");
    dots.className = "term-dots";
    ["term-dot-red","term-dot-yellow","term-dot-green"].forEach(c => {
      const d = document.createElement("span");
      d.className = "term-dot " + c;
      dots.appendChild(d);
    });
    const lbl = document.createElement("span");
    lbl.className = "term-title-label";
    lbl.textContent = "terminal";
    bar.appendChild(dots);
    bar.appendChild(lbl);
    win.appendChild(bar);

    /* Output */
    outputEl = document.createElement("div");
    outputEl.className = "term-output";
    outputEl.setAttribute("role", "log");
    outputEl.setAttribute("aria-live", "polite");
    outputEl.setAttribute("aria-label", "Terminal output");
    win.appendChild(outputEl);

    /* Input row */
    const inputRow = document.createElement("div");
    inputRow.className = "term-input-row";
    const promptLbl = document.createElement("span");
    promptLbl.className = "term-prompt-label";
    promptLbl.setAttribute("aria-hidden", "true");
    promptLbl.textContent = PROMPT;
    inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.className = "term-input";
    inputEl.setAttribute("aria-label", "Terminal input — type a command");
    inputEl.setAttribute("autocomplete", "off");
    inputEl.setAttribute("autocorrect", "off");
    inputEl.setAttribute("autocapitalize", "off");
    inputEl.setAttribute("spellcheck", "false");
    inputRow.appendChild(promptLbl);
    inputRow.appendChild(inputEl);
    win.appendChild(inputRow);

    /* Mobile chips */
    const chipRow = document.createElement("div");
    chipRow.className = "term-chip-row";
    CHIP_CMDS.forEach(cmd => {
      const btn = document.createElement("button");
      btn.className = "term-chip";
      btn.textContent = cmd;
      btn.setAttribute("aria-label", "Run command: " + cmd);
      btn.addEventListener("click", () => {
        runCommand(cmd);
        inputEl.focus();
      });
      chipRow.appendChild(btn);
    });
    win.appendChild(chipRow);

    sec.appendChild(win);

    /* Tap window → focus input (mobile UX) */
    win.addEventListener("click", e => {
      if (e.target !== inputEl) inputEl.focus();
    });

    attachInputHandlers();
    printWelcome();
  }

  /* ---- Print a line to output ---- */
  function printLine(text, cls) {
    if (!outputEl) return;
    const line = document.createElement("div");
    line.className = "term-line" + (cls ? " " + cls : "");
    line.textContent = text;
    outputEl.appendChild(line);
    outputEl.scrollTop = outputEl.scrollHeight;
  }

  function printBlank() { printLine(""); }

  /* ---- Welcome typing effect ---- */
  function printWelcome() {
    if (isLite()) {
      WELCOME.forEach(l => printLine(l, "term-line-muted"));
      printBlank();
      return;
    }
    let lineIdx = 0;
    let charIdx = 0;

    /* Append a temp cursor line */
    const cursorLine = document.createElement("div");
    cursorLine.className = "term-line term-line-muted";
    const cursorSpan = document.createElement("span");
    cursorSpan.className = "term-cursor";
    cursorLine.appendChild(cursorSpan);
    outputEl.appendChild(cursorLine);

    const interval = setInterval(() => {
      if (lineIdx >= WELCOME.length) {
        clearInterval(interval);
        cursorLine.remove();
        printBlank();
        return;
      }
      const src = WELCOME[lineIdx];
      if (charIdx === 0) {
        cursorLine.textContent = "";
        cursorLine.appendChild(cursorSpan);
      }
      if (charIdx < src.length) {
        cursorLine.insertBefore(document.createTextNode(src[charIdx]), cursorSpan);
        charIdx++;
      } else {
        /* Line done — commit it */
        const done = document.createElement("div");
        done.className = "term-line term-line-muted";
        done.textContent = src;
        outputEl.insertBefore(done, cursorLine);
        lineIdx++;
        charIdx = 0;
      }
      outputEl.scrollTop = outputEl.scrollHeight;
    }, 28);
  }

  /* ---- Echo command then dispatch ---- */
  function runCommand(raw) {
    const trimmed = raw.trim();
    if (!trimmed) return;

    /* Push history */
    if (history[history.length - 1] !== trimmed) history.push(trimmed);
    histIdx = history.length;

    /* Echo */
    printLine(PROMPT + " " + trimmed, "term-line-cmd");

    /* First-command achievement */
    unlockAch("first");

    dispatch(trimmed);
    printBlank();
  }

  /* ---- Command dispatcher ---- */
  function dispatch(raw) {
    const parts = raw.split(/\s+/);
    const cmd   = parts[0].toLowerCase();
    const arg   = parts[1] ? parts[1].toLowerCase() : "";

    if (guessActive && cmd !== "guess") {
      /* In guess mode, all input is treated as a guess number */
      handleGuessInput(raw);
      return;
    }

    switch (cmd) {
      case "help":         cmdHelp();           break;
      case "about":        cmdLines("about");   break;
      case "whoami":       cmdLines("whoami");  break;
      case "game":         cmdLines("game");    break;
      case "quote":        cmdLines("quote");   break;
      case "contact":      cmdContact();        break;
      case "pomodoro":     cmdPomodoro(arg);    break;
      case "coffee":       cmdCoffee();         break;
      case "guess":        cmdGuess();          break;
      case "achievements": cmdAchievements();   break;
      case "clear":        cmdClear();          break;
      case "sudo":         cmdSudo();           break;
      default:
        printLine("command not found: " + cmd + "  —  type 'help'", "term-line-err");
    }
  }

  /* ---- Individual commands ---- */
  function cmdHelp() {
    const lines = CMDS_DATA.help;
    if (Array.isArray(lines)) lines.forEach(l => printLine(l));
    else printLine("help: data not loaded");
  }

  function cmdLines(key) {
    const lines = CMDS_DATA[key];
    if (Array.isArray(lines)) lines.forEach(l => printLine(l));
    else printLine(key + ": data not loaded");
  }

  function cmdContact() {
    const info = (window.PROFILE && window.PROFILE.contactInfo) || {};
    if (info.email)   printLine("Email:   " + info.email);
    if (info.discord) printLine("Discord: " + info.discord);
    if (!info.email && !info.discord) printLine("Contact info not available.");
  }

  function cmdPomodoro(arg) {
    if (arg === "start" || arg === "") {
      if (pomTimer) {
        printLine("Pomodoro already running. Use: pomodoro status", "term-line-muted");
        return;
      }
      pomEnd = Date.now() + POM_MS;
      pomTimer = setInterval(() => {
        if (Date.now() >= pomEnd) {
          clearInterval(pomTimer);
          pomTimer = null;
          printLine("🍅 Pomodoro done! Take a 5-minute break.", "term-line-ok");
          printBlank();
        }
      }, 1000);
      printLine("🍅 Pomodoro started — 25 minutes. Focus!", "term-line-ok");
    } else if (arg === "stop") {
      if (!pomTimer) { printLine("No pomodoro running.", "term-line-muted"); return; }
      clearInterval(pomTimer);
      pomTimer = null;
      pomEnd   = 0;
      printLine("Pomodoro stopped.", "term-line-muted");
    } else if (arg === "status") {
      if (!pomTimer) { printLine("No pomodoro running.", "term-line-muted"); return; }
      const left = Math.max(0, pomEnd - Date.now());
      const m = Math.floor(left / 60000);
      const s = Math.floor((left % 60000) / 1000);
      printLine("Time left: " + m + "m " + s + "s", "term-line-ok");
    } else {
      printLine("Usage: pomodoro [start|stop|status]", "term-line-muted");
    }
  }

  function cmdCoffee() {
    const lines = CMDS_DATA.coffee;
    if (Array.isArray(lines)) lines.forEach(l => printLine(l));
    unlockAch("coffee");
  }

  function cmdGuess() {
    if (guessActive) {
      printLine("Game already in progress! Enter a number 1-20.", "term-line-muted");
      return;
    }
    guessTarget = Math.floor(Math.random() * 20) + 1;
    guessLeft   = 5;
    guessActive = true;
    printLine("Guess a number between 1 and 20. You have 5 tries.", "term-line-ok");
    printLine("Type a number and press Enter:", "term-line-muted");
  }

  function handleGuessInput(raw) {
    const n = parseInt(raw, 10);
    if (isNaN(n) || n < 1 || n > 20) {
      printLine("Please enter a number between 1 and 20.", "term-line-err");
      return;
    }
    guessLeft--;
    if (n === guessTarget) {
      printLine("Correct! The number was " + guessTarget + ". Well done!", "term-line-ok");
      guessActive = false;
      unlockAch("guesser");
    } else if (guessLeft === 0) {
      printLine("Out of tries. The number was " + guessTarget + ". Better luck next time!", "term-line-err");
      guessActive = false;
    } else {
      const hint = n < guessTarget ? "Too low." : "Too high.";
      printLine(hint + " " + guessLeft + " " + (guessLeft === 1 ? "try" : "tries") + " left.", "term-line-muted");
    }
  }

  function cmdAchievements() {
    const total = Object.keys(ACH_DATA).length || 5;
    printLine("Achievements (" + achCount + "/" + total + "):");
    Object.entries(ACH_DATA).forEach(([key, a]) => {
      const done = ach[key] ? "✓" : "○";
      printLine("  " + done + " " + a.name + " — " + a.desc, ach[key] ? "term-line-ok" : "term-line-muted");
    });
  }

  function cmdClear() {
    if (outputEl) outputEl.innerHTML = "";
  }

  function cmdSudo() {
    printLine("Nice try. Permission denied.", "term-line-err");
    unlockAch("sudo");
  }

  /* ---- Achievements ---- */
  function unlockAch(key) {
    if (ach[key]) return;
    ach[key] = true;
    achCount++;
    const total = Object.keys(ACH_DATA).length || 5;
    const info  = ACH_DATA[key] || { name: key, desc: "" };
    showToast("ACHIEVEMENT UNLOCKED: " + info.name, achCount + "/" + total);
  }

  function showToast(title, count) {
    const existing = document.querySelector(".term-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "term-toast";

    const t1 = document.createElement("div");
    t1.className = "term-toast-title";
    t1.textContent = "Achievement Unlocked";

    const t2 = document.createElement("div");
    t2.className = "term-toast-name";
    t2.textContent = title.replace("ACHIEVEMENT UNLOCKED: ", "");

    const t3 = document.createElement("div");
    t3.className = "term-toast-count";
    t3.textContent = count + " achievements unlocked";

    toast.appendChild(t1);
    toast.appendChild(t2);
    toast.appendChild(t3);
    document.body.appendChild(toast);

    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3000);
  }

  /* ---- Input handlers ---- */
  function attachInputHandlers() {
    if (!inputEl) return;

    inputEl.addEventListener("keydown", e => {
      /* Prevent site shortcuts from firing */
      e.stopPropagation();

      if (e.key === "Enter") {
        const val = inputEl.value;
        inputEl.value = "";
        histIdx = history.length;
        runCommand(val);

      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (histIdx > 0) {
          histIdx--;
          inputEl.value = history[histIdx];
          setTimeout(() => inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length), 0);
        }

      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (histIdx < history.length - 1) {
          histIdx++;
          inputEl.value = history[histIdx];
        } else {
          histIdx = history.length;
          inputEl.value = "";
        }

      } else if (e.key === "Tab") {
        e.preventDefault();
        const val = inputEl.value.trim().toLowerCase();
        if (!val) return;
        const cmds = ["help","about","whoami","game","quote","contact","pomodoro","coffee","guess","achievements","clear","sudo"];
        const matches = cmds.filter(c => c.startsWith(val));
        if (matches.length === 1) {
          inputEl.value = matches[0];
        } else if (matches.length > 1) {
          printLine(PROMPT + " " + val, "term-line-prompt");
          printLine(matches.join("   "), "term-line-muted");
          printBlank();
        }
      }

      /* Track Konami code */
      trackKonami(e.key);
    });

    /* keyup/keypress also stop propagation */
    inputEl.addEventListener("keyup",    e => e.stopPropagation());
    inputEl.addEventListener("keypress", e => e.stopPropagation());
  }

  /* ---- Konami code detector ---- */
  const KONAMI = [
    "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
    "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"
  ];
  let konamiIdx = 0;

  function trackKonami(key) {
    if (key === KONAMI[konamiIdx]) {
      konamiIdx++;
      if (konamiIdx === KONAMI.length) {
        konamiIdx = 0;
        unlockAch("konami");
        printLine("↑↑↓↓←→←→BA — Konami code accepted. +30 lives.", "term-line-ok");
        printBlank();
      }
    } else {
      konamiIdx = (key === KONAMI[0]) ? 1 : 0;
    }
  }

  /* ---- Boot ---- */
  render();
})();
