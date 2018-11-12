# Besonderheiten des Funktionsaufrufs

- Funktionen als first class citizens
- C: Funktionspointer
- Haskell: lambda expressions, Funktionsobjekte speichern Referenz auf scope (und Argumente bei partiell angewandten Funktionen)
- MaMa-Implementierung: Statische Analyse einsparen, weil zu aufwändig für Lehrveranstaltung

## Currying (Unterversorgung)

- Speichern der gegebenen Argumente in neuem F-Objekt
- späteres Zusammenführen der im F-Objekt gespeicherten und neuen Argumente

## Dynamisch gebundene Argumente (Überversorgung)

- Besonderheit: Übergabe aller Parameter

## Komposition
