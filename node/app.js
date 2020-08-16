const { fibonacci, say } = require('../pkg/ssvm_nodejs_starter_lib.js');

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  const num = parseInt(queryObject['number'], 10
  )
  console.log('testing', fibonacci(num))

  res.end()

  // if (!queryObject['name']) {
  //   res.end(`Please use command curl http://${hostname}:${port}/?name=MyName \n`);
  // } else {
  //   res.end(say(queryObject['name']) + '\n');
  // }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
