# COMPONENTS — wiederverwendbare HTML-Snippets

Phase 1. Diese Snippets werden auf allen Seiten konsistent eingesetzt.
Bei Änderungen: hier zentral anpassen, dann in alle Seiten übernehmen.

---

## 1. Document-Skelett

```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SEITENTITEL — werkstatt-im-eigenheim.de</title>
  <meta name="description" content="META-DESCRIPTION 150–160 Zeichen.">
  <link rel="canonical" href="https://werkstatt-im-eigenheim.de/PFAD/">
  <meta property="og:title" content="SEITENTITEL">
  <meta property="og:description" content="META-DESCRIPTION">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://werkstatt-im-eigenheim.de/PFAD/">
  <meta property="og:image" content="https://werkstatt-im-eigenheim.de/img/SLUG.jpg">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <!-- Header hier -->
  <main>
    <!-- Inhalt -->
  </main>
  <!-- Footer hier -->
  <!-- Modal hier -->
  <script src="/tools.js" defer></script>
</body>
</html>
```

Pfade sind absolut (`/style.css`, `/tools.js`) — funktioniert von allen Unterseiten.

---

## 2. Header + Hauptnavigation

```html
<header class="site-header">
  <div class="site-header__inner">
    <a href="/" class="site-logo">
      werkstatt<span class="site-logo__accent">·</span>im-eigenheim
    </a>
    <button
      type="button"
      class="nav-toggle"
      data-nav-toggle
      aria-label="Navigation öffnen"
      aria-expanded="false"
    >
      <span class="nav-toggle__icon"></span>
    </button>
    <nav class="main-nav" data-main-nav aria-label="Hauptnavigation">
      <ul class="main-nav__list">
        <li><a class="main-nav__link" href="/pillar/werkstatt-planen-von-null/">Werkstatt planen</a></li>
        <li><a class="main-nav__link" href="/pillar/werkstatt-einrichten-bestand/">Werkstatt einrichten</a></li>
        <li><a class="main-nav__link" href="/tools/">Tools</a></li>
        <li><a class="main-nav__link" href="/ratgeber/">Ratgeber</a></li>
      </ul>
    </nav>
  </div>
</header>
```

`/tools/` ist derzeit kein eigenes Listing — Link führt direkt zum ersten Tool oder zur Tool-Sektion auf Startseite. Phase 3 entscheidet, ob ein Tool-Hub gebaut wird.

---

## 3. Footer mit Lead-Form

```html
<footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__brand-block">
      <h3>werkstatt-im-eigenheim</h3>
      <p>
        Tools, Maße und Konfiguratoren für die Werkstatt im Eigenheim — von der
        ersten Skizze bis zur fertigen Werkbank.
      </p>
      <p>
        <strong>Du bist selbst Handwerker?</strong>
        <a href="/fuer-handwerker/">Mehr Aufträge in deiner Region →</a>
      </p>
    </div>

    <!-- Lead-Form (siehe Snippet 5) -->
    <form
      class="lead-form lead-form--footer"
      action="#"
      method="post"
      data-lead-form
      data-success-message="Danke. Wir melden uns mit deiner kostenlosen Sichtbarkeits-Analyse innerhalb von 24 h."
      novalidate
    >
      <h3 class="lead-form__title">Kostenlose Sichtbarkeits-Analyse</h3>
      <p class="lead-form__subtitle">
        Für deinen Handwerksbetrieb. Unverbindlich, in 24 h, per E-Mail.
      </p>

      <div class="lead-form__row lead-form__row--two">
        <div class="lead-form__field">
          <label class="lead-form__label" for="lf-name-footer">Name</label>
          <input class="lead-form__input" id="lf-name-footer" name="name" type="text" required autocomplete="name">
        </div>
        <div class="lead-form__field">
          <label class="lead-form__label" for="lf-plz-footer">PLZ</label>
          <input class="lead-form__input" id="lf-plz-footer" name="plz" type="text" inputmode="numeric" pattern="[0-9]{5}" required autocomplete="postal-code">
        </div>
      </div>

      <div class="lead-form__field">
        <label class="lead-form__label" for="lf-email-footer">E-Mail</label>
        <input class="lead-form__input" id="lf-email-footer" name="email" type="email" required autocomplete="email">
      </div>

      <div class="lead-form__row lead-form__row--two">
        <div class="lead-form__field">
          <label class="lead-form__label lead-form__label--optional" for="lf-tel-footer">Telefon</label>
          <input class="lead-form__input" id="lf-tel-footer" name="telefon" type="tel" autocomplete="tel">
        </div>
        <div class="lead-form__field">
          <label class="lead-form__label" for="lf-branche-footer">Branche</label>
          <select class="lead-form__select" id="lf-branche-footer" name="branche" required>
            <option value="">Bitte wählen…</option>
            <option>Elektrik</option>
            <option>Sanitär &amp; Heizung</option>
            <option>Maler &amp; Stuck</option>
            <option>Tischler / Schreiner</option>
            <option>Trockenbau</option>
            <option>KFZ &amp; Mechanik</option>
            <option>Garten- &amp; Landschaftsbau</option>
            <option>Sonstiges</option>
          </select>
        </div>
      </div>

      <button type="submit" class="button button--accent button--block lead-form__submit">
        Sichtbarkeits-Analyse anfordern
      </button>

      <p class="lead-form__legal">
        <!-- TODO: Make.com / GHL Webhook -->
        Mit dem Absenden bestätigst du, dass wir dich kontaktieren dürfen. Details in der
        <a href="/datenschutz.html">Datenschutzerklärung</a>.
      </p>
    </form>
  </div>

  <div class="site-footer__legal">
    <span>© <span data-year>2026</span> werkstatt-im-eigenheim.de</span>
    <a href="/impressum.html">Impressum</a>
    <a href="/datenschutz.html">Datenschutz</a>
  </div>
</footer>
```

