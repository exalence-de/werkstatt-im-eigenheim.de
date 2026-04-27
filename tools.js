/* werkstatt-im-eigenheim.de — UI- und Tool-Logik
 * Phase 3: 3 Tools mit echter Berechnung, Live-Update, PDF-Capture-Modal.
 * Vanilla-JS, kein Build.
 */
(function () {
  "use strict";

  /* ================================================================== */
  /* Mobile-Nav Hamburger                                                */
  /* ================================================================== */
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

  /* ================================================================== */
  /* FAQ-Akkordeon                                                       */
  /* ================================================================== */
  function initFaq() {
    var items = document.querySelectorAll("[data-faq]");
    items.forEach(function (item) {
      var btn = item.querySelector("[data-faq-toggle]");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var wasOpen = item.classList.contains("is-open");
        items.forEach(function (i) { i.classList.remove("is-open"); });
        if (!wasOpen) item.classList.add("is-open");
      });
    });
  }

  /* ================================================================== */
  /* Smooth-Scroll                                                       */
  /* ================================================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      var href = link.getAttribute("href");
      if (href.length < 2) return;
      link.addEventListener("click", function (e) {
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });
  }

  /* ================================================================== */
  /* Lead-Form-Handler & Modal                                           */
  /* ================================================================== */
  function initLeadForms() {
    var forms = document.querySelectorAll("form[data-lead-form], form[data-pdf-capture]");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Schließe ggf. PDF-Modal vor Danke-Modal
        var pdfModal = document.querySelector("[data-pdf-modal]");
        if (pdfModal && pdfModal.classList.contains("is-open")) {
          closeModal(pdfModal);
        }
        showThankYouModal(form.getAttribute("data-success-message"));
      });
    });
  }

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
    if (!document.querySelector(".modal.is-open")) {
      document.body.style.overflow = "";
    }
  }

  function initModal() {
    document.querySelectorAll(".modal").forEach(function (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal || e.target.closest("[data-modal-close]")) {
          closeModal(modal);
        }
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal.is-open").forEach(closeModal);
      }
    });
  }

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
  }

  /* ================================================================== */
  /* Footer-Jahr                                                         */
  /* ================================================================== */
  function initYear() {
    var nodes = document.querySelectorAll("[data-year]");
    var year = new Date().getFullYear();
    nodes.forEach(function (n) { n.textContent = year; });
  }

  /* ================================================================== */
  /* Helper: Geräte-Row Toggle (Tool 1)                                  */
  /* ================================================================== */
  function bindCheckboxRows(root) {
    root.querySelectorAll(".geraete-row").forEach(function (row) {
      var cb = row.querySelector("input[type=checkbox]");
      var qty = row.querySelector(".geraete-row-qty");
      function update() {
        row.classList.toggle("is-checked", cb.checked);
        if (qty) qty.disabled = !cb.checked;
      }
      // Klick auf Row toggelt Checkbox (außer auf das Number-Input)
      row.addEventListener("click", function (e) {
        if (e.target.matches(".geraete-row-qty")) return;
        if (e.target !== cb) {
          cb.checked = !cb.checked;
          cb.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });
      cb.addEventListener("change", update);
      update();
    });
  }

  /* ================================================================== */
  /* Helper: Radio-Pill                                                  */
  /* ================================================================== */
  function bindRadioPills(root) {
    root.querySelectorAll(".radio-pill-group").forEach(function (group) {
      var pills = group.querySelectorAll(".radio-pill");
      function syncState() {
        pills.forEach(function (p) {
          var input = p.querySelector("input");
          p.classList.toggle("is-checked", !!(input && input.checked));
        });
      }
      pills.forEach(function (pill) {
        var input = pill.querySelector("input");
        pill.addEventListener("click", function () {
          if (!input) return;
          input.checked = true;
          input.dispatchEvent(new Event("change", { bubbles: true }));
        });
        if (input) {
          input.addEventListener("change", syncState);
        }
      });
      syncState();
    });
  }

  /* ================================================================== */
  /* Helper: Number-Format                                               */
  /* ================================================================== */
  function fmtInt(n) {
    return new Intl.NumberFormat("de-DE").format(Math.round(n));
  }
  function fmtRange(min, max) {
    return fmtInt(min) + "–" + fmtInt(max);
  }

  /* ================================================================== */
  /* Tool 1: Strombedarfs-Rechner                                        */
  /* ================================================================== */
  function initStrombedarfsRechner(root) {
    if (!root) return;
    bindCheckboxRows(root);

    var resultsEl = root.querySelector("[data-tool-results]");
    if (!resultsEl) return;

    function compute() {
      var rows = root.querySelectorAll(".geraete-row");
      var summeW = 0;
      var maxEinzelW = 0;
      var ausgewaehlt = [];
      rows.forEach(function (row) {
        var cb = row.querySelector("input[type=checkbox]");
        if (!cb || !cb.checked) return;
        var watt = parseInt(cb.getAttribute("data-watt"), 10) || 0;
        var name = cb.getAttribute("data-name") || "Gerät";
        var qtyEl = row.querySelector(".geraete-row-qty");
        var qty = qtyEl ? Math.max(1, parseInt(qtyEl.value, 10) || 1) : 1;
        summeW += watt * qty;
        if (watt > maxEinzelW) maxEinzelW = watt;
        ausgewaehlt.push({ name: name, watt: watt, qty: qty });
      });

      if (summeW === 0) {
        resultsEl.innerHTML =
          '<div class="tool-results-header"><span class="tool-results-title">Ergebnis</span></div>' +
          '<div class="tool-results-empty">Häk an, was bei dir reinkommt — die Werte erscheinen sofort.</div>';
        return;
      }

      var SQRT3 = Math.sqrt(3);
      var stromA_230 = summeW / 230;
      var stromA_400 = summeW / (400 * SQRT3);
      var stromkreise = Math.ceil(summeW / (16 * 230));
      var drehstrom = summeW > 7000 || maxEinzelW > 3500;
      var maxA = drehstrom ? stromA_400 : stromA_230;
      var kabel;
      if (maxA <= 16) kabel = "2,5 mm²";
      else if (maxA <= 32) kabel = "4 mm²";
      else if (maxA <= 50) kabel = "6 mm²";
      else kabel = "10 mm²";

      var anschluss;
      if (drehstrom) {
        if (maxA <= 16) anschluss = "16 A CEE rot (5-polig)";
        else if (maxA <= 32) anschluss = "32 A CEE rot (5-polig)";
        else anschluss = "63 A CEE rot — sehr großer Bedarf";
      } else {
        anschluss = "Hausnetz 230 V mit eigenen Stromkreisen";
      }

      var html = "";
      html += '<div class="tool-results-header"><span class="tool-results-title">Dein Strombedarf</span><span style="font-size:.78rem;color:rgba(255,255,255,.55)">' + ausgewaehlt.length + ' Gerät(e) ausgewählt</span></div>';

      html += '<div class="tool-results-grid">';
      html += '<div class="tool-result-card"><div class="tool-result-label">Maximale Last gleichzeitig</div><div class="tool-result-value">' + fmtInt(summeW) + ' W</div><div class="tool-result-detail">' + Math.round(summeW / 100) / 10 + ' kW Gesamtlast bei voller Auslastung</div></div>';
      html += '<div class="tool-result-card"><div class="tool-result-label">Strom bei 230 V (einphasig)</div><div class="tool-result-value">' + Math.round(stromA_230) + ' A</div><div class="tool-result-detail">verteilt auf ' + stromkreise + ' Stromkreis(e) à 16 A</div></div>';
      if (drehstrom) {
        html += '<div class="tool-result-card"><div class="tool-result-label">Strom bei 400 V (Drehstrom, pro Phase)</div><div class="tool-result-value">' + Math.round(stromA_400) + ' A</div><div class="tool-result-detail">symmetrische Last über 3 Phasen</div></div>';
      }
      html += '<div class="tool-result-card"><div class="tool-result-label">Kabelquerschnitt (Faustregel)</div><div class="tool-result-value">' + kabel + '</div><div class="tool-result-detail">für die Hauptzuleitung — Endbemessung durch Elektriker</div></div>';
      html += '</div>';

      var rec = drehstrom
        ? '<strong>Drehstrom (400 V) empfohlen.</strong>Bei deiner Geräteliste lohnt sich der Drehstrom-Anschluss. Mindestens 32-A-CEE-Steckdose plant der Elektriker als Hauptanschluss in der Werkstatt. Das spart dir Stromkreis-Akrobatik bei den großen Geräten.'
        : '<strong>Hausnetz reicht aus.</strong>Drehstrom ist bei deinen Geräten nicht nötig. Wichtig: ' + stromkreise + ' eigene Stromkreise à 16 A im Sicherungskasten — sonst fliegt dir die Sicherung beim ersten Schnitt.';
      html += '<div class="tool-result-recommendation">' + rec + '</div>';

      var anschlussCard = '<div class="tool-result-card" style="grid-column:1/-1"><div class="tool-result-label">Empfohlener Anschluss</div><div class="tool-result-value" style="font-size:1.2rem">' + anschluss + '</div><div class="tool-result-detail">FI-Schutzschalter 30 mA RCD — Standard für Werkstatt-Stromkreise</div></div>';
      // Anschluss-Card vor dem grid-Ende einfügen
      html = html.replace('</div><div class="tool-result-recommendation">', anschlussCard + '</div><div class="tool-result-recommendation">');

      html += '<div class="tool-result-warning"><strong>Wichtig:</strong> Diese Werte sind eine Vorbemessung als Vorlage für deinen Elektriker. Endinstallation am Hausnetz (neue Sicherungskreise, CEE-Steckdose, FI-Schalter) macht der Elektriker — du planst und legst die Leerrohre.</div>';

      resultsEl.innerHTML = html;
    }

    root.addEventListener("change", compute);
    root.addEventListener("input", compute);
    compute();
  }

  /* ================================================================== */
  /* Tool 2: Werkbank-Konfigurator                                       */
  /* ================================================================== */
  function initWerkbankKonfigurator(root) {
    if (!root) return;
    bindRadioPills(root);

    var resultsEl = root.querySelector("[data-tool-results]");
    if (!resultsEl) return;

    // Preise (Stand 2026, €/m² Plattenfläche)
    var plattePreis = {
      "buche-multiplex": { 40: [80, 110], 50: [100, 135], 60: [120, 160] },
      "eiche-massiv":    { 40: [220, 300], 50: [280, 360], 60: [340, 440] },
      "industrie":       { 40: [35, 55], 50: [50, 70], 60: [60, 85] }
    };
    var plattenName = {
      "buche-multiplex": "Buche-Multiplex",
      "eiche-massiv": "Eiche-Massiv (verleimt)",
      "industrie": "Industrieholzplatte (Spanplatte beschichtet)"
    };

    function getRadio(name) {
      var input = root.querySelector('input[name="' + name + '"]:checked');
      return input ? input.value : null;
    }

    function compute() {
      var laenge = parseFloat(getRadio("laenge")) || 0;
      var staerke = parseInt(getRadio("staerke"), 10) || 0;
      var material = getRadio("material");
      var schubladen = parseInt(getRadio("schubladen"), 10);
      var schraubstock = getRadio("schraubstock");
      var hoehe = parseInt(getRadio("hoehe"), 10) || 0;

      if (!laenge || !staerke || !material || isNaN(schubladen) || !schraubstock || !hoehe) {
        resultsEl.innerHTML =
          '<div class="tool-results-header"><span class="tool-results-title">Deine Werkbank</span></div>' +
          '<div class="tool-results-empty">Wähl Länge, Material und Höhe — die Materialliste erscheint sofort.</div>';
        return;
      }

      var tiefe = 0.7; // m
      var hoeheM = hoehe / 100;
      var plattenflaeche = laenge * tiefe; // m²
      var plattenPreisRange = plattePreis[material][staerke];

      // Kosten-Spannweite
      var minKosten = plattenflaeche * plattenPreisRange[0]; // Platte
      var maxKosten = plattenflaeche * plattenPreisRange[1];
      // Untergestell-Holz
      minKosten += 80; maxKosten += 120;
      // Schrauben/Beschläge
      minKosten += 25; maxKosten += 45;
      // Schubladenführungen
      if (schubladen > 0) {
        minKosten += schubladen * 18;
        maxKosten += schubladen * 35;
      }
      // Schraubstock (optional)
      if (schraubstock !== "keiner") {
        minKosten += 80; maxKosten += 250;
      }

      // Bauzeit
      var bauzeit = 4; // Grundgestell
      bauzeit += 2; // Plattenmontage
      bauzeit += schubladen * 1.5;
      if (schraubstock !== "keiner") bauzeit += 1;

      // Vierkantholz-Bedarf (80×80 mm)
      var beine = 4 * hoeheM;
      var laengsstreben = 4 * laenge;
      var querstreben = 4 * tiefe;
      var vierkantGesamt = beine + laengsstreben + querstreben;

      // Höhen-Empfehlung
      var koerper;
      if (hoehe === 85) koerper = "1,65–1,72 m Körpergröße";
      else if (hoehe === 90) koerper = "1,73–1,82 m Körpergröße";
      else koerper = "1,83–1,92 m Körpergröße";

      // Materialliste
      var matList = [];
      matList.push(plattenName[material] + ", " + staerke + " mm, " + laenge.toFixed(1) + " × 0,70 m (" + plattenflaeche.toFixed(2).replace(".", ",") + " m²)");
      matList.push("Vierkantholz 80 × 80 mm, ca. " + Math.ceil(vierkantGesamt * 10) / 10 + " m gesamt (4 Beine, 4 Längsstreben, 4 Querstreben)");
      matList.push("Holzbauschrauben: ca. 60 Stk. 6 × 80, 30 Stk. 6 × 60");
      if (schubladen > 0) {
        matList.push(schubladen + "× Schubladenkasten (Birke-Multiplex 18 mm) + " + (schubladen * 2) + "× Schubladenführung mit Vollauszug");
      }
      if (schraubstock !== "keiner") {
        matList.push("1× Schraubstock (Backenbreite 125–150 mm) + 4× Senkkopfschrauben M10 × 80");
      }
      matList.push("Holzöl oder klarer Hartwachs für die Plattenoberfläche");

      // Werkzeugliste
      var werkzeug = [
        "Akkuschrauber + Bit-Set",
        "Stichsäge oder Tischkreissäge",
        "Holzbohrer 4, 6, 8 mm",
        "4× Schraubzwingen (mind. 30 cm Spannweite)",
        "Wasserwaage 60+ cm",
        "Maßband, Bleistift, Winkel"
      ];
      if (schubladen > 0) werkzeug.push("Bohrlehre für Schubladenführungen (empfohlen)");
      if (schraubstock !== "keiner") werkzeug.push("Metallbohrer 10 mm und Senker");

      var html = "";
      html += '<div class="tool-results-header"><span class="tool-results-title">Deine Werkbank</span><span style="font-size:.78rem;color:rgba(255,255,255,.55)">' + plattenName[material] + ' · ' + laenge.toFixed(1).replace(".", ",") + ' m · ' + hoehe + ' cm</span></div>';

      html += '<div class="tool-results-grid">';
      html += '<div class="tool-result-card"><div class="tool-result-label">Materialkosten (Spannweite)</div><div class="tool-result-value">' + fmtRange(minKosten, maxKosten) + ' €</div><div class="tool-result-detail">Stand 2026, je nach Bezugsquelle</div></div>';
      html += '<div class="tool-result-card"><div class="tool-result-label">Bauzeit (realistisch)</div><div class="tool-result-value">' + bauzeit + ' h</div><div class="tool-result-detail">ohne Beize/Öl-Trocknung</div></div>';
      html += '<div class="tool-result-card"><div class="tool-result-label">Plattenfläche</div><div class="tool-result-value">' + plattenflaeche.toFixed(2).replace(".", ",") + ' m²</div><div class="tool-result-detail">' + laenge.toFixed(1).replace(".", ",") + ' × 0,70 m, ' + staerke + ' mm stark</div></div>';
      html += '<div class="tool-result-card"><div class="tool-result-label">Höhe ' + hoehe + ' cm</div><div class="tool-result-value" style="font-size:1.05rem">' + koerper + '</div><div class="tool-result-detail">Faustregel: Ellbogenhöhe minus 5–10 cm</div></div>';
      html += '</div>';

      html += '<div class="tool-result-list"><h4>Materialliste</h4><ul><li>' + matList.join("</li><li>") + '</li></ul></div>';
      html += '<div class="tool-result-list"><h4>Werkzeug, das du brauchst</h4><ul><li>' + werkzeug.join("</li><li>") + '</li></ul></div>';

      resultsEl.innerHTML = html;
    }

    root.addEventListener("change", compute);
    compute();
  }

  /* ================================================================== */
  /* Tool 3: Werkstattbeleuchtung-Rechner                                */
  /* ================================================================== */
  function initWerkstattbeleuchtungRechner(root) {
    if (!root) return;
    bindRadioPills(root);

    var slider = root.querySelector("[data-slider]");
    var sliderValue = root.querySelector("[data-slider-value]");
    var resultsEl = root.querySelector("[data-tool-results]");
    if (!slider || !resultsEl) return;

    var luxByActivity = { "grobarbeit": 200, "allgemein": 300, "feinarbeit": 500, "lackierung": 750 };
    var factorByCeiling = { "2.4": 1.0, "2.6": 1.15, "3.0": 1.3, "hoeher": 1.5 };
    var colorByActivity = { "grobarbeit": "4000 K (neutralweiß)", "allgemein": "4000 K (neutralweiß)", "feinarbeit": "5000 K (tageslichtweiß)", "lackierung": "5000 K (tageslichtweiß)" };
    var criByActivity = { "grobarbeit": "≥ 80", "allgemein": "≥ 80", "feinarbeit": "≥ 80", "lackierung": "≥ 90 (Pflicht für Farbprüfung)" };
    var aktivitaetName = { "grobarbeit": "Grobarbeit", "allgemein": "Allgemeine Werkstatt-Tätigkeit", "feinarbeit": "Feinarbeit / Modellbau", "lackierung": "Lackierung / Farbprüfung" };

    function getRadio(name) {
      var input = root.querySelector('input[name="' + name + '"]:checked');
      return input ? input.value : null;
    }

    function compute() {
      var m2 = parseInt(slider.value, 10);
      if (sliderValue) sliderValue.textContent = m2 + " m²";

      var aktivitaet = getRadio("aktivitaet");
      var deckenhoehe = getRadio("deckenhoehe");

      if (!aktivitaet || !deckenhoehe) {
        resultsEl.innerHTML =
          '<div class="tool-results-header"><span class="tool-results-title">Deine Beleuchtung</span></div>' +
          '<div class="tool-results-empty">Wähl Tätigkeit und Deckenhöhe — die Werte erscheinen sofort.</div>';
        return;
      }

      var lux = luxByActivity[aktivitaet];
      var factor = factorByCeiling[deckenhoehe];
      var lumen = m2 * lux * factor;
      var panels = Math.ceil(lumen / 5000);
      var watt = panels * 40;
      var jahresKwh = (watt * 4 * 365) / 1000;
      var jahresKostenMin = jahresKwh * 0.30;
      var jahresKostenMax = jahresKwh * 0.40;

      var html = "";
      html += '<div class="tool-results-header"><span class="tool-results-title">Deine Beleuchtung</span><span style="font-size:.78rem;color:rgba(255,255,255,.55)">' + m2 + ' m² · ' + aktivitaetName[aktivitaet] + '</span></div>';

      html += '<div class="tool-results-grid">';
      html += '<div class="tool-result-card"><div class="tool-result-label">Benötigte Lichtleistung</div><div class="tool-result-value">' + fmtInt(lumen) + ' lm</div><div class="tool-result-detail">' + lux + ' lx auf ' + m2 + ' m², Höhen-Faktor ' + factor.toFixed(2).replace(".", ",") + '</div></div>';
      html += '<div class="tool-result-card"><div class="tool-result-label">Anzahl LED-Panels</div><div class="tool-result-value">' + panels + ' Stück</div><div class="tool-result-detail">à ca. 5.000 lm (typisch 60 × 60 cm Panel)</div></div>';
      html += '<div class="tool-result-card"><div class="tool-result-label">Farbtemperatur</div><div class="tool-result-value" style="font-size:1.15rem">' + colorByActivity[aktivitaet] + '</div><div class="tool-result-detail">passt zur gewählten Tätigkeit</div></div>';
      html += '<div class="tool-result-card"><div class="tool-result-label">CRI / Farbwiedergabe</div><div class="tool-result-value" style="font-size:1.15rem">' + criByActivity[aktivitaet] + '</div><div class="tool-result-detail">beim Kauf auf das Datenblatt achten</div></div>';
      html += '<div class="tool-result-card"><div class="tool-result-label">Stromverbrauch / Jahr</div><div class="tool-result-value">' + fmtInt(jahresKwh) + ' kWh</div><div class="tool-result-detail">bei 4 Stunden täglich, ' + watt + ' W gesamt</div></div>';
      html += '<div class="tool-result-card"><div class="tool-result-label">Jährliche Stromkosten</div><div class="tool-result-value">' + fmtRange(jahresKostenMin, jahresKostenMax) + ' €</div><div class="tool-result-detail">bei 0,30–0,40 €/kWh, Stand 2026</div></div>';
      html += '</div>';

      var rec;
      if (aktivitaet === "lackierung") {
        rec = '<strong>Wichtig: CRI ≥ 90</strong>Bei Lackierung musst du Farben präzise unterscheiden — nur LED-Panels mit hohem CRI ≥ 90 zeigen Farben naturgetreu. Steht im Datenblatt unter „Color Rendering Index" oder „Ra".';
      } else if (aktivitaet === "feinarbeit") {
        rec = '<strong>Spotbeleuchtung an der Werkbank ergänzen</strong>Allgemeinbeleuchtung deckt den Raum ab, an der Werkbank brauchst du zusätzlich eine Schwenkarmleuchte direkt über dem Werkstück.';
      } else {
        rec = '<strong>Anordnung gleichmäßig</strong>Verteil die ' + panels + ' Panels rasterförmig an der Decke, mit ca. 1 m Wandabstand. So vermeidest du dunkle Ecken und Schatten.';
      }
      html += '<div class="tool-result-recommendation">' + rec + '</div>';

      resultsEl.innerHTML = html;
    }

    slider.addEventListener("input", compute);
    root.addEventListener("change", compute);
    compute();
  }

  /* ================================================================== */
  /* Bootstrap                                                           */
  /* ================================================================== */
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
