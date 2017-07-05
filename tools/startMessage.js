
/* eslint-disable no-console */

import chalk from 'chalk';
const log = console.log;
import apollo7 from '../.apollo7.config';


log(`${chalk.yellow(` 
                     __ 
  _. ._   _  | |  _   / 
 (_| |_) (_) | | (_) /  ... dev mode ...
     |          `)}       
 ------------------------------------------
 Node:                ${chalk.cyan(process.version)}
 ------------------------------------------
 UseStagingServer:    ${chalk.cyan(apollo7.api.UseStagingServer ? 'active' : 'disabled')}
 UseDrakovMockServer: ${chalk.cyan(apollo7.api.UseDrakovMockServer ? 'active' : 'disabled')}
 UseApiaryMockServer: ${chalk.cyan(apollo7.api.UseApiaryMockServer ? 'active' : 'disabled')}
 Source:              ${chalk.cyan('apollo7.config.js')}
 ------------------------------------------
 
`);
