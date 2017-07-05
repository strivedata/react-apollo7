
/*eslint-disable no-console */
const express = require('express');
const expressVersion = require('express/package').version;
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const open = require('open');
const chalk = require('chalk');
const log = console.log;

// client config
const port = process.env.PORT || 4000;
const app = express();
const indexPath = path.join(__dirname, '../client/build/index.html');
const publicPath = path.join(__dirname, '../client/build');
const apiBaseUrl = process.env.API_BASE_URL;

// gzip
app.use(compression());

// body parser
app.use(bodyParser.json());

// serve static
app.use(express.static(publicPath));

// forwarding missing files to the index.html (enabled HTML5Mode)
app.get('/*', function(req, res) {
  res.sendFile(indexPath);
});

// pass server environment
app.get('/env.js', function(req, res){
  res.send("__env = { 'API_BASE_URL': '" + apiBaseUrl + "', 'NODE_ENV': '" + app.settings.env + "' }");
});

// serve port and open app
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {


    log(`${chalk.yellow(`
                    __
 _. ._   _  | |  _   /
(_| |_) (_) | | (_) /  ... ready for takeoff!
    |
Your app is compiled in production mode in /client/build.
 `)}
------------------------------------------
Node:               ${chalk.cyan(process.version)}
Environment:        ${chalk.cyan(process.env.NODE_ENV)}
------------------------------------------
Express:            ${chalk.cyan(expressVersion)}
Content-Encoding:   ${chalk.cyan('gzip')}
Source:             ${chalk.cyan('tools/buildServer.js')}
------------------------------------------
API: ${(process.env.API_BASE_URL) ? chalk.blue(process.env.API_BASE_URL) : chalk.blue('Based on apollo7.config and your api endpoints')}
APP: ${chalk.magenta(('http://localhost' || this.address().address) + ':' + this.address().port)}
`);

    // open in browser while dev-mode
    if (process.env.NODE_ENV !== 'production') {open(`http://localhost:${port}`);}
  }
});
