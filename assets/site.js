(() => {
  const supportedLanguages = ["zh-Hans", "en"];
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  const browserLanguage = navigator.language.toLowerCase();
  const preferred = browserLanguage.startsWith("zh") ? "zh-Hans" : "en";
  const language = supportedLanguages.includes(requested) ? requested : preferred;

  document.documentElement.lang = language;
  document.body.dataset.language = language;

  document.querySelectorAll("[data-lang-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.langPanel !== language;
  });

  document.querySelectorAll("[data-language-link]").forEach((link) => {
    const next = new URL(link.href, window.location.href);
    next.searchParams.set("lang", link.dataset.languageLink);
    link.href = next.toString();
    link.setAttribute("aria-current", link.dataset.languageLink === language ? "page" : "false");
  });

  document.querySelectorAll("[data-current-language]").forEach((label) => {
    label.textContent = language === "zh-Hans" ? "简体中文" : "English";
  });
})();
