# BUILD_LOG — werkstatt-im-eigenheim.de

Chronologisches Protokoll von Entscheidungen, Annahmen und offenen Punkten.

---

## 2026-04-27 — Initial Setup (vor Phase 0)

- Domain `werkstatt-im-eigenheim.de` bei All-Inkl registriert.
- DNS auf GitHub-Pages-IPs umgestellt:
  - Apex `@` A-Records: 185.199.108.153, .109.153, .110.153, .111.153
  - `www` CNAME → `exalence-de.github.io.`
- Repo `exalence-de/werkstatt-im-eigenheim.de` (public) erstellt, GitHub Pages aktiviert (main / root), CNAME-Datei deponiert.
- HTTP-Site live mit Hallo-Welt-Stub.
- HTTPS-Zertifikat (Let's Encrypt) wird von GitHub asynchron ausgestellt — Polling-Job aktiv.

## 2026-04-27 — Phase 0 + 1 — Konzept + Setup

### Geliefert

- `CONTENT_PLAN.md` — komplette Inhaltsskizzen für 16 Inhaltsseiten + 2 Service-Seiten, Tool-Specs (Inputs/Formeln/Outputs), Verlinkungs-Matrix, Bild-Liste.
- Ordner-Struktur: `/pillar/`, `/tools/`, `/ratgeber/`, `/fuer-handwerker/`, `/img/`, `/assets/`.
- `style.css` (~600 Zeilen, ~14 KB) — vollständiges Design-System: Tokens (Farben, Typo, Spacing, Radien, Schatten), Reset, Base-Typo, Layout-Container, Header/Nav, Hero, Buttons, Cards (Persona, Tool, Ratgeber), Article-Content, LocalBoost-Box, Lead-Form, Footer, FAQ-Block, Modal, Cross-Reference-Box, Utilities, Print-Stylesheet. Mobile-first, Container max-width 720 px.
- `tools.js` — Skelett mit Lead-Form-Handler, Modal-Logik, Mobile-Nav-Toggle, PDF-Capture-Trigger, drei Tool-Init-Stubs für Phase 3.
- `COMPONENTS.md` — 14 wiederverwendbare HTML-Snippets: Document-Skelett, Header, Footer, LocalBoost-Box, Lead-Form (Footer + Standard), PDF-Capture-Modal, Tool-Card, Persona-Card, Ratgeber-Card, FAQ-Block (mit Schema.org-Vorlage), Hero-Block, Article-Container, Danke-Modal, Cookie-Hinweis-Note.
- `sitemap.xml` — initial nur mit existierenden URLs (`/`, `/impressum.html`, `/datenschutz.html`). Wird in Phase 2–5 erweitert.
- `robots.txt` — Allow all + Sitemap-Verweis.
- `impressum.html` und `datenschutz.html` — vollständige HTML-Strukturen mit Header/Footer/Modal-Anbindung, Inhalt mit `<!-- TODO -->` markiert (Pflichtangaben, Kontakt, GHL-Verarbeitungs-Hinweis).
- `index.html` — Branded Stub, ersetzt das initiale „Hallo Welt". Nutzt das volle Design-System: Hero mit Brand-Claim + Sub-Headline, drei Persona-Karten („In Kürze verfügbar"), LocalBoost-Box, Footer mit funktionsfähiger Lead-Form (zeigt Danke-Modal), Danke-Modal.

### Annahmen / Entscheidungen

- **Autoren-Box komplett entfernt** (User-Entscheidung) — kein Konflikt mit Pillar/Spoke-Strukturen, da Brand-fokussiert statt Person-fokussiert.
- **AdSense komplett ausgelassen** — kein toter Code, keine TODOs.
- **Lead-Form-Endpoint** = Platzhalter `action="#"` + JS-Submit-Handler in `tools.js`. Submit ruft `e.preventDefault()` und öffnet Danke-Modal. Sobald GHL/Make.com-Webhook bereit ist, ersetzt User nur das `<form>`-Markup oder `action`-Attribut.
- **Lead-Form ist überall identisch** (Name, E-Mail, Telefon optional, Branche, PLZ) — sowohl Footer-Variante als auch primäre Variante auf `/fuer-handwerker/`. Footer-Variante hat dunklen Hintergrund (Modifier `lead-form--footer`), sonst gleiche Felder + gleicher Submit-Handler.
- **PDF-Capture-Form** für Tools = separate Mini-Variante (nur E-Mail), zeigt eigenes Danke-Modal.
- **Logo** = textbasiert (`werkstatt·im-eigenheim`), Punkt in Akzentfarbe Orange. Kein Bild-Logo, hält Performance-Budget.
- **Sitemap** wird inkrementell erweitert. Phase 1 listet nur reale URLs, kein „Future-Proofing" mit 404-Pfaden.
- **Schema.org** wird seitenbasiert ergänzt (FAQPage, Article, BreadcrumbList) in Phase 2–4. Keine globalen Vorlagen in Phase 1, weil Inhalt fehlt.
- **CSS in einer Datei** (`style.css`), kein Splitting — das Lighthouse-Performance-Budget ist eng (< 100 KB pro Seite), eine Datei spart HTTP-Roundtrip und nutzt Pages-Caching.
- **Mobile-Nav** als Hamburger-Burger ab < 768 px, Desktop-Nav als horizontale Liste.

### Offene TODOs

- HTTPS-Zertifikat: läuft im Hintergrund-Job, sollte spätestens in 1–6 h aktiv sein.
- Impressum + Datenschutz: Pflichtangaben (Name, Anschrift, E-Mail) muss User selbst ergänzen — sind YMYL-rechtlich relevant, kein erfundener Platzhalter.
- Tool-Hub-Seite `/tools/` — Phase 3 entscheidet, ob das eigene Listing-Seite wird oder Hauptnav-Link auf Startseiten-Anchor `/#tools` zeigt.
- AdSense-Integration (User integriert selbst).
- GHL-Webhook-URL (User integriert selbst).
- Bild-Generierung: keine Bilder in Phase 1 generiert. Hero-Bilder kommen seitenweise in Phase 2–4. Tool-Showcase-Icons in Phase 2 (für Startseite).

### Bekannte Einschränkungen

- Seiten unter `/pillar/`, `/tools/`, `/ratgeber/`, `/fuer-handwerker/` existieren noch nicht. Hauptnavigation verlinkt darauf — Klicks führen zu 404. **Das ist gewollt für Phase 1**, alle Pages werden in Phase 2–4 angelegt.
- Keine Fonts geladen — System-Font-Stack reicht und spart 50–200 KB pro Seite.

---

## Bild-Generierungs-Status

| Slug | Status |
|---|---|
| icon-tool-strom (Test) | ✓ generiert in Phase „Smoke-Test" — `generated_imgs/generated-2026-04-27T09-13-33-079Z-9nt9jq.jpg` |
| Alle anderen | offen, kommen in Phase 2–4 |
