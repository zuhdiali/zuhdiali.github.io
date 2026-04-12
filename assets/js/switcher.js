// Theme Switcher Script
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeBtn = document.getElementById("themeBtn");
  themeBtn.textContent = savedTheme === "light" ? "🌙" : "☀️";
});

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);

  const themeBtn = document.getElementById("themeBtn");
  themeBtn.textContent = newTheme === "light" ? "🌙" : "☀️";

  localStorage.setItem("theme", newTheme);
}

// Language Switcher Script
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "us"; // default
  setLanguage(savedLang);

  // Sesuaikan tampilan tombol
  const btn = document.getElementById("langBtn");
  btn.textContent = savedLang === "id" ? "Inggris" : "Indonesian";
});

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key] || element.textContent;
    // if (translations[lang] && translations[lang][key]) {
    //   element.textContent = translations[lang][key];
    // }
  });

  localStorage.setItem("lang", lang);
}

function toggleLanguage() {
  const currentLang = localStorage.getItem("lang") || "id";
  const newLang = currentLang === "id" ? "en" : "id";

  setLanguage(newLang);

  // Update tampilan tombol
  const btn = document.getElementById("langBtn");
  btn.textContent = newLang === "id" ? "Inggris" : "Indonesian";
}
