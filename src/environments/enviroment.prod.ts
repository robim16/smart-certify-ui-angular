

import { EnvironmentConfiguration } from "../app/models/enviroment-configuration";




const serverUrl='https://smartcertify-api.azurewebsites.net/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'prod',
  production: true,
  apiUrl: serverUrl,
  adb2cConfig: {
    clientId: 'c027eec5-9ef7-4749-8d18-712f0c400667',
    readScopeUrl: 'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/prod/api/User.Read',
    writeScopeUrl: 'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/prod/api/User.Write',
    scopeUrls:[
      'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/prod/api/User.Read',
      'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/prod/api/User.Write'
    ],
    apiEndpointUrl: 'https://smartcertify-api.azurewebsites.net/api'
  },
  cacheTimeInMinutes: 30,
};
