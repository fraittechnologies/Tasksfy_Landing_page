// Toggle Panel Visibility
const toggleBtn = document.getElementById("accessibility-toggle");
const panel = document.getElementById("accessibility-panel");

toggleBtn.addEventListener("click", () => {
  panel.classList.toggle("hidden");
});

// Font Size Controls
const fontSizeBtns = document.querySelectorAll('[data-size]');
fontSizeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.remove("font-small", "font-large");
    if (btn.dataset.size !== "normal") {
      document.body.classList.add(`font-${btn.dataset.size}`);
    }
    setActiveButton(fontSizeBtns, btn);
  });
});

// Font Family Controls
const fontFamilyBtns = document.querySelectorAll('[data-font]');
fontFamilyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.remove("font-serif", "font-monospace");
    if (btn.dataset.font !== "sans-serif") {
      document.body.classList.add(`font-${btn.dataset.font}`);
    }
    setActiveButton(fontFamilyBtns, btn);
  });
});

// Color Theme Controls
const themeBtns = document.querySelectorAll('[data-theme]');
themeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.remove("theme-dark", "theme-high-contrast");
    if (btn.dataset.theme !== "light") {
      document.body.classList.add(`theme-${btn.dataset.theme}`);
    }
    setActiveButton(themeBtns, btn);
  });
});

// Helper: Set Active Button State
function setActiveButton(buttons, activeBtn) {
  buttons.forEach(btn => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}



