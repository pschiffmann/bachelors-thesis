```Haskell
(.) :: (b -> c) -> (a -> b) -> (a -> c)
```

```
let {
  dot = (\f g x -> f (g x));
  double = (\x -> x + x);
  square = (\x -> x * x);
} in
  -- (double `dot` square) 5
  (dot double square) 5
```
