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

## 2026-04-27 — Phase 1.1 — Re-Design Startseite (Brand statt Skeleton)

### Auslöser

User-Feedback: "Die Webseite sieht super basic und langweilig aus." Vorlage-Ordner mit
Klempner-Service-Site als Design-Referenz übergeben (Top-Bar, Hero mit BG-Image,
Trust-Strip, Service-Cards mit Photos, Section-Anthracite mit CTA, Stats, FAQ,
Final-CTA mit BG-Image, 4-Spalten-Footer).

### Geliefert

- **6 Brand-Bilder** über Nano Banana generiert (1K, 16:9, alle in `/img/`):
  - `hero-home.jpg` — dunkle Werkstatt mit oranger Tube auf zentraler Werkbank
  - `tool-strom.jpg` — NH-Schalter mit oranger Kabelschleife
  - `tool-werkbank.jpg` — Top-Down Buche-Multiplex mit oranger Bleistift + Maßstab
  - `tool-licht.jpg` — Industrie-LED-Panels in dunkler Halle
  - `pillar-planen.jpg` — Top-Down Architektur-Grundriss mit Bleistift + Maßband
  - `cta-final.jpg` — Werkstatt-Halle mit oranger Werkzeugkiste im Lichtstrahl
- `style.css` **komplett neu** geschrieben (~13 KB, dichter Vorlage-Stil):
  - Inter-Font (Google Fonts, preconnect)
  - Anthrazit `#1f2937` + Werkstatt-Orange `#f59e0b`
  - Komponenten: Top-Bar, Navbar mit Logo-Icon (Werkbank-SVG inline), Hero mit BG-Image + Tools-Box rechts (overlay), Trust-Strip, Persona-Cards mit Nummern + Icons, Tool-Service-Cards mit Photos, Content-Row mit Accent-Block, Stats-Row, Section-Anthracite mit LocalBoost-CTA, Ratgeber-Cards, FAQ-Akkordeon, Final-CTA mit BG-Image, 4-Spalten-Footer
- `index.html` komplett neu: 13 Sektionen, alle Links + Schema.org WebSite + FAQPage
- `tools.js` erweitert: Hamburger-Toggle, FAQ-Akkordeon, Smooth-Scroll, Modal-Logik, automatischer Footer-Jahr
- `impressum.html` + `datenschutz.html` an neue Klassen-Konvention angepasst (navbar, nav-inner, footer-grid)

### Brand-Entscheidungen

- **Logo-Icon:** stilisierte Werkbank (5 Pfade: Platte, 2 Beine, Querverstrebung, Werkstück oben). Im Header in Anthrazit-Box mit oranger Strich-Färbung; im Footer-Brand invertiert (Orange-Box, anthrazitfarbenes Icon).
- **Hero-Right:** Tools-Box im Glaskasten-Stil (weiße Karte mit Schatten, 3 Tool-Items mit Mini-Icons). Funktioniert als Trust-Element + Navigations-Shortcut zugleich. Liegt visuell auf dem Hero-BG-Image, gleicher Konversionsdruck wie Google-Bewertungs-Box bei der Vorlage.
- **Trust-Strip:** 4 Punkte: 16 Themen-Guides, 3 Rechner, Stand 2026, Mobile-optimiert. In Anthrazit, sitzt als Kontinuum direkt unter dem Hero (nahtloser Übergang).
- **Section-Anthrazit für LocalBoost-CTA:** kontrastiert visuell stark zu den hellen Persona/Tool-Sections darüber. Glas-Card rechts mit Bullet-Liste „Was du bekommst".
- **Final-CTA:** dunkler Gradient über `cta-final.jpg`, große CTAs für Pillar + Tools.

### Annahmen / offene Punkte

- Persona-Card-3 verlinkt auf `#tools` (Anchor zur Tool-Showcase-Sektion auf gleicher Seite), nicht auf eigene `/tools/`-Seite. In Phase 3 entscheiden, ob `/tools/` eigene Hub-Seite wird.
- Ratgeber-Cards verlinken auf `/ratgeber/<slug>/` — Spokes existieren noch nicht. 404 bis Phase 4.
- Pillar-Vorschau verlinkt auf `/pillar/werkstatt-planen-von-null/` — existiert noch nicht. 404 bis Phase 2.
- LocalBoost-CTA-Button verlinkt auf `/fuer-handwerker/` — existiert noch nicht. 404 bis Phase 5.

