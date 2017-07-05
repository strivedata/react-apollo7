import axios from 'axios';
import auth from 'api/auth';
import apollo7 from '../../../.apollo7.config';

const configureApiEndpoints = ({server_environment='development'} = {}) => {

  const configureClient = (server_environment) => {
    if (server_environment === 'production') {return 'production';}
    else if (apollo7.api.UseStagingServer) {return 'staging';}
    else if (apollo7.api.UseDrakovMockServer) {return 'drakov';}
    else if (apollo7.api.UseApiaryMockServer) {return 'apiary';}
    return server_environment;
  };

  // Options passed to redux-axios-middleware in redux store configuration
  return {
    clients: {
      development: {
        client: axios.create({
          baseURL: apollo7.api.development,
        })
      },
      staging: {
        client: axios.create({
          baseURL: apollo7.api.staging,
        })
      },
      production: {
        client: axios.create({
          baseURL: apollo7.api.production,
        })
      },
      apiary: {
        client: axios.create({
          baseURL: apollo7.api.apiary,
          headers: {'Authorization': auth.getAuthorizationHeader()},
        })
      },
      drakov: {
        client: axios.create({
          baseURL: apollo7.api.drakov
        })
      }
    },
    options: {
      defaultClientName: configureClient(server_environment),
      errorSuffix: '_FAILED',
      returnRejectedPromiseOnError: true
    }
  };
};

export default configureApiEndpoints;
