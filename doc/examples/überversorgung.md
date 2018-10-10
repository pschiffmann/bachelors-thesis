```Haskell
let {
  inc1 = (\a -> a + 1);
  omitSnd = (\f _ -> f);
} in omitSnd inc1 2 3
```
