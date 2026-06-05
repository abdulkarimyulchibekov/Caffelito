let translations;
console.log(45);

fetch("./js/translations.json")
  .then(res => res.json())
  .then(data => {
    translations = data;
    setLang("rus"); // default
  });

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key];
  });
}