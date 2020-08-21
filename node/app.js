'use strict';

import express from 'express';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();

import pkg from '../pkg/ssvm_nodejs_starter_lib.js';
const { fibonacci, is_prime } = pkg;


const port = 3000;
const hostname = '0.0.0.0';
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/fibonacci', function (req, res) {

  let a = parseInt(req.body.num);

  if (typeof a !== 'number') {
    res.send('Not a valid number');
  }

  console.time();
  let result = fibonacci(a).toString();
  console.timeEnd();
 
  res.send(result);
})

app.post('/js_fibonacci', function (req, res) {

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

  console.time();
  let result = fibonacciJS(a).toString();
  console.timeEnd();

  res.send(result);
})

app.post('/is_prime', function (req, res) {
  let a = parseInt(req.body.num, 10);

  if (typeof a !== 'number') {
    res.send('Not a valid number');
  }


  console.time();
  let result = is_prime(a);
  console.timeEnd();
  res.send(result);
})

app.post('/js_is_prime', function (req, res) {

  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

   console.time();
   let a = parseInt(req.body.num);
   console.timeEnd();

   if (typeof a !== 'number') {
    res.send('Not a valid number');
  }

   let result = isPrime(a).toString();
 
  res.send(result);
})

app.listen(port, () => 
  console.log(`Server running at http://localhost:${port}/`));
