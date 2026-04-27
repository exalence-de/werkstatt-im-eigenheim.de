# CONTENT_PLAN — werkstatt-im-eigenheim.de

Stand: Phase 0. Konzept-Dokument für 16 Inhaltsseiten + 2 Service-Seiten, 3 Tools, Hub-and-Spoke-Verlinkung.

---

## 1. Seiten-Übersicht

### 1.1 Startseite — `/`
ca. 1.500 Wörter. Hero mit Brand-Claim und Sub-Headline, drei Persona-Karten („von Grund auf planen" / „bestehenden Raum umbauen" / „nur ein Tool"), Tool-Showcase-Grid mit allen drei Rechnern, Ratgeber-Vorschau-Block mit drei kuratierten Spokes, FAQ-Block (4–5 Fragen, Schema.org FAQPage) und Footer-Lead-Form. Verlinkt auf beide Pillars, alle drei Tools, Ratgeber-Hub und `/fuer-handwerker/`.

### 1.2 Pillar 1 — `/pillar/werkstatt-planen-von-null/`
4.000 Wörter. H1: „Werkstatt selbst planen: Vom leeren Raum zur fertigen Werkstatt". Acht H2-Abschnitte: Bedarfsanalyse → Größenplanung → Strom/Heizung/Belüftung → Boden → Werkbank-Position → Lagerlogik → Beleuchtungsplan → Reihenfolge der Bauphasen. Drei Beispiel-Grundrisse als Inline-SVG (16, 24, 40 m²). LocalBoost-Box nach ca. 60 %, FAQ-Block, Querverweise auf 4–6 Spokes plus alle drei Tools.

### 1.3 Pillar 2 — `/pillar/werkstatt-einrichten-bestand/`
4.000 Wörter. H1: „Bestehenden Raum zur Werkstatt umbauen: Garage, Keller, Schuppen". Struktur: Garage als Werkstatt → Keller (Feuchtigkeit, Belüftung, Lärm) → Gartenhaus/Schuppen → Vergleichstabelle aller drei Optionen → Renovierungs-Schritte je Variante. LocalBoost-Box nach ca. 60 %, FAQ, 4–6 Spoke-Verweise plus alle drei Tools.

### 1.4 Tool 1 — `/tools/strombedarfs-rechner/`
ca. 800 Wörter Kontext-Text + Tool-Block + ca. 200 Wörter Erklärung. Berechnet maximale Last und Anzahl benötigter Stromkreise aus Geräteliste. PDF-Download mit Email-Capture, LocalBoost-Box („Elektriker in deiner Region?"), Querverweise auf Pillar 1 + Spoke 8 (CEE-Steckdose) + Spoke 4 (Werkstattheizung).

### 1.5 Tool 2 — `/tools/werkbank-konfigurator/`
ca. 800 + 200 Wörter. Konfiguriert Werkbank aus Länge, Plattenstärke, Material, Schubladen, Schraubstockposition und Höhe. Output: Materialliste mit Mengen, Kosten-Spannweite, Bauzeit, Werkzeugliste. PDF-Download mit Email-Capture, LocalBoost-Box, Querverweise auf Pillar 1 + Spoke 1 (Werkbank-Höhe) + Spoke 5 (Werkzeugwand).

### 1.6 Tool 3 — `/tools/werkstattbeleuchtung-rechner/`
ca. 800 + 200 Wörter. Berechnet Lumen-Bedarf, Anzahl LED-Panels, Farbtemperatur, CRI-Wert und jährliche Stromkosten. LocalBoost-Box, Querverweise auf Pillar 1 + Spoke 8 (CEE-Steckdose) + Pillar 2.

### 1.7 Ratgeber-Hub — `/ratgeber/`
ca. 1.200 Wörter. H1: „Werkstatt-Ratgeber: Alle Themen für deine Werkstatt im Eigenheim". Übersichts-Text plus Spokes thematisch in drei Sektionen gruppiert: Konstruktion & Ausstattung (Werkbank-Höhe, Werkzeugwand, Bodenbeschichtung), Technik & Versorgung (Druckluft, CEE-Steckdose, Absauganlage), Klima & Komfort (Werkstattheizung, Belüftung). Pro Spoke Vorschau-Karte mit Bild, Titel, Anriss und „Weiterlesen"-Link.

### 1.8 Spoke 1 — `/ratgeber/werkbank-hoehe-richtige-arbeitshoehe/`
1.200 Wörter. H1: „Werkbank-Höhe: Die richtige Arbeitshöhe nach Körpergröße". Berechnungs-Heuristik (Werkbankhöhe ≈ Ellbogenhöhe minus 5–10 cm bei stehender Arbeit, minus 15 cm bei Krafteinsatz), Tabelle Körpergröße × empfohlene Höhe, Empfehlungen für stehende vs. sitzende Tätigkeiten, Hinweise zu höhenverstellbaren Untergestellen. Verweise: Pillar 1 + Tool 2 + Spoke 5.

### 1.9 Spoke 2 — `/ratgeber/werkstatt-bodenbeschichtung-vergleich/`
1.200 Wörter. H1: „Werkstatt-Bodenbeschichtung im Vergleich: Epoxid, PU, Hartstoffestrich, Vinyl". Vergleichstabelle (Kosten pro m², Haltbarkeit, Aufwand, Eignung), je Variante Vor-/Nachteile, Hinweise zu Untergrund-Vorbereitung. Verweise: Pillar 2 + Tool 1 + Spoke 4.

### 1.10 Spoke 3 — `/ratgeber/druckluft-werkstatt-grundlagen/`
1.200 Wörter. H1: „Druckluft in der Werkstatt: Kompressor, Kessel, Leitung". Kompressor-Größen nach Werkzeug-Bedarf, Kesselvolumen-Faustregeln, Leitungsführung (Ringleitung vs. Stichleitung), Druckluftwerkzeuge im Überblick. Verweise: Pillar 1 + Tool 1 + Spoke 8.

### 1.11 Spoke 4 — `/ratgeber/werkstattheizung-optionen/`
1.200 Wörter. H1: „Werkstattheizung im Vergleich: Infrarot, Heizgebläse, Pelletheizung, Wärmepumpe". Tabelle mit Watt/m²-Bedarf, Anschaffungskosten-Spannweite und Betriebskosten je Heizart. Hinweise zu Lüftungs-Wechselwirkung. Verweise: Pillar 1 + Pillar 2 + Spoke 7.

### 1.12 Spoke 5 — `/ratgeber/werkzeugwand-system-aufbauen/`
1.200 Wörter. H1: „Werkzeugwand selber bauen: French Cleat, Lochwand und Schienensystem". Vergleich der drei Systeme, Eigenbau-Anleitung French Cleat (Materialliste, Schritte, Werkzeug). Verweise: Pillar 1 + Tool 2 + Spoke 1.

### 1.13 Spoke 6 — `/ratgeber/absauganlage-werkstatt-planen/`
1.200 Wörter. H1: „Absauganlage in der Werkstatt richtig planen". Einzelgerät vs. Zentralabsaugung, Rohrdurchmesser-Faustregeln, benötigte Saugleistung in m³/h je Maschine, Anschluss-Hinweise. Verweise: Pillar 1 + Tool 1 + Spoke 3.

### 1.14 Spoke 7 — `/ratgeber/werkstatt-belueftung-fenster-loesungen/`
1.200 Wörter. H1: „Werkstatt-Belüftung: Querlüftung, Lüftungsanlage und Wärmerückgewinnung". Lüftungs-Strategien, Spezialfall Keller-Werkstatt (Feuchtigkeit, Schimmelvermeidung), Hinweise zu Schweiß-/Lack-Tätigkeiten. Verweise: Pillar 2 + Spoke 4 + Spoke 2.

### 1.15 Spoke 8 — `/ratgeber/cee-steckdose-werkstatt-installation/`
1.200 Wörter. H1: „CEE-Steckdose in der Werkstatt installieren: 16 A, 32 A, 63 A". Wann welche Stromstärke nötig ist, Vorbereitungs-Checkliste für den Elektriker, kurzer Hinweis „Endmontage durch Elektriker" (genau 1×). Verweise: Pillar 1 + Tool 1 + Spoke 3.

### 1.16 Lead-Funnel — `/fuer-handwerker/`
ca. 1.500 Wörter. H1: „Du bist selbst Handwerker? So bekommst du planbar mehr Aufträge in deiner Region". Struktur: Hero mit Schmerzpunkt-Ansprache → drei Schmerzpunkte → LocalBoost in drei Schritten → fünf konkrete Bullet-Punkte „Was du bekommst" → Testimonials-Platzhalter → Lead-Form (Name, Email, Telefon, Branche, PLZ) → FAQ-Block. Bewusst KEINE Preise. Nicht in Hauptnavigation verlinkt.

### S1 — Impressum (`/impressum.html`)
Platzhalter mit `<!-- TODO -->` markiert.

### S2 — Datenschutz (`/datenschutz.html`)
Platzhalter mit `<!-- TODO -->` markiert.

---

## 2. Tool-Specs

### 2.1 Strombedarfs-Rechner

**Inputs (Checkboxen + optionale Stückzahl, Default 1):**

| Gerät | Watt-Annahme |
|---|---|
| Tischkreissäge | 2.200 W |
| Schweißgerät MIG/MAG | 5.000 W |
| Schweißgerät Inverter | 3.500 W |
| Kompressor klein | 1.500 W |
| Kompressor groß | 3.000 W |
| Drehbank | 2.500 W |
| Hobel/Abrichte | 2.000 W |
| Absauganlage | 1.500 W |
| Heizlüfter | 2.000 W |
| Beleuchtung gesamt | 500 W |
| Sonstige Steckdosen Puffer | 1.000 W |

**Berechnung:**
- `summeW = Σ (Geräte-Watt × Stückzahl)`
- `stromA_230V = summeW / 230`
- `stromA_400V = summeW / (400 × √3)` (gerundet, vereinfachte Annahme symmetrische Last)
- `anzahlStromkreise = ceil(summeW / (16 × 230))` (16 A Sicherung, 230 V einphasig)
- `drehstromEmpfehlung = summeW > 7000 oder mindestens ein Gerät > 3500 W`
- `kabelquerschnitt`: bis 16 A → 2,5 mm², ab 32 A → 4 mm², ab 63 A → 10 mm² (Faustregel)
- `fiSchutz = 30 mA RCD Standard`

**Outputs:** Maximale gleichzeitige Last in W und A bei 230 V/400 V, Drehstrom-Empfehlung, Anzahl Stromkreise, Kabelquerschnitt, FI-Empfehlung, YMYL-Hinweis (1×) „Endinstallation durch Elektriker".

### 2.2 Werkbank-Konfigurator

**Inputs:**
- Länge: 1,5 / 2,0 / 2,5 / 3,0 m
- Plattenstärke: 40 / 50 / 60 mm
- Plattenmaterial: Buche-Multiplex / Eiche-Massiv / Industrieholzplatte
- Schubladen: 0 / 3 / 6
- Schraubstockposition: links / rechts / kein Schraubstock
- Höhe: 85 / 90 / 95 cm (Empfehlung nach Körpergröße einblenden)

**Berechnung — Materialmengen:**
- Holzplatte: Länge × 0,7 m × Stärke
- Vierkanthölzer Untergestell (80 × 80 mm): 4 Beine à Höhe + 2 Querverstrebungen oben + 2 unten
- Schrauben: Pauschale je Konfiguration (z. B. 60 Stück 6 × 80, 30 Stück 6 × 60)
- Schubladenführungen: Anzahl Schubladen × 2

**Berechnung — Kosten-Spannweiten (Stand 2026, Spannweiten ehrlich):**
- Buche-Multiplex 40 mm: 80–110 €/m²; 50 mm: 100–135 €/m²; 60 mm: 120–160 €/m²
- Eiche-Massiv 40 mm: 220–300 €/m² (etc.)
- Industrieholzplatte 40 mm: 35–55 €/m²
- Untergestell-Holz: pauschal 80–120 €
- Schrauben/Beschläge: 25–45 €
- Schubladenführungen: 18–35 € pro Stück
- Gesamtsumme als Min–Max-Spannweite ausgegeben

**Berechnung — Bauzeit:**
- Grundgestell: 4 h
- Plattenmontage: 2 h
- Pro Schublade: 1,5 h
- Schraubstock-Anbau: 1 h

**Outputs:** Materialliste, Kosten-Spannweite, Bauzeit-Schätzung, Werkzeugliste.

### 2.3 Werkstattbeleuchtung-Rechner

**Inputs:**
- Raumgröße: Slider 10–80 m²
- Tätigkeitsart: Grobarbeit (200 lx) / Allgemein (300 lx) / Feinarbeit (500 lx) / Lackierung (750 lx)
- Deckenhöhe: 2,4 / 2,6 / 3,0 / höher m

**Berechnung:**
- `lumenGesamt = m² × Lux × Faktor(Deckenhöhe)` mit Faktor 1,0 (2,4 m), 1,15 (2,6 m), 1,3 (3,0 m), 1,5 (höher)
- `anzahlPanels = ceil(lumenGesamt / 5000)` (Annahme 5.000 lm pro 60 × 60 LED-Panel)
- `farbtemperatur`: 4000 K (Standard), 5000 K (Feinarbeit/Lackierung)
- `cri`: ≥ 80 Standard, ≥ 90 Lackierung
- `stromkostenJahr = anzahlPanels × 40 W × 4 h × 365 / 1000 × 0,35 €/kWh` (Annahme 40 W pro Panel, 4 h täglich, 0,35 €/kWh — Stand 2026 Spannweite, Default 0,35 € als Mittelwert)

**Outputs:** Lumen-Gesamt, Anzahl Panels, Farbtemperatur, CRI, Stromkosten/Jahr.

---

## 3. Verlinkungs-Matrix

| Quelle | Pillar 1 | Pillar 2 | Tool 1 | Tool 2 | Tool 3 | Spokes (Hauptverweise) | `/fuer-handwerker/` |
|---|---|---|---|---|---|---|---|
| Startseite | ✓ | ✓ | ✓ | ✓ | ✓ | 3 ausgewählte | ✓ (LocalBoost-Box) |
| Pillar 1 | – | – | ✓ | ✓ | ✓ | 1, 4, 5, 6, 7, 8 (4–6) | LocalBoost-Box |
| Pillar 2 | – | – | ✓ | ✓ | ✓ | 2, 4, 7 (4–6 inkl. weiter) | LocalBoost-Box |
| Tool 1 | ✓ | – | – | – | – | 4, 8 | LocalBoost-Box |
| Tool 2 | ✓ | – | – | – | – | 1, 5 | LocalBoost-Box |
| Tool 3 | ✓ | ✓ | – | – | – | 8 | LocalBoost-Box |
| Ratgeber-Hub | ✓ | ✓ | ✓ | ✓ | ✓ | alle 8 | LocalBoost-Box |
| Spoke 1 | ✓ | – | – | ✓ | – | 5 | LocalBoost-Box |
| Spoke 2 | – | ✓ | ✓ | – | – | 4 | LocalBoost-Box |
| Spoke 3 | ✓ | – | ✓ | – | – | 8 | LocalBoost-Box |
| Spoke 4 | ✓ | ✓ | – | – | – | 7 | LocalBoost-Box |
| Spoke 5 | ✓ | – | – | ✓ | – | 1 | LocalBoost-Box |
| Spoke 6 | ✓ | – | ✓ | – | – | 3 | LocalBoost-Box |
| Spoke 7 | – | ✓ | – | – | – | 4, 2 | LocalBoost-Box |
| Spoke 8 | ✓ | – | ✓ | – | – | 3 | LocalBoost-Box |
| `/fuer-handwerker/` | – | – | – | – | – | – | – (eigenständig) |

Lead-Funnel ist NICHT in Hauptnavigation, nur über Startseite + LocalBoost-Boxen erreichbar.

---

## 4. Bild-Liste (Nano Banana, 1K, 16:9 Hero)

| Slug | Beschreibung Stichworte |
|---|---|
| `hero-startseite` | Werkstatt-Übersicht, dunkel, einzelner oranger Akzent (Werkzeug auf Werkbank), keine Person |
| `hero-pillar-planen` | Leerer Werkstatt-Raum, Bauplan auf Boden, Maßband, Anthrazit, oranger Stift |
| `hero-pillar-bestand` | Garage von innen, halbfertige Werkstatt-Einrichtung, oranger Werkzeugkoffer |
| `hero-tool-strom` | Sicherungskasten Detail, Anthrazit-Wand, oranges Kabel |
| `hero-tool-werkbank` | Werkbank-Platte aus Buche-Multiplex auf dunklem Untergestell, Hand mit Bleistift im Anschnitt |
| `hero-tool-beleuchtung` | LED-Panels an Decke, dunkler Raum, oranges Licht-Reflex |
| `hero-ratgeber-hub` | Stapel verschiedener Werkzeuge, dunkles Top-Down, einzelner oranger Akzent |
| `hero-spoke-werkbank-hoehe` | Werkbank-Detail, Maßstab vertikal, Hand-Detail |
| `hero-spoke-bodenbeschichtung` | Boden-Detail, Epoxidharz-Look, Anthrazit |
| `hero-spoke-druckluft` | Kompressor von schräg oben, Druckschlauch, oranger Manometer-Akzent |
| `hero-spoke-werkstattheizung` | Infrarotheizung an Werkstatt-Decke, dunkler Raum |
| `hero-spoke-werkzeugwand` | French-Cleat-Wand mit Werkzeugen, Anthrazit |
| `hero-spoke-absauganlage` | Absaugschlauch an Tischkreissäge, Späne, oranger Akzent |
| `hero-spoke-belueftung` | Werkstatt-Fenster, Lüftungsgitter, Lichtstrahl |
| `hero-spoke-cee` | CEE-Steckdose 32A rot/blau, Anthrazit-Wand |
| `hero-fuer-handwerker` | Handwerker-Hand mit Smartphone, halbe Sicht, dunkel, Werkstatt-Hintergrund |

Tool-Showcase-Icons (Startseite, isometrisch, weißer BG, dunkles Objekt, oranger Akzent):

| Slug | Beschreibung |
|---|---|
| `icon-tool-strom` | NH-Sicherung mit drei Hebeln, oranger Akzentstreifen |
| `icon-tool-werkbank` | Isometrische Werkbank, oranger Schraubstock |
| `icon-tool-beleuchtung` | LED-Panel von schräg oben, oranger Lichtkegel |

---

## 5. Komponenten-Übersicht (Phase 1 → `COMPONENTS.md`)

1. Header mit Hauptnavigation (4 Punkte)
2. Footer mit Lead-Form
3. Lead-Form (Name, Email, Telefon optional, Branche, PLZ — Platzhalter, JS-Submit zeigt „Danke"-Modal)
4. PDF-Capture-Form-Modal (nur Email)
5. LocalBoost-In-Content-Box (CTA-Link zu `/fuer-handwerker/`)
6. Tool-Showcase-Karte
7. Persona-Karte (für Startseite)
8. Ratgeber-Vorschau-Karte
9. FAQ-Block (`<details>` + Schema.org FAQPage)
10. Hero-Block (Titelbild oben, H1, Sub-Headline)
11. Article-Container (Typografie für Content-Seiten)
12. Cookie-Hinweis (dezent, kein Pop-up — kommt in Footer)

---

## 6. Annahmen (Stand Phase 0)

- Domain ist über GitHub Pages live, HTTPS-Zertifikat in Ausstellung.
- Lead-Form-Endpoint = Platzhalter, JS zeigt nur „Danke"-Modal. Make.com / GHL-Webhook tauscht User später selbst ein.
- AdSense komplett ausgelassen.
- Keine Autoren-Box (User-Entscheidung Phase 0).
- Werkbank-Höhe-Heuristik: Ellbogenhöhe minus 5–10 cm (stehend), keine erfundene DIN.
- YMYL-Hinweise (Elektro, Statik) genau 1× pro Seite.
- Material-Preise als Spannweiten Stand 2026, niemals Punktwerte.
