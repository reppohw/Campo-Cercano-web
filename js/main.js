// =========================================================
// CAMPO CERCANO — lógica del sitio
// No hace falta tocar este archivo para añadir proyectos:
// eso se hace en data/proyectos.js
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
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

  document.querySelectorAll(".main-nav a[data-tab]").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 860) mainNav.classList.remove("open");
    });
  });

  // ---------- Lightbox ----------
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption || "";
    lightboxCaption.textContent = caption || "";
    lightbox.classList.add("open");
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

  // ---------- Render de proyectos por categoría ----------
  function renderCategoria(categoria) {
    const grid = document.getElementById(`grid-${categoria}`);
    if (!grid) return;
    const items = (typeof PROYECTOS !== "undefined" && PROYECTOS[categoria]) || [];
    grid.innerHTML = "";
    if (items.length === 0) {
      grid.innerHTML = '<p class="grid-empty">Todavía no hay proyectos en esta categoría.</p>';
      return;
    }
    items.forEach((p) => {
      const el = document.createElement("div");
      el.className = "poster-item";
      el.innerHTML = `
        <img src="${p.imagen}" alt="${p.titulo || 'Proyecto'}" loading="lazy">
        ${p.titulo ? `<div class="poster-titulo">${p.titulo}</div>` : ""}
      `;
      el.addEventListener("click", () => openLightbox(p.imagen, p.titulo || ""));
      grid.appendChild(el);
    });
  }
  ["supervision", "dialogos", "efectos"].forEach(renderCategoria);

  // Los enlaces del menú desplegable llevan a la categoría y la expanden
  document.querySelectorAll('a[data-tab]').forEach((link) => {
    link.addEventListener("click", () => {
      const cat = link.dataset.tab;
      const section = document.querySelector(`.categoria[data-categoria="${cat}"]`);
      if (section) section.classList.add("expanded");
      const btn = document.querySelector(`.toggle-btn[data-target="${cat}"]`);
      if (btn) { btn.classList.add("active"); btn.textContent = "–"; }
    });
  });

  // ---------- Botón "+" para expandir/contraer una categoría ----------
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      const section = document.querySelector(`.categoria[data-categoria="${target}"]`);
      if (!section) return;
      const isExpanded = section.classList.toggle("expanded");
      btn.classList.toggle("active", isExpanded);
      btn.textContent = isExpanded ? "–" : "+";
    });
  });

  // ---------- Flechas de los carruseles (proyectos e instalaciones) ----------
  document.querySelectorAll(".carousel-arrow").forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const wrap = arrow.closest(".carousel-wrap");
      const track = wrap ? wrap.querySelector(".carousel") : null;
      if (!track) return;
      const amount = Math.min(track.clientWidth * 0.9, 700);
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
  INSTALACIONES.forEach((src, i) => {
    const el = document.createElement("div");
    el.className = "foto-item";
    el.innerHTML = `<img src="${src}" alt="Instalaciones Campo Cercano ${i + 1}" loading="lazy">`;
    el.addEventListener("click", () => openLightbox(src, "Instalaciones"));
    instalacionesGrid.appendChild(el);
  });
});
