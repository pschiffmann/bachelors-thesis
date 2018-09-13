# Implementierungsvarianten des Funktionsaufrufs in funktionalen Sprachen

## 1 Problembereich der Arbeit

Um ein in einer Hochsprache geschriebenes Programm von einem Rechner ausführen zu lassen, muss es zuerst in die Maschinensprache des Rechners übersetzt werden. Diese Aufgabe kann von einem Programm übernommen werden, einem sogenannten Compiler.

Um Funktionsdefinitionen wiederverwenden zu können, generiert der Compiler dabei eine Maschinencode-Sequenz für jede Funktion. Ein Funktionsaufruf wird dann durch Anspringen der ersten Funktions-Adresse, ein Verlassen der Funktion durch Zurückspringen an die Ursprungsadresse implementiert. Funktionsparameter und Rückgabewerte müssen dabei häufig auf dem stack zwischengespeichert werden.

## 2 Problemstellung

Die Semantik imperativer Sprachen wie C diktiert die Reihenfolge und Position der Funktionsargumente auf dem stack. Funktionale Sprachen mit Bedarfsauswertung wie Haskell können hingegen grundsätzlich mit verschiedenen Aufrufkonventionen implementiert werden. Diese Freiheit ermöglicht einem Compiler-Autor neue Optimierungsmöglichkeiten; gleichzeitig wirft sie die Frage auf, welche Variante denn die beste ist.

## 3 Lösungsansatz

Gegenstand der Arbeit sind die folgenden Implementierungsvarianten:

* Parameter über bzw. unter den organisatorischen Zellen oder als Halden-Vektor analog zum Globalvektor
* Parameterreihenfolge normal bzw. umgedreht

Diese sollen sowohl theoretisch als auch empirisch auf die folgenden Kriterien getestet werden:

* Laufzeit-Performance
* Hardware-Ausnutzung bzw. -Anforderungen (Register, heap memory)
* Anwendbarkeit bei Currying
* Verständlichkeit für Compiler-Autoren

## 4 Ziel meiner Arbeit

Ziel der Arbeit ist es, eine fundierte Empfehlung für eine oder mehrere der oben genannten Implementierungsvarianten zu geben. Diese wird sich primär auf theoretische Überlegungen stützen, diese jedoch nach Möglichkeit auch durch praktische Versuche validieren.

Optional kann als letzter Arbeitsschritt noch ein Vergleich mit dem Glasgow Haskell Compiler aufgestellt werden, um zu prüfen, ob sich die Ergebnisse dieser Arbeit mit der aktuellen Industriepraxis decken.

## 5 Arbeitsprogramm

* Literaturrecherche
* Einarbeitung Maschinensprache (x86? ARM? RISC-V?)
* Konstruktion von Beispielen
* theoretische Analyse
* kleinen Compiler für die verschiedenen Varianten schreiben?
* empirische Analyse
* Evaluation
* Vergleich mit GHC?
* Anfertigen der Ausarbeitung
