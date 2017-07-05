// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
import webpack from 'webpack';
import config from '../.webpack.config.dll';
import {chalkError, chalkSuccess, chalkWarning, chalkProcessing} from './chalkConfig';

console.log(chalkProcessing('Generating minified vendors libraries bundle. This will take a minute...'));

webpack(config).run((error, stats) => {
  if (error) { // so a fatal error occurred. Stop here.
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalkError(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  })}`);

  // if we got this far, the build succeeded.
  console.log(chalkSuccess(` 
  ✓ Build vendors complete`
  ));

  return 0;
});
