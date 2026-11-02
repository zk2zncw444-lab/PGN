# Prüfgelände in Daten

Technisches Datenblatt und Baublog zu einem Fahrzeug-Prüfgelände, ausgewertet aus offenen Geodaten.
Technical datasheet and build log of a vehicle proving ground, analysed from open geodata.

**Live:** https://zk2zncw444-lab.github.io/PGN/

## Inhalt

| Bereich | Beschreibung |
|---|---|
| **Datenblatt** | Kennzahlen, Lageplan, Hochgeschwindigkeitsoval, Handlingkurse, Straßennetz, Steigungshügel, Gelände, Bewuchs und Gebäude in neun Blättern |
| **Baublog** | Logbuch zum digitalen Nachbau für einen Fahrsimulator: Datenaufbereitung, Messungen, Fehleranalysen und Revisionen mit Mess- und Prüfbildern |
| **Quellen** | Quellenverzeichnis mit Herausgebern, Lizenzen und Zuordnung der wichtigsten Angaben |

Die Seite ist zweisprachig (Deutsch und Englisch) und bietet eine helle und eine dunkle Darstellung.

## Daten und Transparenz

Es werden ausschließlich Daten genutzt, die der Öffentlichkeit ohnehin zur Verfügung stehen: offene Geodaten der Bayerischen Vermessungsverwaltung (CC BY 4.0) und OpenStreetMap-Daten (ODbL). Firmeninterne oder sonstige nicht öffentliche Daten werden nicht verwendet. Details und Lizenzen stehen auf der Seite **Quellen**.

## Aufbau

```
index.html          Datenblatt
blog/               Baublog (Bilder in assets/blog/)
quellen/            Quellenverzeichnis
assets/             Relief, Bäume, Bilder, Übersetzung (i18n.js, i18n-en.js)
```

Statische Seite ohne Build-Schritt. Englische Texte stehen in `assets/i18n-en.js`.

## Hinweis

Private, nicht kommerzielle Auswertung. Alle Werte sind Näherungen aus offenen Daten, ohne Gewähr.

---

**EN:** A static, bilingual (German/English) site with a datasheet, a build log and a source index. Only publicly available data is used (Bavarian open geodata, CC BY 4.0, and OpenStreetMap, ODbL). All values are approximations, provided without warranty.
