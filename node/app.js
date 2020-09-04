const { say } = require('../pkg/ssvm_nodejs_starter_lib.js');

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0'; 
const port = process.env.PORT || 3000;
const appname = (process.env.HEROKU_APP_NAME) ? process.env.HEROKU_APP_NAME + '.herokuapp.com' : hostname + ':' + port;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  if (!queryObject['name']) {
    res.end(`Please use command curl http://${appname}/?name=MyName \n`);
  } else {
    res.end(say(queryObject['name']) + '\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
