# Prüfgelände in Daten

Statische Seite im Blaupausen-Look, keine Build-Schritte nötig.

- `index.html`: Datenblatt (Reiter „Datenblatt“)
- `blog/index.html`: Baublog (Reiter „Baublog“), Bilder in `assets/blog/`
- `quellen/index.html`: Quellenverzeichnis (Reiter „Quellen“): Herkunft aller Daten, Lizenzen, Grundsatz „nur öffentliche Daten“

## Auf GitHub Pages veröffentlichen
1. Den Inhalt dieses Ordners (`index.html`, `blog/`, `quellen/`, `assets/`, `.nojekyll`, `README.md`) in die oberste Ebene des Repositories hochladen und bestehende Dateien ersetzen.
2. Settings → Pages → Source „Deploy from a branch“ → Branch `main`, Ordner `/ (root)`.

Die Seite lädt nur die Schriften von Google Fonts nach, sonst ist alles enthalten.

Daten: Bayerische Vermessungsverwaltung (CC BY 4.0), © OpenStreetMap-Mitwirkende (ODbL).

## Sprachumschaltung (DE / EN)

Oben rechts stehen die Buttons „DE“ und „EN“. Die Wahl wird im Browser gemerkt und gilt für Datenblatt und Baublog. Beim ersten Besuch richtet sich die Sprache nach dem Browser.

- `assets/i18n.js` tauscht die Texte beim Laden aus.
- `assets/i18n-en.js` enthält alle englischen Texte (Deutsch → Englisch, nach Textblock).
- Neue deutsche Texte erscheinen auf Englisch erst, wenn ein Eintrag in `i18n-en.js` ergänzt ist. Bis dahin bleibt der deutsche Text stehen.

Neue deutsche Texte, auch auf `quellen/index.html`, brauchen einen Eintrag in `assets/i18n-en.js`, sonst bleiben sie auch auf Englisch deutsch.
