# Übergabe umgekehrt über dem FP

## Überversorgung

```
let {
  inc1 = (\a -> a + 1);
  omitSnd = (\f _ -> f);
} in omitSnd inc1 2 3
```

## Unterversorgung

```
let {
  add = (\a b -> a + b);
  add2 = (\a -> add a 2);
} in add2 3
```

```
dummy 2,
mkV 0, mkF ADD, jump B, ADD: testArg 2, pushL 0, getB, pushL -1, getB, add, mkB, return 2, B:
rewrite 2,
pushL 1, mkV 1, mkF ADD2, jump C,
ADD2: testArg 1, mark D, loadc 2, mkB, pushL 0, setSP0, pushG 0, apply, D: return 1,
C: rewrite 1,
mark RET, loadc 3, mkB, setSP0, pushL 2, apply, RET:
slide 2 1,
halt
```

----------

```
let {
  apply_rtl = (\x f -> f x);
  add = (\a b -> a + b);
} in apply_rtl 2 (add 3)
```
