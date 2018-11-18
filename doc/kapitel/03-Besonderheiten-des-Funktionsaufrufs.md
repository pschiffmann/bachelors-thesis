# Besonderheiten des Funktionsaufrufs

- Funktionen als first class citizens
- C: Funktionen können in Variablen gespeichert werden (Funktionspointer)
- Haskell: lambda expressions, Funktionsobjekte speichern Referenz auf scope (und Argumente bei partiell angewandten Funktionen)
- FMa-Implementierung: Statische Analyse einsparen, da zu aufwändig für Lehrveranstaltung

## Currying (Unterversorgung)

Beispiel:
```
let {
  add    = (\a b -> a + b);
  addTwo = add 2;
} in
addTwo 3
```

Die im `let`-Ausdruck deklarierte Variable `addTwo` enthält das Ergebnis einer "unterversorgten" Funktionsanwendung:
Der Wert 2 wurde bereits an den Parameter `a` der Funktion `add` gebunden, aber da noch kein Wert für `b` zur Verfügung steht, ist das Ergebnis keine Zahl, sondern eine nun einstellige Funktion.
Der Aufruf `addTwo 3` ruft anschließend diese Funktion auf und übergibt das fehlende Argument.

Damit dieses Programm funktioniert, muss der Compiler teilweise Funktionsanwendung überhaupt implementieren.
Das erfordert erstens, dass Funktionen eine Unterversorgung überhaupt erkennen;
zweitens, dass die Auswertung in diesem Fall verzögert werden kann, bis genügend Argumente vorhanden sind;
und drittens, dass die alle Argumente bis zum Zeitpunkt der Auswertung zwischengespeichert werden, damit sie dann noch zur Verfügung stehen.

Um die letzte Anforderung umsetzen zu können, besitzen F-Objekte ein Feld _ap_, das einen Pointer auf eine Liste bereits übergebener Argumente enthält.
Es reicht aber nicht aus, die Argumente nur zu speichern.
Da bei der Übersetzung der Funktion nicht bekannt ist, wie viele der Argumente zur Laufzeit direkt auf dem stack liegen und wie viele auf dem heap zwischengespeichert wurden, benötigen wir außerdem noch ein Adressierungsschema, das die Argumente auf jeden Fall wiederfindet.
Maurer hat dieses Problem gelöst, indem er alle Argumente, die zu Beginn des Funktionsaufrufs auf dem heap liegen, mit auf den stack lädt, und dann alle Argumente über den stack (relativ zum Register SP0) addressiert.

## Dynamisch gebundene Argumente (Überversorgung)

Beispiel:
```
let {
  inc    = (\x -> x + 1);
  dec    = (\x -> x - 1);
  id     = (\x -> x);
  toZero = (\x ->      if x < 0 then inc
                  else if x > 0 then dec
                  else               id );
} in
toZero 5 5
```

Wir sehen, dass das erste Argument des `toZero`-Aufrufs für die Funktion selbst bestimmt ist, und dass dieser Aufruf auf die Funktion `dec` ausgewertet wird, die dann das zweite Argument aufnimmt.
Der Compiler sieht es aber nicht;
er hat keine andere Wahl, als `toZero` _alle_ Argumente zu übergeben.^1
Als direkte Folge daraus ist die Funktion jetzt "überversorgt".
`toZero` muss sich nun so viele Argumente nehmen, wie sie selbst erwartet, und die übrigen Argumente so ablegen, dass `dec` sie findet.

## Komposition

Beispiel:
```
let {
  double = (\x -> x + x);
  square = (\x -> x * x);

  -- In Haskell könnten wir schreiben:
  --   f . g
  -- Unsere reduzierte Sprache unterstützt den `.` Operator nicht explizit, aber
  -- wir können ihn als Funktion nachbauen:
  dot    = (\f g x -> f (g x));
} in
dot f g 5
```

## Anforderungen

Insgesamt muss ein Aufrufschema also folgende Szenarien unterstützen:

 1. Eine Funktion wird unterversorgt.
    Das Ergebnis ist ein neues Funktionsobjekt, das alle bereits übergenen Argumente in seinem _ap_-Vektor speichert.
 2. Ein Funktionsobjekt, dessen _ap_ bereits Werte enthält, wird aufgerufen.
    Die alten und neuen Argumente müssen zusammengeführt werden.
 3. Eine Funktion wird überversorgt.
    Wir erwarten, dass das Ergebnis eine neue Funktion sein wird, die dann im gleichen Kellerrahmen ausgewertet wird.
    Sie muss die übrig gebliebenen Argumente benutzen.

----------

<sup>
1: Genau genommen gäbe es noch eine andere Möglichkeit:
Funktionsanwendungen könnten grundsätzlich nur einen einzigen Parameter an die Funktion übergeben.
Damit würde man das Prinzip des Currying ganz buchstäblich implementieren.
Das vereinfacht zwar die Übersetzung von Funktionsaufrufen erheblich, weil bei ein-elementigen Argumentlisten die Auswertungsreihenfolge (links nach rechts bzw. rechts nach links) keine Rolle mehr spielt.
Dieses Vorgehen würde aber erfordern, dass für jeden Parameter ein eigener Funktionsaufruf durchgeführt und ein neues F-Objekt allokiert werden.
</sup>
