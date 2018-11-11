* Ich setze die unter "6.7.2 Abschlüsse" vorgeschlagene Annahme voraus, dass Ausdrücke zur Initialisierung von Variablen in `let in`-Ausdrücken keine Referenzen Variablen rechts von ihnen im gleichen `let`-Ausdruck enthalten.
* Die Übersetzung eines `let`-Ausdrucks arbeitet im Script mit dem Pegelzeiger _p_. Dessen Wert soll zwar _SP - SP0_ sein, aber das muss an anderer Stelle als in der Codeerzeugung des `let`-Ausdrucks berücksichtigt werden, weil dort ja die Adressen nur allokiert, aber nicht zugegriffen werden. Deshalb setze ich stattdessen: ρ' = ρ + {y_i -> (L, i-1) | i = 1..n}
* Idee: Anstatt Funktionen auszuwerten, können wir bei Funktionsanwendung *immer* die Parameter in den Globalvektor kopieren (analog zu **wrap**), bis wir auf eine 0-stellige Funktion bzw. ein Closure reduzieren.

* Anstatt den Funktionsaufruf in funktionalen Sprachen umzubauen, könnte man ihn auch in imperativen Sprachen ändern.
