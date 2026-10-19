// Theme toggle + reading progress bar + active side-nav highlight.
// No frameworks, no build step — plain static site.

const THEME_KEY = "dep-theme";

function initTheme() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") {
    document.documentElement.setAttribute("data-theme", stored);
  }
  updateIcon();
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const effective = current || (prefersDark ? "dark" : "light");
    const next = effective === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    updateIcon();
  });
}

function updateIcon() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const current = document.documentElement.getAttribute("data-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const effective = current || (prefersDark ? "dark" : "light");
  btn.textContent = effective === "dark" ? "☀️" : "🌙";
}

function initProgressBar() {
  const fill = document.getElementById("progressFill");
  if (!fill) return;
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    fill.style.width = Math.min(100, Math.max(0, pct)) + "%";
  };
  document.addEventListener("scroll", update, { passive: true });
  update();
}

function initActiveSideNav() {
  const path = window.location.pathname.split("/").pop();
  document.querySelectorAll(".side-nav a").forEach(a => {
    const href = a.getAttribute("href").split("/").pop();
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initProgressBar();
  initActiveSideNav();
});
