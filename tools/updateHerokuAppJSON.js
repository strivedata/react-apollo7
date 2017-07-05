
/* eslint-disable no-console */
import {update, load} from 'json-update';
import apolloConfig from '../.apollo7.config';
import chalk from 'chalk';

const log = console.log;


load('./app.json', function(err, currentAppJson) {
  update('./app.json', { ...currentAppJson, env: { API_BASE_URL: apolloConfig.api.production} }, function(err) {
    if (typeof err !== "undefined" && err !== null) {
      log("Error updating app.json: " + err.message);
    }
    log(`
    ${chalk.blue('HEROKU APP CONFIG ===> API_BASE_URL = ' + apolloConfig.api.production)}
    `);
  });
});
