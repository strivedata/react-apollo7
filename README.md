
<h1>
<img src="http://strive.agency/public/react-apollo7-logo.png" width="200" alt="React apollo7 Logo"></br>
</h1>

> React apollo7 is a version of Cory House's  [React Slingshot starter kit](https://github.com/coryhouse/react-slingshot/) heavily customized  for [strive.agency](http://strive.agency/).

>
- [Why apollo7](#motivation)
- [Prerequisites](#pre)
- [Deploy to Heroku](#heroku_deployment)
- [Live Demo](#live_demo)
- [Setup](#setup)
- [How to use](#how_to_use)
- [API Configuration](#api_config)
- [API Mock Server](#api_mock)
- [Ant Design Components](#ant_design)
- [Sass Styles](#sass_styles)
- [Styled Components](#styled_components)
- [Vendor DLL](#vendor_dll)
- [Structure](#structure)
- [Simplified require/import paths](#babel_path_resover)
 

<br><a name="motivation"></a>Why apollo7?
------
We wanted a boilerplate that enables us to create apps really fast. Often we explore new Ideas with **Hackathons or Google Design Sprints** but it's been a hassle to create high-fidelity prototypes and turn them into production ready apps along the road.
Cory House's [React Slingshot](https://github.com/coryhouse/react-slingshot/) already offers a great starting point but in addition to that we wanted some other stuff as well:
 
* [Ant Design Components](https://ant.design/docs/react/introduce) 
* [React Styled Components](https://www.styled-components.com/) with [stylelint](https://stylelint.io/) support
* Mock-Server support for [api blueprints](https://apiblueprint.org/) via [Apiary](https://apiary.io/) and [Drakov](https://github.com/Aconex/drakov) 
* Promise based HTTP client for Redux via [Axios](https://github.com/svrcekmichal/redux-axios-middleware)
* Authentication and Authorization with Redux and React-Router via HOC from [redux-auth-wrapper](https://github.com/mjrussell/redux-auth-wrapper)
* Bundling Dynamically Linked Libraries
* Basic Express Server for production with gzip compression
* One Click Heroku Deployment for new project's
* A simple example app that showcases the usage of all the above


<br><a name="pre"></a>Prerequisites
------
Install [Node.js](https://nodejs.org), [Git](https://git-scm.com/downloads) and [Yarn](https://yarnpkg.com).
Node.js should be version 7 or greater. If you need to run multiple versions of node use [nvm](https://github.com/creationix/nvm). 
Make sure that hot reloading works properly and [disable safe write in your editor](http://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write).

**Optional:** <br>
Create a [Heroku](https://www.heroku.com) account and install the [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) if you want to deploy and preview the app in prod environment.


<br><a name="heroku_deployment"></a>Deploy to Heroku
------
Click the button below to automatically deploy React apollo7 on your Heroku account.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/strivedata/react-apollo7)


<br><a name="live_demo"></a>Live Demo
------
The starter kit includes a working example app that puts all additions above to use.<br>
Take a look at [http://react-apollo7.herokuapp.com](http://react-apollo7.herokuapp.com/) to see the example app in action.


<br><a name="setup"></a>Setup
------

    # Clone this repository
    $ git clone https://github.com/strivedata/react-apollo7
  
    # Go into the repository
    $ cd react-apollo7    

    
**Install** dependencies with [yarn](https://yarnpkg.com):
    
    $ yarn
    
**Install** dependencies with [npm](https://www.npmjs.com/):
    
    $ npm install   
     
**Update package.json** to customize package.json
    
    $ yarn setup
    $ npm run setup         

<br><a name="how_to_use"></a>How to use
------
 ```bash
 # Run app in development mode
 $ yarn start 
 $ npm run start
 
 # Browsersync build preview
 $ yarn build:preview  
 $ npm run build:preview
 
 # Create deployment ready build
 $ yarn build:prod 
 $ npm run build:prod
 
 # Run tests with jest
 $ yarn test 
 $ npm run test 
 
 # Preview deployment ready build gzipped via heroku cli
 $ heroku local

 # Deploy commited changes to heroku 
 $ git push heroku master
 
 # Note: For heroku take a look at the instructions above. 
 ``` 

<br><a name="api_config"></a>API Configuration
------
You can configure your app via [apollo7.config](.apollo7.config.js) in order to consume multiple API's.
If you enable Staging, Drakov or Apiary the app will make **all calls to that enabled API by default** . Of course it is possible to use one Api for a specific case if needed only for one specific thing e.g a single route, component or action.

```bash
# ./apollo7.config.js

export default {
  api: {
    development:  'http://localhost:3000/',               // enabled by default
    production:   'http://your.production.rest.api/v1',
    staging:      'https://your.staging.rest.api/v1/',
    drakov:       'http://localhost:7777/',
    apiary:       'http://your.apiary.mock.com',
    
    // Enable ONE Flag to overrule default endpoint ´development´
    UseStagingServer:       false,    // Staging Server
    UseDrakovMockServer:    false,    // Drakov Mock Server (offline access)
    SetDrakovResponseDelay: 1000,     // Emulate a slow internet connection with the mock server  
    UseApiaryMockServer:    false,    // Apiary Mock Server (online collaboration & documentation)
  },
  reduxLoggerEnabled:       true,     // Silence redux-logger
  stylelintSyntax:          'scss'    // Syntax stylelint validates against. 
                                      // Valid options are scss|css|less. Defaults to scss
};
```
 
<br><a name="api_mock"></a>API Mock Server
------
[Drakov ](https://github.com/Aconex/drakov) server to mock your data serving [api blueprints](https://apiblueprint.org/). 
This app's api blueprint file [client.api.md](/api-mock/blueprints/client.api.md) is located in the [api-mock](/api-mock) folder and is served local via Drakov. 
For Heroku there is an apiary version [http://docs.reactapollo7.apiary.io](http://docs.reactapollo7.apiary.io/).


 ```bash
 # Run mock server
 $ yarn start:mock
 
 # Run app & mock server
 $ yarn start:app-and-mock
 
 # Note: You can also utilize apiary.com API mock server instead 
 
 ``` 
    
<br><a name="ant_design"></a>Ant Design Components
------
React apollo7 utilizes the high quality [Components](https://ant.design/docs/react/introduce) following the [Ant Design specification](https://ant.design/docs/spec/introduce) to build good user experience.

**Usage:**<br>
Import js and styles from antd. Import LESS styles for the ui components to ensure that theming stays possible. <br>


```javascript
import { Row, Col, Card } from 'antd';
import 'antd/lib/row/style/css';  // Grid is only in css
import 'antd/lib/col/style/css';
import 'antd/lib/card/style/index.less'; // Use LESS here!


const MyComponent = () => {
  return (
      <Row gutter={38}>
        
        <Col xs={{ span: 24}}>
          <Card title="First Card">
            <div>Some awesome stuff</div>
          </Card>
        </Col>
        
        <Col xs={{ span: 12}}>
          <Card title="Second Card">
            <div>More awesome stuff</div>
          </Card>
        </Col>

      </Row>
  );
};
```

**Customize Theme** <br>
You can overwrite theme variables within the provided [antd.theme.config](/client/src/styles/antd.theme.config.js).

 ```javascript
 # ./client/src/styles/antd.theme.config.js
 
 export default {
   // Colors
   'primary-color'           :'#0CC2AA',
 
   // Background color <body>
   'body-background'         : '#eef5f9',
 
   // Layout
   'layout-body-background'  : '#eef5f9',
 
   // Text
   'text-color'              : 'fade(#373a3c, 85%)',
 
   // Media queries breakpoints
   // Extra small screen / phone
   'screen-xs'               : '480px',
   // Small screen / tablet
   'screen-sm'               : '768px',
   // Medium screen / desktop
   'screen-md'               : '992px',
   // Large screen / wide desktop
   'screen-lg'               : '1200px',
   // Extra Large screen / full hd
   'screen-xl'               : '1600px'
 };
 ``` 


<br><a name="sass_styles"></a>Sass Styles
------
For Ant Design Components you can style our app via Sass and utilize the [BEM Methodology](http://getbem.com/introduction/).


<br><a name="styled_components"></a>Styled Components
------
[Styled Components](https://www.styled-components.com/docs) is a library for React that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS.
This app supports styled-components with the [stylelint-processor](https://github.com/styled-components/stylelint-processor-styled-components) for linting. 


<br><a name="vendor_dll"></a>Vendor Dll's
------
This app utilises a [vendor.js](/client/src/vendors.js) file for production builds. It has no functionality, it just imports the libraries we use. Webpack’s DLLPlugin lets you build all of your dependencies into a single file. 
The file is consumed by Webpack's production config and increases the build speed. Plus it comes in handy if you use Webpack's cache mechanisms regarding performance.


```javascript
# ./client/src/vendors.js

require('react');
require('react-redux');
require('react-router-redux');
require('react-router');
require('redux');
require('redux-thunk');
require('redux-Axios-middleware');

# Note: You could also use ES6 style import here, but then we’d need Babel just to build the DLL. You can 
#       still use import and all the other ES6 goodness in your main project just as you’re used to.
 ``` 


<br><a name="structure"></a>Structure
------
Since React apollo7 is a heavily customized version of the [React Slingshot](https://github.com/coryhouse/react-slingshot) starter kit you have similar file structure with a few additional files and folders. 
We like to handle most of the configuration for linting and stuff in separate config files instead of putting all it into the package.json manifest. 
```yaml
.
├── api-mock                      # API Mock Server
│   │
│   └──blueprints                # API blueprint's served local via Drakov
│       ├── client.api.md         # Local version of api blueprint for the frontend client
│       ├── client.api.paw        # Paw file generated from the related api blueprint
│       └── *.md                  # API blueprints files
│
├── client                        # Frontend structure based on Cory House's React Slingshot starter kit
│   │
│   ├── build                     # Folder where the build script places the built app. Used for prod.
│   │   ├── dll                   # Dynamic Linked Libraries
│   │   │   └── vendors.dll.js    # Minified package containing all of your vendor libs
│   │   └── *.*                   # All files generated for the deployment built.
│   │
│   ├── dll                       # Dynamic Linked Libraries
│   │   └── vendor-manifest.json  # Map to all modules declared in src/vendors.js
│   │   
│   └── src                       # Source code
│       ├── actions               # Flux/Redux actions. List actions that can occur in the app.
│       ├── api                   # 
│       │   ├── api.js            # API's definitions utilizing Axios HTTP client via Axios middleware
│       │   └── auth.js           # Auth handling with redux auth wrapper and api token storage
│       │
│       ├── assets                # Static assets
│       │   ├── fonts             # Custom or third-party fonts
│       │   └── images            # PNG's, SVG' and JPG's
│       │
│       ├── components            # React components
│       ├── config                # 
│       │   ├── api.js            # Configure API's options to be passed from apollo7.config.js
│       │   └── storage.js        # Configure storage keys
│       │
│       ├── constants             # Application constants including constants for Redux
│       ├── containers            # Top-level React components that interact with Redux
│       ├── layouts               # Multiple Ant Design layouts to be used in routes
│       ├── reducers              # Redux reducers. Your state is altered here based on actions
│       ├── selectors             # Functions that retrieve snippets of the Redux state for Components
│       ├── store                 # Redux store configuration
│       ├── styles                # CSS Styles, typically written in Sass
│       │   ├── antd.theme.config # Configure Ant Design Less Variables to be overwritten
│       │   ├── styles.scss       # Main Sass file
│       │   └── *.scss            # App Sass styles
│       │
│       ├── utils                 # Useful utility functions
│       ├── favicon.ico           # Keeps the browser from throwing a 404 in dev. Not used in prod.
│       ├── index.ejs             # Template for homepage
│       ├── index.js              # Entry point for your app
│       ├── routes.js             # The routes and corresponding layouts for your app
│       ├── vendors.js            # All shared libs you use to create the Dynamic Linked Libraries files
│       └── webpack-public-path.js # Used by webpack to set the public path at runtime
│
│── tools                      # Node scripts that run build related tools (Some with babel-cli)
│   │
│   ├── .yarnclean             # Prevents browser sync-ui from breaking cause of clean
│   ├── analyzeBundle.js       # Analyzes the webpack bundle
│   ├── build.dll.js           # Build vendors manifest and file
│   ├── build.js               # Runs the production build
│   ├── buildServer.js         # Starts Express server with gzip compression
│   ├── chalkConfig.js         # Centralized configuration for chalk (adds color to console statements)
│   ├── fileMock.js            # Emulating url's that webpack provides via the file-loader
│   ├── jestTestPolyFills.js   # Polyfills needed for testing with jest
│   ├── nodeVersionCheck.js    # Confirm supported Node version is installed
│   ├── preStartMessage.js     # Message displayed when the app starts
│   ├── removeDemo.js          # Remove demo app script
│   ├── srcServer.js           # Starts dev webserver with hot reloading and opens your default browser
│   ├── startMessage.js        # Display message when development build starts
│   ├── updateHerokuAppJson.js # Configures Drakov based on settings in ./apollo7.config.js
│   ├── updateDrakovConfig.js  # Configures Heroku app.json based on settings in ./apollo7.config.js
│   └── setup                  # Scripts for setting up a new project using react apollo7
│       ├── setup.js           # Configure project set up
│       ├── setupMessage.js    # Display message when beginning set up
│       └── setupPrompts.js    # Configure prompts for set up
│
├── .apollo7.config.js         # Configures react apollo7 starter kit e.g. api endpoints 
├── .babelrc                   # Configures Babel
├── .browserslistrc            # Configures browerlist. 
├── .editorconfig              # Configures editor rules
├── .env                       # Heroku local environment variables for `heroku local` preview
├── .eslintrc                  # Configures ESLint                                                      
├── .gitignore                 # Tells git which files to ignore
├── .istanbul.yml              # Configure istanbul code coverage
├── .jest.config               # Configures Jest
├── .npmrc                     # Configures npm to save exact by default
├── .postcss.config.js         # Configures postcss
├── .stylelintrc               # Configures Stylelint
├── .stylelintrc.components    # Configures Stylelint for react styled components
├── .webpack.config.dev.js     # Configures webpack for development builds
├── .webpack.config.dll.js     # Configures webpack for dynamic linked libraries package
├── .webpack.config.prod.js    # Configures webpack for production builds
├── app.json                   # Heroku env variables, add-ons, required to run the app on Heroku
├── LICENSE                    # License(s) for this project.
├── package.json               # Package configuration. The list of 3rd party libraries and utilities
├── Profile                    # Commands run by your application’s dynos on Heroku 
├── README.md                  # This file.
└── yarn.lock                  # Auto generated file by yarn to store exact versions for dependencies 
```


<br><a name="babel_path_resover"></a>Simplified require/import paths
------
This app utilizes the [babel module resolver plugin](https://github.com/tleunen/babel-plugin-module-resolver). It simplifies the require/import paths in your project.
```javascript
// Use this:
import Something from 'utils/somthing';
// Instead of that:
import Something from '../../../../utils/somthing';

// And it also work with require calls
// Use this:
const Something = require('utils/somthing');
// Instead of that:
const Something = require('../../../../utils/somthing');
```

<br>
<br>

## Credits
This repo is a heavily customized version Cory House'S awesome [Slingshot - React + Redux starter kit](https://github.com/coryhouse/react-slingshot/). 
<br>Check out [Cory House's Pluralsight Courses](https://www.pluralsight.com/authors/cory-house) for some amazing resources related to JS, React and coding in general.
<div>The apollo7 Logo Icon was made by <a href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

## License
MIT &copy; Cory House / Adam Kassama

