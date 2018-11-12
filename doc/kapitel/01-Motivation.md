# Motivation

Die aktuelle Lehrveranstaltung Programmiersprachen und Übersetzer an der Leibniz Universität Hannover behandelt das Thema der Übersetzung von Hochsprachenprogrammen in Maschinenbefehle. Die dafür genutzten Übersetzungsschemata basieren auf dem Buch "Übersetzerbau – virtuelle Maschinen"[1]. Dieses erklärt unter anderem die Funktionsweise von Compilern für imperative und funktionale Sprachen am Beispiel geeigneter Hochsprachen und jeweils eigener virtueller Maschinen. Als Quellsprachen werden reduzierte Varianten von C und Haskell eingesetzt.

Die Ausführungsmodelle dieser Sprachen unterscheiden sich zuweilen stark voneinander, was sich auch auf die Laufzeitumgebungen und somit die virtuellen Maschinen und Befehlssätze auswirkt. Das stellt nun aber ein organisatorisches bzw. didaktisches Problem dar, denn jeder Unterschied zwischen den Übersetzungszielen muss natürlich in der Vorlesung erläutert werden und kostet somit Zeit und Komplexität, obwohl diese gar nicht zu den Kerninhalten der Veranstaltung zählen. Es gibt also gute Gründe, die Laufzeitumgebungen imperativer und funktionaler Sprachen aneinander anzugleichen, um die Struktur der Lehrveranstaltung zu optimieren.

Diese Arbeit setzt sich mit einem der Unterschiede auseinander, dem Funktionsaufruf. Sie reflektiert die in [1] gewählte Implementierung des Funktionsaufrufs für funktionale Sprachen und vergleicht sie mit anderen möglichen Varianten. Sie zeigt damit Möglichkeiten zur Vereinheitlichung der imperativen und funktionalen Laufzeitumgebungen und Übersetzungsfunktionen auf und stellt gleichzeitig die Nachteile vor, die sich daraus für die Übersetzungsschemata und die Laufzeiteffizienz ergäben.

## Reale und virtuelle Maschinen

- VM anstatt z.B. x86; Erläuterung in [1]
- keine general purpose Register, da Registerallokation zu komplex

## Aufgaben der Laufzeitumgebung

- Nicht alle Features der Sprache können direkt in Maschinenbefehlen umgesetzt werden
- Beispiel: floating point Arithmetik simulieren. Nicht Teil der Laufzeitumgebung, da der Code bereits zur Compilezeit erzeugt werden kann.

Die Laufzeitumgebung stellt diejenigen Features einer Hochsprache bereit, die Teil der Sprache sind, aber erst zur Laufzeit umgesetzt werden können. Dazu zählt in vielen Sprachen zum Beispiel die Speicherverwaltung: In C allokiert der Befehl `malloc(n)` einen _n_ Bytes großen Block auf dem Heap. Der Befehl `free(p)` gibt einen solchen Block, auf den der Pointer _p_ zeigt, wieder frei, sodass er erneut allokiert werden kann. Damit diese Befehle korrekt arbeiten können, muss zur Laufzeit ein Index gepflegt werden, aus dem ersichtlich ist, welche Zellen auf dem Heap aktuell belegt oder frei sind. Diese Verwaltungsaufgabe fällt der Laufzeitumgebung zu.

- benötigt in Haskell u.a. für unveränderliche Variablen, Closures (verzögerte Auswertung), garbage collection
- Laufzeitumgebung wird durch Instruktionen der VM bereitgestellt; deshalb werden verschiedene VMs für C und Haskell definiert

## Übersetzung

- lexikale, syntaktische, semantische Analyse
- AST
- in PSÜ keine IR, kaum Optimierungen
- Übersetzungsfunktionen

Als Einführung in das Thema eignet C sich ideal, denn die Sprache stellt nur eine vergleichsweise geringe Abstraktionsebene über der Hardware dar. Der explizite Aufrufbaum, Wertzuweisungen an Variablen, sowie Sprungbefehle und -marken haben direkte Entsprechungen in Assembler-Instruktionen. Höhere Sprachkonstrukte wie bedingte Anweisungen, Schleifen und in begrenztem Maße sogar Funktionsaufrufe können zur Veranschaulichung der Übersetzungsschemata bereits im C-Code zurück in einfache Sprungbefehle "entzuckert" werden.