---

## 4. LocalBoost-In-Content-Box

Wird auf jeder Pillar/Spoke nach ca. 60 % des Inhalts eingesetzt. Pro Seite kann der Pitch-Text leicht variieren — Box-Markup bleibt identisch.

```html
<aside class="localboost-box" aria-label="Hinweis für Handwerksbetriebe">
  <span class="localboost-box__label">Für Handwerker</span>
  <h3 class="localboost-box__title">Du bist selbst Handwerker?</h3>
  <p class="localboost-box__body">
    Wenn du einen eigenen Betrieb hast, kennst du das Problem: im Winter ist es
    voll, im Sommer ruft kaum jemand an. <strong>LocalBoost</strong> macht
    deinen Betrieb in deiner Region online sichtbar — mit Bewertungssystem,
    Google-Optimierung und automatischer Kundenakquise.
  </p>
  <a class="localboost-box__cta" href="/fuer-handwerker/">
    Sichtbarkeits-Analyse anfordern
  </a>
</aside>
```

---

## 5. Lead-Form (Standard, für `/fuer-handwerker/`)

Identisches Markup wie Footer-Variante, ohne `lead-form--footer`-Modifier (heller Hintergrund). Auf der Lead-Funnel-Seite wird die Form in einem Hero-Block prominent platziert.

```html
<form
  class="lead-form"
  action="#"
  method="post"
  data-lead-form
  data-success-message="Danke. Wir melden uns mit deiner kostenlosen Sichtbarkeits-Analyse innerhalb von 24 h."
  novalidate
>
  <h3 class="lead-form__title">Kostenlose Sichtbarkeits-Analyse anfordern</h3>
  <p class="lead-form__subtitle">
    Wir analysieren, wo dein Betrieb online steht und wo du Aufträge verlierst.
  </p>

  <!-- … gleiche Felder wie Footer-Variante … -->
</form>
```

---

## 6. PDF-Capture-Form (Tool-Modal)

Wird per Button mit `data-pdf-trigger` ausgelöst. Modal öffnet sich, Email-Capture, Submit zeigt Danke-Modal.

```html
<div class="modal" data-pdf-modal aria-hidden="true">
  <div class="modal__inner" role="dialog" aria-labelledby="pdf-capture-title">
    <h3 id="pdf-capture-title" class="modal__title">Hol dir das PDF mit deinen Ergebnissen</h3>
    <p class="modal__body">
      Wir schicken dir eine kompakte Zusammenfassung als PDF zum Ausdrucken
      für deinen Elektriker / dein Bauprojekt.
    </p>
    <form
      class="lead-form"
      action="#"
      method="post"
      data-pdf-capture
      data-success-message="Check deine Mails. Das PDF ist unterwegs."
    >
      <div class="lead-form__field">
        <label class="lead-form__label" for="pdf-email">E-Mail</label>
        <input class="lead-form__input" id="pdf-email" name="email" type="email" required autocomplete="email">
      </div>
      <button type="submit" class="button button--accent button--block lead-form__submit">
        PDF zuschicken
      </button>
      <p class="lead-form__legal">
        <!-- TODO: Make.com / GHL Webhook -->
        Wir nutzen deine E-Mail nur, um dir das PDF zu schicken — keine
        Newsletter, kein Spam.
      </p>
    </form>
    <button type="button" class="button button--ghost" data-modal-close>Abbrechen</button>
  </div>
</div>
```

---

## 7. Tool-Showcase-Karte (Startseite)

```html
<a class="tool-card" href="/tools/strombedarfs-rechner/">
  <div class="tool-card__icon">
    <img src="/img/icon-tool-strom.png" alt="" loading="lazy">
  </div>
  <span class="tool-card__label">— 400 V —</span>
  <h3 class="tool-card__title">Strombedarfs-Rechner</h3>
  <span class="tool-card__cta">Direkt ausprobieren →</span>
</a>
```

