const express = require('express');
const { fibonacci, is_prime } = require('../pkg/ssvm_nodejs_starter_lib.js');

// const http = require('http');
// const url = require('url');
// const hostname = '0.0.0.0';
const app = express();
const port = 3000;
const hostname = '0.0.0.0';
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

// const server = http.createServer((req, res) => {
//   const queryObject = url.parse(req.url,true).query;
//   const num = parseInt(queryObject['number'], 10
//   )
//   console.log('testing', is_prime(num))

//   res.end()

//   // if (!queryObject['name']) {
//   //   res.end(`Please use command curl http://${hostname}:${port}/?name=MyName \n`);
//   // } else {
//   //   res.end(say(queryObject['name']) + '\n');
//   // }
// });

app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/fibonacci', function (req, res) {
  let a = parseInt(req.body.num);
  let result = fibonacci(a).toString();
 
  res.send(result);
})

app.post('/is_prime', function (req, res) {
  let a = parseInt(req.body.num);
 
  res.send(is_prime(a));
})

app.listen(port, () => 
  console.log(`Server running at http://localhost:${port}/`));
