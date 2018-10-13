f a b c = a b c

f (+) 3 4
f (.) (3+) (4*) 5



-- `(+)` könnte direkt auf zwei Parameter angewendet werden, das Erzeugen eines
-- closure `(3+)` wäre nicht nötig.

-- `g` muss zuerst ausgewertet werden; erst danach kann 4 auf das Ergebnis von
-- `g (3+)` angewendet werden.
let g = (\x -> x . x) in f g (3+) 4

-- zweilstellige Funktion `(.)`, angewendet auf einstellige Funktion erzeugt einstellige Funktion

-- Auswertungsstrategie 1: alle vier Parameter werden an g übergeben, damit add3
--                         im Scope von g ausgewertet und direkt das Ergebnis
--                         zurückgegeben werden kann.
-- Auswertungsstrategie 2: g wird nur auf die ersten zwei Parameter angewendet,
--                         das Ergebnis ist ein F-Objekt mit zwei leeren
--                         Argumenten. add3 wird anschließend im root scope
--                         ausgewertet. Eine Überversorgung mit Parametern kommt
--                         nie vor.
g a b = a b
add3 a b c = a + b + c
g add3 1 2 3