---

## 8. Persona-Karte (Startseite)

```html
<a class="persona-card" href="/pillar/werkstatt-planen-von-null/">
  <h3 class="persona-card__title">Ich plane eine neue Werkstatt von Grund auf</h3>
  <p class="persona-card__body">
    Vom leeren Raum zur fertigen Werkstatt — mit Grundriss, Strom, Boden,
    Werkbank-Position und Bauphasen-Reihenfolge.
  </p>
  <span class="card__cta">Zum Pillar-Guide</span>
</a>
```

---

## 9. Ratgeber-Vorschau-Karte

```html
<a class="ratgeber-card" href="/ratgeber/werkbank-hoehe-richtige-arbeitshoehe/">
  <img class="ratgeber-card__image" src="/img/hero-spoke-werkbank-hoehe.jpg" alt="" loading="lazy">
  <div class="ratgeber-card__body">
    <span class="ratgeber-card__category">Konstruktion</span>
    <h3 class="ratgeber-card__title">Werkbank-Höhe nach Körpergröße</h3>
    <p class="ratgeber-card__excerpt">
      So findest du die richtige Arbeitshöhe für stehende und sitzende
      Tätigkeiten — mit Tabelle.
    </p>
    <span class="ratgeber-card__cta">Weiterlesen →</span>
  </div>
</a>
```

---

## 10. FAQ-Block (mit Schema.org FAQPage)

`<details>` rendert das visuelle Akkordeon. Schema.org-Markup wird zusätzlich als JSON-LD im `<head>` der Seite eingebettet.

```html
<section class="faq-block" aria-labelledby="faq-heading">
  <h2 id="faq-heading">Häufige Fragen</h2>

  <details class="faq-item">
    <summary>FRAGE 1?</summary>
    <div class="faq-item__body">
      <p>ANTWORT 1.</p>
    </div>
  </details>

  <details class="faq-item">
    <summary>FRAGE 2?</summary>
    <div class="faq-item__body">
      <p>ANTWORT 2.</p>
    </div>
  </details>
</section>
```

JSON-LD-Snippet im `<head>` jeder Seite mit FAQ:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "FRAGE 1?",
      "acceptedAnswer": { "@type": "Answer", "text": "ANTWORT 1." }
    },
    {
      "@type": "Question",
      "name": "FRAGE 2?",
      "acceptedAnswer": { "@type": "Answer", "text": "ANTWORT 2." }
    }
  ]
}
</script>
```

---

## 11. Hero-Block (Content-Seiten mit Titelbild)

```html
<section class="hero hero--with-image">
  <div class="container">
    <img class="hero__image" src="/img/hero-pillar-planen.jpg" alt="" loading="eager">
    <h1 class="hero__title">SEITENTITEL</h1>
    <p class="hero__subtitle">
      KURZE EINLEITUNG, MAX. 2 ZEILEN.
    </p>
  </div>
</section>
```

---

## 12. Article-Container (für Pillars + Spokes)

```html
<article class="article-content container">
  <p>Einleitung 50–80 Wörter, direkt zum Punkt — keine Stockfoto-Einleitungen.</p>

  <h2>Erster Hauptabschnitt</h2>
  <p>…</p>

  <!-- LocalBoost-Box nach ca. 60 % einbauen -->

  <!-- FAQ-Block am Ende -->

  <!-- Cross-References -->
  <aside class="related-links">
    <h3>Weiterlesen</h3>
    <ul>
      <li><a href="/pillar/werkstatt-planen-von-null/">Pillar: Werkstatt planen</a></li>
      <li><a href="/tools/werkbank-konfigurator/">Tool: Werkbank-Konfigurator</a></li>
      <li><a href="/ratgeber/werkzeugwand-system-aufbauen/">Spoke: Werkzeugwand</a></li>
    </ul>
  </aside>
</article>
```

---

## 13. Danke-Modal (auf jeder Seite einzubauen)

Nur einmal pro Seite, am Ende vor `</body>`.

```html
<div class="modal" data-thankyou-modal aria-hidden="true">
  <div class="modal__inner" role="dialog" aria-labelledby="thankyou-title">
    <div class="modal__icon" aria-hidden="true">✓</div>
    <h3 id="thankyou-title" class="modal__title">Danke!</h3>
    <p class="modal__body" data-modal-body>
      Wir haben deine Anfrage erhalten und melden uns innerhalb von 24 h.
    </p>
    <button type="button" class="button button--secondary" data-modal-close>
      Schließen
    </button>
  </div>
</div>
```

---

## 14. Cookie-Hinweis (im Footer, kein Pop-up)

Aktuell bewusst ausgelassen, da keine Tracking-Cookies gesetzt werden. Sobald GHL/Make.com / AdSense aktiv ist, wird hier eine kleine, dezente Bar mit `<dialog>` ergänzt — kein modaler Layer.
