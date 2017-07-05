// Mission Control for React Apollo7

export default {
  api: {
    development:  'http://localhost:3000/',
    production:   'http://private-b5715-reactapollo7.apiary-mock.com/',
    staging:      'https://api-staging.strivehq.com/v1/',
    drakov:       'http://localhost:7777/',
    apiary:       'http://private-b5715-reactapollo7.apiary-mock.com/',

    // Enable ONE Flag to overrule default endpoint ´development´
    UseStagingServer:           false,    // Staging Server (useful for pipelines)
    UseDrakovMockServer:        true,     // Drakov API Blueprint Mock Server (offline access)
    SetDrakovResponseDelay:     1000,     // Get an idea of your user experience with a slow internet connection
    DrakovStealthMode:          false,     // Suppress the logging output of Drakov
    UseApiaryMockServer:        false,    // Apiary API Blueprint Mock Server (online collaboration & documentation)
  },
  reduxLoggerEnabled:           false,     // Silence redux-logger
  stylelintSyntax:              'scss'    // Syntax stylelint validates against. Valid options are scss|css|less. Defaults to scss
};
