let translations;
console.log(45);

fetch("./js/translations.json")
.then(res => res.json())
.then(data => {
  translations = data;
  setLanguage("rus"); // default
});

const buttons = document.querySelectorAll(".lang-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    
    buttons.forEach(btn => {
      btn.classList.remove("active");
    });
    
    button.classList.add("active");
    
    const lang = button.dataset.lang;
    
    // Your existing translation logic
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  console.log("Selected language:", lang);
  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key];
  });
  // Put your JSON translation code here
}