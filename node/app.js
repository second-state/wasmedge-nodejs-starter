'use strict';

import express from 'express';
import path from 'path';

import {
  performance,
  PerformanceObserver
} from 'perf_hooks';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();

//experimenting with async imports
const wasm = await import('../pkg/ssvm_nodejs_starter_lib.js');
const is_prime = wasm.default.is_prime;
const fibonacci = wasm.default.fibonacci;

const port = 8080;
const hostname = '0.0.0.0';
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/fibonacci', function (req, res) {
  let result = {};
  let a = parseInt(req.body.num);

  if (typeof a !== 'number') {
    res.send('Not a valid number');
  }

  let t0 = performance.now();
  result.num = fibonacci(a).toString();
  let t1 = performance.now();
  result.bench = t1-t0;
  
  res.json(result);
})

app.post('/js_fibonacci', function (req, res) {
  let result = {};
  function fibonacciJS(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num < 2) return num;
  
    return memo[num] = fibonacciJS(num - 1, memo) + fibonacciJS(num - 2, memo);
  }
   let a = parseInt(req.body.num);

   if (typeof a !== 'number') {
    res.send('Not a valid number');
  }

  let t0 = performance.now();
  result.num = fibonacciJS(a).toString();
  let t1 = performance.now();
  result.bench = t1-t0;
  
  res.json(result);
})

app.post('/is_prime', function (req, res) {
  let result = {};
  let a = parseInt(req.body.num, 10);

  if (typeof a !== 'number') {
    res.send('Not a valid number');
  }

  let t0 = performance.now();
  result.num = is_prime(a).toString();
  let t1 = performance.now();
  result.bench = t1-t0;
  
  res.json(result);
})

app.post('/js_is_prime', function (req, res) {
  let result = {};

  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}


   let a = parseInt(req.body.num);

   if (typeof a !== 'number') {
    res.send('Not a valid number');
  }

  let t0 = performance.now();
  result.num = isPrime(a).toString();
  let t1 = performance.now();
  result.bench = t1-t0;
  
  res.json(result);
})

app.listen(port, () => 
  console.log(`Server running at http://localhost:${port}/`));
