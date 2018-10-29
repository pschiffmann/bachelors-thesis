Sei `e` =
```Haskell
let {
  n = 3;
  incN = (\x -> x + n)
} in incN n
```

Dann berechnet sich `code e` zu:

```
  code e
= code_V^∅ e, halt
= dummy 2, code_C^ρ1 3,  rewrite 2, code_C^ρ1 (\x->x+n), rewrite 1, code_V^ρ1 incN n, slide 2 1, ...
= dummy 2, loadc 3, mkB, rewrite 2, ...
=
```
mit ρ1 = {n → (L, 0), incN → (L, 1)},
```
  code_C^ρ1 (\x->x+n)
= pushG 0, mkV 1, mkF A, jump B, A: testArg 1, code_V^ρ2 x+n, return 1, B: ...
```
mit **free**(\x->x+n) = {n} und ρ2 = {x → (L, 0)} ⋃ {n → (G, 0)},
```
  code_V^ρ2 x+n
= code_B^ρ2 x,         code_B^ρ2 n,         add, mkB
= code_V^ρ2 x,   getB, code_V^ρ2 n,   getB, add, mkB
= pushL 0, eval, getB, pushG 0, eval, getB, add, mkB
```
sowie
```
  code_V^ρ1 incN n
= mark C, code_C^ρ1 n, setSP0, code_C^ρ1 incN, apply, C: ...
= mark C, pushL 0,     setSP0, pushL 1,        apply, C: ...
```

Insgesamt also:
```
dummy 2, loadc 3, mkB, rewrite 2, pushG 0, mkV 1, mkF A, jump B, A: testArg 1, pushL 0, eval, getB, pushG 0, eval, getB, add, mkB, return 1, B: rewrite 1, mark C, pushL 0, setSP0, pushL 1, apply, C: slide 2 1, halt
```
