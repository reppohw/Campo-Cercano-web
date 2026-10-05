// =========================================================
// CAMPO CERCANO — lógica del sitio
// No hace falta tocar este archivo para añadir proyectos:
// eso se hace en data/proyectos.js
// Las traducciones (ES/EN) están en js/i18n.js
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const I18N = window.CC_I18N || { t: (k) => k, lang: () => "es" };
  const t = (k) => I18N.t(k);

  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // ---------- Menú móvil ----------
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".has-dropdown > a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });

  // En móvil, al elegir una opción del menú (salvo abrir el desplegable) se cierra
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth > 860) return;
      if (link.matches(".has-dropdown > a")) return;
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // ---------- Visor (lightbox) con navegación ----------
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const lightboxImdb = document.getElementById("lightboxImdb");
  const lightboxCount = document.getElementById("lightboxCount");

  let lbItems = [];
  let lbIndex = 0;
  let lbReturnFocus = null;

  function imdbUrl(item) {
    // En data/proyectos.js se puede añadir  imdb: "tt1234567"  (o una URL completa)
    // a cualquier proyecto para que su visor muestre un botón a su ficha de IMDb.
    // Los proyectos sin ese dato no muestran ningún botón.
    return /^https?:\/\//.test(item.imdb) ? item.imdb : `https://www.imdb.com/title/${item.imdb}/`;
  }

  function renderLightbox() {
    const item = lbItems[lbIndex];
    if (!item) return;
    lightbox.setAttribute("aria-label", t("lb.label"));
    lightboxClose.setAttribute("aria-label", t("lb.close"));
    lightboxPrev.setAttribute("aria-label", t("lb.prev"));
    lightboxNext.setAttribute("aria-label", t("lb.next"));

    const caption = item.captionKey ? t(item.captionKey) : (item.caption || "");
    lightboxImg.src = item.src;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;

    if (item.imdbLink && item.imdb) {
      lightboxImdb.href = imdbUrl(item);
      lightboxImdb.textContent = t("lb.imdbView");
      lightboxImdb.hidden = false;
    } else {
      lightboxImdb.hidden = true;
    }

    const many = lbItems.length > 1;
    lightboxPrev.hidden = !many;
    lightboxNext.hidden = !many;
    lightboxCount.textContent = many ? `${lbIndex + 1} / ${lbItems.length}` : "";

    // Precarga las vecinas para que el paso sea instantáneo
    if (many) {
      [1, -1].forEach((d) => {
        const n = lbItems[(lbIndex + d + lbItems.length) % lbItems.length];
        if (n) new Image().src = n.src;
      });
    }
  }

  function openLightbox(items, index) {
    lbItems = items;
    lbIndex = index;
    lbReturnFocus = document.activeElement;
    renderLightbox();
    lightbox.classList.add("open");
    document.body.classList.add("no-scroll");
    lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox.classList.contains("open")) return;
    lightbox.classList.remove("open");
    document.body.classList.remove("no-scroll");
    lightboxImg.src = "";
    if (lbReturnFocus && typeof lbReturnFocus.focus === "function") lbReturnFocus.focus();
  }

  function stepLightbox(delta) {
    if (lbItems.length < 2) return;
    lbIndex = (lbIndex + delta + lbItems.length) % lbItems.length;
    renderLightbox();
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => stepLightbox(-1));
  lightboxNext.addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") stepLightbox(-1);
    else if (e.key === "ArrowRight") stepLightbox(1);
    else if (e.key === "Tab") {
      // El foco se queda dentro del visor mientras está abierto
      const focusables = [lightboxClose, lightboxPrev, lightboxImdb, lightboxNext].filter((el) => !el.hidden);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      else if (!focusables.includes(document.activeElement)) { e.preventDefault(); first.focus(); }
    }
  });

  // Deslizar con el dedo para pasar de foto
  let touchX = null;
  let touchY = null;
  lightbox.addEventListener("touchstart", (e) => {
    touchX = e.changedTouches[0].clientX;
    touchY = e.changedTouches[0].clientY;
  }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    const dy = e.changedTouches[0].clientY - touchY;
    touchX = touchY = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) stepLightbox(dx < 0 ? 1 : -1);
  }, { passive: true });

  // Hace que un elemento no-botón se pueda usar con teclado (Enter / Espacio)
  function makeButton(el, label, onActivate) {
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", label);
    el.addEventListener("click", onActivate);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onActivate(); }
    });
  }

  // ---------- Render de proyectos por categoría ----------
  function renderCategoria(categoria) {
    const grid = document.getElementById(`grid-${categoria}`);
    if (!grid) return;
    const items = (typeof PROYECTOS !== "undefined" && PROYECTOS[categoria]) || [];
    grid.innerHTML = "";
    if (items.length === 0) {
      grid.innerHTML = `<p class="grid-empty">${t("empty")}</p>`;
      return;
    }
    const lista = items.map((p) => ({ src: p.imagen, caption: p.titulo || "", imdb: p.imdb, imdbLink: true }));
    items.forEach((p, i) => {
      const el = document.createElement("div");
      el.className = "poster-item";
      el.innerHTML = `
        <img src="${p.imagen}" alt="" loading="lazy">
        ${p.titulo ? `<div class="poster-titulo">${p.titulo}</div>` : ""}
      `;
      makeButton(el, p.titulo || "Proyecto", () => openLightbox(lista, i));
      grid.appendChild(el);
    });
  }
  function renderProyectos() { ["supervision", "dialogos", "efectos"].forEach(renderCategoria); }
  renderProyectos();

  // ---------- Expandir / contraer una categoría ("+" / "–") ----------
  function setExpanded(cat, expanded) {
    const section = document.querySelector(`.categoria[data-categoria="${cat}"]`);
    if (section) section.classList.toggle("expanded", expanded);
    const btn = document.querySelector(`.toggle-btn[data-target="${cat}"]`);
    if (btn) {
      btn.classList.toggle("active", expanded);
      btn.textContent = expanded ? "–" : "+";
      btn.setAttribute("aria-expanded", String(expanded));
      btn.setAttribute("aria-label", t(expanded ? "toggle.viewLess" : "toggle.viewAll"));
    }
  }
  function syncToggles() {
    document.querySelectorAll(".toggle-btn").forEach((btn) => {
      const cat = btn.dataset.target;
      const section = document.querySelector(`.categoria[data-categoria="${cat}"]`);
      setExpanded(cat, !!(section && section.classList.contains("expanded")));
    });
  }
  syncToggles();

  // Los enlaces del menú desplegable llevan a la categoría y la expanden
  document.querySelectorAll("a[data-tab]").forEach((link) => {
    link.addEventListener("click", () => setExpanded(link.dataset.tab, true));
  });

  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = document.querySelector(`.categoria[data-categoria="${btn.dataset.target}"]`);
      if (!section) return;
      setExpanded(btn.dataset.target, !section.classList.contains("expanded"));
    });
  });

  // ---------- Flechas de los carruseles (proyectos e instalaciones) ----------
  document.querySelectorAll(".carousel-arrow").forEach((arrow) => {
    const direction = arrow.classList.contains("carousel-arrow-prev") ? -1 : 1;
    arrow.addEventListener("click", () => {
      const wrap = arrow.closest(".carousel-wrap");
      const track = wrap ? wrap.querySelector(".carousel") : null;
      if (!track) return;
      const amount = Math.min(track.clientWidth * 0.9, 700) * direction;
      track.scrollBy({ left: amount, behavior: "smooth" });
    });
  });

  // ---------- Instalaciones (fotos reales del estudio) ----------
  const INSTALACIONES = [
    "assets/img/instalaciones/instalacion-01.jpg",
    "assets/img/instalaciones/instalacion-02.jpg",
    "assets/img/instalaciones/instalacion-03.jpg",
    "assets/img/instalaciones/instalacion-04.jpg",
    "assets/img/instalaciones/instalacion-05.jpg",
    "assets/img/instalaciones/instalacion-06.jpg",
  ];
  const instalacionesGrid = document.getElementById("instalacionesGrid");
  function renderInstalaciones() {
    instalacionesGrid.innerHTML = "";
    const lista = INSTALACIONES.map((src) => ({ src, captionKey: "fac.caption" }));
    INSTALACIONES.forEach((src, i) => {
      const el = document.createElement("div");
      el.className = "foto-item";
      el.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
      makeButton(el, `${t("fac.photo")} ${i + 1}`, () => openLightbox(lista, i));
      instalacionesGrid.appendChild(el);
    });
  }
  renderInstalaciones();

  // ---------- Cambio de idioma: se vuelven a pintar los textos generados por JS ----------
  document.addEventListener("cc:lang", () => {
    // Los títulos de los proyectos no se traducen; solo cambian etiquetas y avisos.
    // (No se reconstruyen los carruseles para no perder la posición de scroll.)
    document.querySelectorAll(".grid-empty").forEach((p) => { p.textContent = t("empty"); });
    document.querySelectorAll("#instalacionesGrid .foto-item").forEach((el, i) => {
      el.setAttribute("aria-label", `${t("fac.photo")} ${i + 1}`);
    });
    syncToggles();
    if (lightbox.classList.contains("open")) {
      renderLightbox();
    }
  });
});
