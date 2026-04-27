/* werkstatt-im-eigenheim.de — UI- und Tool-Logik
 * Phase 1.1: Hamburger, FAQ-Akkordeon, Smooth-Scroll, Lead-Form-Handler, Modal.
 * Tool-Berechnungen kommen in Phase 3.
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* Mobile-Nav Hamburger                                               */
  /* ------------------------------------------------------------------ */
  function initMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-mobile-menu]");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* FAQ-Akkordeon                                                       */
  /* ------------------------------------------------------------------ */
  function initFaq() {
    var items = document.querySelectorAll("[data-faq]");
    items.forEach(function (item) {
      var btn = item.querySelector("[data-faq-toggle]");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var wasOpen = item.classList.contains("is-open");
        items.forEach(function (i) {
          i.classList.remove("is-open");
        });
        if (!wasOpen) item.classList.add("is-open");
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Smooth-Scroll für Anchor-Links                                      */
  /* ------------------------------------------------------------------ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      var href = link.getAttribute("href");
      if (href.length < 2) return;
      link.addEventListener("click", function (e) {
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        var navOffset = 90;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Lead-Form-Handler (Platzhalter, zeigt Danke-Modal)                  */
  /* ------------------------------------------------------------------ */
  function initLeadForms() {
    var forms = document.querySelectorAll("form[data-lead-form], form[data-pdf-capture]");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        showThankYouModal(form.getAttribute("data-success-message"));
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Modal                                                               */
  /* ------------------------------------------------------------------ */
  function showThankYouModal(customMessage) {
    var modal = document.querySelector("[data-thankyou-modal]");
    if (!modal) return;
    if (customMessage) {
      var body = modal.querySelector("[data-modal-body]");
      if (body) body.textContent = customMessage;
    }
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function initModal() {
    var modal = document.querySelector("[data-thankyou-modal]");
    if (!modal) return;
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("[data-modal-close]")) {
        closeModal(modal);
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal(modal);
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* PDF-Capture-Trigger                                                 */
  /* ------------------------------------------------------------------ */
  function initPdfTriggers() {
    var triggers = document.querySelectorAll("[data-pdf-trigger]");
    var captureModal = document.querySelector("[data-pdf-modal]");
    if (!triggers.length || !captureModal) return;

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        captureModal.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });

    captureModal.addEventListener("click", function (e) {
      if (e.target === captureModal || e.target.closest("[data-modal-close]")) {
        closeModal(captureModal);
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Footer-Jahr automatisch                                             */
  /* ------------------------------------------------------------------ */
  function initYear() {
    var nodes = document.querySelectorAll("[data-year]");
    var year = new Date().getFullYear();
    nodes.forEach(function (n) { n.textContent = year; });
  }

  /* ================================================================== */
  /* Tool 1: Strombedarfs-Rechner                                        */
  /* ================================================================== */
  function initStrombedarfsRechner(root) {
    if (!root) return;
    // TODO Phase 3:
    // - Geräte-Watt aus Checkboxen + Stückzahl summieren
    // - 230V/400V-Strom berechnen
    // - Stromkreise (16A je Kreis)
    // - Drehstrom-Empfehlung
    // - Kabelquerschnitt + FI-Empfehlung
    // - YMYL-Hinweis (1×) "Endinstallation durch Elektriker"
  }

  /* ================================================================== */
  /* Tool 2: Werkbank-Konfigurator                                       */
  /* ================================================================== */
  function initWerkbankKonfigurator(root) {
    if (!root) return;
    // TODO Phase 3
  }

  /* ================================================================== */
  /* Tool 3: Werkstattbeleuchtung-Rechner                                */
  /* ================================================================== */
  function initWerkstattbeleuchtungRechner(root) {
    if (!root) return;
    // TODO Phase 3
  }

  /* ------------------------------------------------------------------ */
  /* Bootstrap                                                           */
  /* ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initFaq();
    initSmoothScroll();
    initLeadForms();
    initModal();
    initPdfTriggers();
    initYear();

    initStrombedarfsRechner(document.querySelector('[data-tool="strombedarf"]'));
    initWerkbankKonfigurator(document.querySelector('[data-tool="werkbank"]'));
    initWerkstattbeleuchtungRechner(document.querySelector('[data-tool="beleuchtung"]'));
  });
})();
