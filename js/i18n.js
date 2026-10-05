// =========================================================
// CAMPO CERCANO — idiomas (ES / EN)
// El HTML está escrito en español. Aquí van las traducciones al
// inglés de cada texto marcado con data-i18n="clave" en index.html
// y los textos que genera main.js (diccionario DINAMICO).
//
// Para corregir una traducción: edita el texto de la clave
// correspondiente en EN_ESTATICO (o DINAMICO) y guarda.
// =========================================================
(function () {
  // ---- Textos del HTML (solo hace falta la versión en inglés;
  //      la versión en español se lee del propio HTML) ----
  var EN_ESTATICO = {
    "meta.title": "Campo Cercano | Sound post-production | Madrid",
    "meta.description": "Sound post-production studio of Maiki Calvo, Jorge Alarcón and Brendan Golden. Supervision, dialogue and effects editing for film and television in Madrid.",
    "seo.h1": "Campo Cercano — sound post-production studio in Madrid",
    "a11y.skip": "Skip to content",
    "nav.openMenu": "Open menu",
    "nav.projects": "Projects",
    "nav.supervision": "Supervising",
    "nav.dialogues": "Dialogue",
    "nav.effects": "Effects",
    "nav.facilities": "Studio",
    "nav.about": "About us",
    "nav.contact": "Contact",
    "intro":
      "CAMPO CERCANO is the sound studio of Maiki Calvo, Jorge Alarcón and Brendan " +
      "Golden, three freelancers who, after many years of working together on different projects, have " +
      "decided to join forces and establish themselves as independent post-production sound professionals. " +
      "CAMPO CERCANO is their way of growing and consolidating from their specialization in effects and " +
      "dialogue editing. Their studio in central Madrid has several editing rooms, an Atmos premix room " +
      "and ADR recording.",
    "projects.title": "Projects",
    "cat.supervision": "Supervising",
    "cat.dialogues": "Dialogue",
    "cat.effects": "Effects",
    "arrow.prev": "Previous",
    "arrow.next": "Next",
    "facilities.title": "Studio",
    "about.title": "About us",
    "bio.maiki":
      "Maiki Calvo, with more than fifteen years of experience in the industry, has supervised films " +
      "such as <em>Tiempo después</em>, <em>All Dirt Roads Taste of Salt</em> (nominated at the Sundance " +
      "Film Festival) or <em>Costa da morte</em> (awarded at the Locarno International Film Festival), as " +
      "well as the recent series <em>Poquita fe</em>. He alternates his career as a supervising sound " +
      "editor with effects editing for other studios, where his work on <em>El desconocido</em> (Goya " +
      "Award for Best Sound in 2015), <em>Justin and the Knights of Valour</em> and series such as " +
      "<em>La línea invisible</em> or <em>Cuatro estaciones en La Habana</em> stands out.",
    "bio.jorge":
      "Jorge Alarcón is a dialogue editor on leading series such as <em>Élite</em>, <em>Apagón</em> and " +
      "<em>Senna</em>. He has also worked on award-winning films such as <em>La sociedad de la nieve</em>, " +
      "<em>20.000 especies de abejas</em> and <em>La infiltrada</em>. He currently collaborates with " +
      "Joakim Sundström supervising the dialogue of projects including <em>This England</em>, <em>All of " +
      "Us Strangers</em> and <em>Greed</em>. Also worth mentioning is his work as supervising sound " +
      "editor on <em>Las abogadas</em> and <em>La mala familia</em>, as well as his work as a sound mixer " +
      "on <em>El año del descubrimiento</em>.",
    "bio.brendan":
      "Brendan Golden has worked as a sound designer and effects editor on films such as <em>La sociedad " +
      "de la nieve</em> (for which he won an MPSE Golden Reel Award), <em>Cerrar los ojos</em>, " +
      "<em>Apocalipsis Z</em> or <em>Bird Box Barcelona</em>, and on series such as <em>La Ruta</em>, " +
      "<em>Apagón</em>, <em>Senna</em>, <em>Marbella</em> or <em>Machos Alfa</em>. He has also worked as " +
      "a supervising sound editor on films such as <em>Mamántula</em> and <em>El color del cielo</em>, " +
      "both selected for the San Sebastián Film Festival. Internationally, his work on Bollywood films " +
      "such as <em>A Gentleman</em> and the acclaimed Indian series <em>The Family Man</em> stands out.",
    "contact.title": "Contact"
  };

  // ---- Textos que genera main.js (en los dos idiomas) ----
  var DINAMICO = {
    es: {
      "toggle.viewAll": "Ver todos",
      "toggle.viewLess": "Ver menos",
      "empty": "Todavía no hay proyectos en esta categoría.",
      "fac.photo": "Instalaciones Campo Cercano",
      "fac.caption": "Instalaciones",
      "lb.close": "Cerrar",
      "lb.prev": "Anterior",
      "lb.next": "Siguiente",
      "lb.label": "Visor de imágenes",
      "lb.imdbSearch": "Buscar en IMDb",
      "lb.imdbView": "Ver en IMDb"
    },
    en: {
      "toggle.viewAll": "View all",
      "toggle.viewLess": "View less",
      "empty": "There are no projects in this category yet.",
      "fac.photo": "Campo Cercano studio",
      "fac.caption": "Studio",
      "lb.close": "Close",
      "lb.prev": "Previous",
      "lb.next": "Next",
      "lb.label": "Image viewer",
      "lb.imdbSearch": "Search on IMDb",
      "lb.imdbView": "View on IMDb"
    }
  };

  var lang = "es";

  function detectar() {
    try {
      var q = new URLSearchParams(window.location.search).get("lang");
      if (q === "en" || q === "es") return q;
    } catch (e) {}
    try {
      var s = window.localStorage.getItem("cc-lang");
      if (s === "en" || s === "es") return s;
    } catch (e) {}
    var n = ((navigator.languages && navigator.languages[0]) || navigator.language || "es").toLowerCase();
    // Español y lenguas cooficiales -> español; el resto -> inglés
    return /^(es|ca|gl|eu|oc)/.test(n) ? "es" : "en";
  }

  function t(key) {
    var d = DINAMICO[lang] || DINAMICO.es;
    return d[key] !== undefined ? d[key] : (DINAMICO.es[key] || key);
  }

  function aplicar() {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!el.hasAttribute("data-es")) el.setAttribute("data-es", el.innerHTML);
      var key = el.getAttribute("data-i18n");
      if (lang === "en" && EN_ESTATICO[key] !== undefined) el.innerHTML = EN_ESTATICO[key];
      else el.innerHTML = el.getAttribute("data-es");
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      if (!el.hasAttribute("data-es-aria")) el.setAttribute("data-es-aria", el.getAttribute("aria-label") || "");
      var key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", lang === "en" && EN_ESTATICO[key] !== undefined ? EN_ESTATICO[key] : el.getAttribute("data-es-aria"));
    });

    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      if (!meta.hasAttribute("data-es")) meta.setAttribute("data-es", meta.getAttribute("content"));
      meta.setAttribute("content", lang === "en" ? EN_ESTATICO["meta.description"] : meta.getAttribute("data-es"));
    }
    if (!document.documentElement.hasAttribute("data-es-title")) document.documentElement.setAttribute("data-es-title", document.title);
    document.title = lang === "en" ? EN_ESTATICO["meta.title"] : document.documentElement.getAttribute("data-es-title");

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
  }

  function set(nuevo, guardar) {
    if (nuevo !== "es" && nuevo !== "en") return;
    lang = nuevo;
    if (guardar) { try { window.localStorage.setItem("cc-lang", nuevo); } catch (e) {} }
    aplicar();
    document.dispatchEvent(new CustomEvent("cc:lang", { detail: { lang: lang } }));
  }

  window.CC_I18N = { t: t, lang: function () { return lang; }, set: set };

  // Se ejecuta antes que main.js (se carga primero), así que main.js
  // ya encuentra el idioma elegido al construir los carruseles.
  document.addEventListener("DOMContentLoaded", function () {
    lang = detectar();
    aplicar();
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { set(b.getAttribute("data-lang"), true); });
    });
  });
})();
