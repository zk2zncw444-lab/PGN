# Prüfgelände in Daten

Interaktive Karte, Baublog und technisches Datenblatt zu einem Fahrzeug-Prüfgelände, ausgewertet aus offenen Geodaten.
Interactive map, build log and technical datasheet of a vehicle proving ground, analysed from open geodata.

**Live:** https://zk2zncw444-lab.github.io/PGN/

## Inhalt

| Bereich | Beschreibung |
|---|---|
| **Karte** (Startseite) | Interaktive Karte aller Kurse: anklicken für Kennzahlen, Höhenprofil, Baustand im Simulator und eine animierte Testfahrt; Rundgang über alle Kurse |
| **Datenblatt** | Kennzahlen, Lageplan, Hochgeschwindigkeitsoval, Handlingkurse, Straßennetz, Steigungshügel, Gelände, Bewuchs und Gebäude in neun aufklappbaren Blättern |
| **Baublog** | Logbuch zum digitalen Nachbau für einen Fahrsimulator in fünf Kapiteln: Datenaufbereitung, Messungen, Fehleranalysen und Revisionen. Jeder Eintrag mit Kurzfassung, Details zum Aufklappen |
| **Quellen** | Quellenverzeichnis mit Herausgebern, Lizenzen und Zuordnung der wichtigsten Angaben |

Die Seite ist zweisprachig (Deutsch und Englisch) und bietet eine helle und eine dunkle Darstellung.

## Daten und Transparenz

Es werden ausschließlich Daten genutzt, die der Öffentlichkeit ohnehin zur Verfügung stehen: offene Geodaten der Bayerischen Vermessungsverwaltung (CC BY 4.0) und OpenStreetMap-Daten (ODbL). Firmeninterne oder sonstige nicht öffentliche Daten werden nicht verwendet. Details und Lizenzen stehen auf der Seite **Quellen**.

## Aufbau

```
index.html          Startseite mit interaktiver Karte
datenblatt/         Datenblatt
blog/               Baublog (Bilder in assets/blog/)
quellen/            Quellenverzeichnis
assets/             Design (site.css), Kartengeometrie (strecken.js), Relief, Bäume, Bilder, Übersetzung (i18n.js, i18n-en.js)
```

Statische Seite ohne Build-Schritt. Englische Texte stehen in `assets/i18n-en.js`.

## Hinweis

Private, nicht kommerzielle Auswertung. Alle Werte sind Näherungen aus offenen Daten, ohne Gewähr.

---

**EN:** A static, bilingual (German/English) site with an interactive map, a datasheet, a build log and a source index. Only publicly available data is used (Bavarian open geodata, CC BY 4.0, and OpenStreetMap, ODbL). All values are approximations, provided without warranty.