### Bild-Generierungs-Status

| Slug | Status |
|---|---|
| `hero-home.jpg` | ✓ Phase 1.1 |
| `tool-strom.jpg` | ✓ Phase 1.1 (Foto, jetzt nur noch in Ratgeber-Cards) |
| `tool-werkbank.jpg` | ✓ Phase 1.1 (Foto, jetzt Hero Pillar 2 + Ratgeber-Card) |
| `tool-licht.jpg` | ✓ Phase 1.1 (Foto, reserviert für Ratgeber-Hub) |
| `pillar-planen.jpg` | ✓ Phase 1.1 (Hero Pillar 1) |
| `cta-final.jpg` | ✓ Phase 1.1 |
| `logo-icon.jpg` | ✓ Phase 1.2 |
| `icon-strom.jpg` | ✓ Phase 1.2 (Hero-Quicklink + Tool-Card) |
| `icon-werkbank.jpg` | ✓ Phase 1.2 |
| `icon-licht.jpg` | ✓ Phase 1.2 |
| 8 Spokes + Tool-Detail-Hero | offen, kommen in Phase 3–4 |

---

## 2026-04-27 — Phase 2 — 2 Pillar Pages

### Geliefert

- `pillar/werkstatt-planen-von-null/index.html` (~4.000 Wörter):
  - 8 H2-Abschnitte: Bedarfsanalyse, Größenplanung, Strom/Heizung/Belüftung, Bodenbeschichtung, Werkbank-Position, Lagerlogik, Beleuchtungsplan, Bauphasen-Reihenfolge
  - 3 Beispiel-Grundrisse als Inline-SVG (16, 24, 40 m²)
  - LocalBoost-Box nach ~60 % (zwischen Boden und Werkbank-Position)
  - FAQ-Block mit 5 Fragen (Schema.org FAQPage)
  - Article + FAQPage JSON-LD
  - Querverweise auf alle 3 Tools, 5 Spokes und Pillar 2
- `pillar/werkstatt-einrichten-bestand/index.html` (~4.200 Wörter):
  - 5 Hauptabschnitte: Garage, Keller, Schuppen, Vergleichstabelle, Renovierungs-Schritte je Variante
  - Vergleichstabelle (8 Kriterien × 3 Varianten)
  - Phasen-Listen (5 für Garage, 7 für Keller, 6 für Schuppen)
  - LocalBoost-Box nach ~60 %
  - FAQ-Block mit 5 Fragen
  - Querverweise auf alle 3 Tools, 4 Spokes und Pillar 1
- CSS-Erweiterungen in `style.css`:
  - `.article-hero` mit `.article-hero-img`, `.article-eyebrow`, `.article-lead`, `.article-meta`
  - `.grundriss-grid` und `.grundriss-card` für SVG-Beispiel-Grundrisse
  - `.article-content`-Padding leicht angepasst (kein Doppel-Padding mit hero)
- `sitemap.xml` erweitert (2 Pillar-URLs mit Priority 0.9, monthly)

### Inhalts-Entscheidungen

- **Hero-Bilder:** Pillar 1 = `pillar-planen.jpg` (Top-Down Blueprint, perfekt thematisch). Pillar 2 = `tool-werkbank.jpg` (zugewiesen statt neu generieren — passt zu „einrichten/Werkbank-Aufbau").
- **YMYL-Hinweise (1 × pro Seite):** Pillar 1: „Endinstallation am Hausnetz macht der Elektriker" als Blockquote im Strom-Abschnitt. Pillar 2: nur 1 × bei CEE-Erwähnung.
- **Konkrete Zahlen:** alle Material-/Kostenangaben als Spannweiten („250–450 €/m²", „2.500–4.000 €"), explizit „Stand 2026".
- **Verweisstruktur:** Jede Pillar verlinkt auf alle 3 Tools, 4–7 Spokes (404 bis Phase 4) und das andere Pillar.

### Offene Punkte

- Spokes (`/ratgeber/...`) und Tool-Seiten existieren noch nicht — alle Querverweise führen aktuell zu 404. Phase 3 + 4.
- Lead-Funnel `/fuer-handwerker/` existiert noch nicht — LocalBoost-Box-Klicks führen auf 404. Phase 5.
