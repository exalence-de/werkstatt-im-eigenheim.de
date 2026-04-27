/* werkstatt-im-eigenheim.de — Tool-Logik & UI-Verdrahtung
 * Phase 1: Skelett. Tool-Berechnungen kommen in Phase 3.
 * Bewusst Vanilla-JS, keine Build-Schritte.
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* Lead-Form Handler                                                   */
  /* ------------------------------------------------------------------ */
  // Alle Formulare mit data-lead-form werden abgefangen und zeigen
  // ein "Danke"-Modal. Ersetzt der User später durch echtes Endpoint
  // (GHL / Make.com), tauscht er nur das form-Tag aus.
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
      if (e.target === modal || e.target.matches("[data-modal-close]")) {
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
  /* Mobile-Nav-Toggle                                                   */
  /* ------------------------------------------------------------------ */
  function initMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-main-nav]");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ------------------------------------------------------------------ */
  /* PDF-Capture-Trigger                                                 */
  /* ------------------------------------------------------------------ */
  // Buttons mit data-pdf-trigger öffnen das Capture-Form-Modal.
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
      if (e.target === captureModal || e.target.matches("[data-modal-close]")) {
        closeModal(captureModal);
      }
    });
  }

  /* ================================================================== */
  /* Tool 1: Strombedarfs-Rechner                                        */
  /* Phase 3 implementiert — Skelett für Phase 1                         */
  /* ================================================================== */
  function initStrombedarfsRechner(root) {
    if (!root) return;
    // TODO Phase 3:
    // - Geräte-Watt aus Checkboxen + Stückzahl summieren
    // - 230V/400V-Strom berechnen
    // - Stromkreise (16A je Kreis) ceil(summeW/3680)
    // - Drehstrom-Empfehlung wenn summeW>7000 oder Einzelgerät>3500W
    // - Kabelquerschnitt + FI-Empfehlung
    // - YMYL-Hinweis (1×) "Endinstallation durch Elektriker"
  }

  /* ================================================================== */
  /* Tool 2: Werkbank-Konfigurator                                       */
  /* ================================================================== */
  function initWerkbankKonfigurator(root) {
    if (!root) return;
    // TODO Phase 3:
    // - Materialliste aus Länge × Tiefe × Stärke
    // - Untergestell-Vierkantholz
    // - Schubladen-Beschläge
    // - Kosten-Spannweite Min/Max je Material
    // - Bauzeit aus Konfiguration
    // - Werkzeugliste statisch
    // - Höhe-Empfehlung aus Körpergröße
  }

  /* ================================================================== */
  /* Tool 3: Werkstattbeleuchtung-Rechner                                */
  /* ================================================================== */
  function initWerkstattbeleuchtungRechner(root) {
    if (!root) return;
    // TODO Phase 3:
    // - lumenGesamt = m² × Lux × Faktor(Deckenhöhe)
    // - anzahlPanels = ceil(lumenGesamt / 5000)
    // - Farbtemperatur + CRI nach Tätigkeit
    // - Stromkosten/Jahr (40W × 4h × 365 × Anzahl × 0,35€/kWh)
  }

  /* ------------------------------------------------------------------ */
  /* Bootstrap                                                           */
  /* ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    initLeadForms();
    initModal();
    initMobileNav();
    initPdfTriggers();

    initStrombedarfsRechner(document.querySelector('[data-tool="strombedarf"]'));
    initWerkbankKonfigurator(document.querySelector('[data-tool="werkbank"]'));
    initWerkstattbeleuchtungRechner(document.querySelector('[data-tool="beleuchtung"]'));
  });
})();
