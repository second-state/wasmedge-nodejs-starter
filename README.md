# Writing algorithms in Rust and using them in Node.js

This code is based on Second State's tutorials. You can find detailed instructions here: https://www.secondstate.io/articles/getting-started-with-rust-function/

Currently two algorithms are implemented, checking whether a number is prime and getting nth Fibonacci term. 

## Comparing performance via a web interface

This is not intended to be a truly scientific benchmark of performance, but you can compare the Rust algorithm with its equivalent Javascript version by calling them via the web interface.(uses JQuery to make AJAX requests to the Node.js Express server) If you have a good benchmarking tool set up in the server, you can modify the html code to display the results.

Example:![Web interface example](./screenshot.png?raw=true "Screenshot")

## Algorithms 

- [x] Checking primality
- [x] Getting nth Fibonacci term
- [ ] Factorial
- [ ] Array sort
- [ ] String manipulation/parsing
- [ ] Nested JSON parsing