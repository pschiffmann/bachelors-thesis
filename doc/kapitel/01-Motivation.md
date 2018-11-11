# Motivation

Die aktuelle Lehrveranstaltung Programmiersprachen und Übersetzer an der Leibniz Universität Hannover behandelt das Thema der Übersetzung von Hochsprachenprogrammen in Maschinenbefehle. Die dafür genutzten Übersetzungsschemata basieren auf dem Buch "Übersetzerbau – virtuelle Maschinen"[Üb]. Dieses erklärt unter anderem die Funktionsweise von Compilern für imperative und funktionale Sprachen am Beispiel geeigneter Hochsprachen und jeweils eigener virtueller Maschinen. Als Quellsprachen werden reduzierte Varianten von C und Haskell eingesetzt.

Die Ausführungsmodelle dieser Sprachen unterscheiden sich zuweilen stark voneinander, was sich auch auf die Laufzeitumgebungen und somit die virtuellen Maschinen und Befehlssätze auswirkt. Das stellt nun aber ein organisatorisches bzw. didaktisches Problem dar, denn jeder Unterschied zwischen den Übersetzungszielen muss natürlich in der Vorlesung erläutert werden und kostet somit Zeit und Komplexität, obwohl diese gar nicht zu den Kerninhalten der Veranstaltung zählen. Es gibt also gute Gründe, die Laufzeitumgebungen imperativer und funktionaler Sprachen aneinander anzugleichen, um die Struktur der Lehrveranstaltung zu optimieren.

Diese Arbeit setzt sich mit einem der Unterschiede auseinander, dem Funktionsaufruf. Sie reflektiert die in [Üb] gewählte Implementierung des Funktionsaufrufs für funktionale Sprachen und vergleicht sie mit anderen möglichen Varianten. Sie zeigt damit Möglichkeiten zur Vereinheitlichung der imperativen und funktionalen Laufzeitumgebungen und Übersetzungsfunktionen auf und stellt gleichzeitig die Nachteile vor, die sich daraus für die Übersetzungsschemata und die Laufzeiteffizienz ergeben.

## Maschinensprache, Hochsprache und Laufzeitumgebung

Jede CPU, ob real oder simuliert, versteht erst einmal nur eine einzige Sprache, ihre eigene Maschinensprache. Ein Programm in dieser Sprache ist lediglich eine Folge von Zahlen, die im Speicher des Computers vorgehalten werden und jeweils eine direkte

- Haskell: unveränderliche Variablen, Closures

## stack-basierte virtuelle Maschine

- VM anstatt z.B. x86; Erläuterung in [Üb]
- keine general purpose Register, da Registerallokation zu komplex

## Übersetzung

- lexikale, syntaktische, semantische Analyse
- AST
- keine IR
- Übersetzungsfunktionen

Als Einführung in das Thema eignet sich ideal eine imperative Sprache wie C, denn die Sprache stellt nur eine vergleichsweise geringe Abstraktionsebene über der Hardware dar. Der explizite Aufrufbaum, Wertzuweisungen an Variablen, sowie Sprungbefehle und -marken haben direkte Entsprechungen in Assembler-Instruktionen. Höhere Sprachkonstrukte wie bedingte Anweisungen, Schleifen und in begrenztem Maße auch Funktionsaufrufe können zur Veranschaulichung der Übersetzungsschemata bereits im C-Code zurück in einfache Sprungbefehle "entzuckert" werden.
