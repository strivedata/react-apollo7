
/* eslint-disable no-console */
import drakovConfig from '../.drakovrc';
import apolloConfig from '../.apollo7.config';
import chalk from 'chalk';
import * as fs from 'fs';

const log = console.log;

drakovConfig.delay = apolloConfig.api.SetDrakovResponseDelay;
drakovConfig.stealthmode = apolloConfig.api.DrakovStealthMode;


fs.writeFile('.drakovrc.js', 'module.exports =' + JSON.stringify(drakovConfig, null, 2), (err) => {
  if (err) log("Error updating drakovrc.js: " + err.message);
  log(`
    ${chalk.blue('DRAKOV CONFIG ===> API DElAY IS SET TO = ' + drakovConfig.delay + 'ms')}
    ${chalk.yellow('You can change the delay in ./apollo7.config.js')}
    `);
});
