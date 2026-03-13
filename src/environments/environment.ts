
import { EnvironmentConfiguration } from "../app/models/enviroment-configuration";


const serverUrl='https://localhost:7209/api';
//const serverUrl='https://smartcertify-api.azurewebsites.net/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: true,
  apiUrl: serverUrl,
  adb2cConfig: {
    clientId: '588fe00e-c38a-429b-a2bb-911ca90643a7',
    readScopeUrl: 'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/dev/api/User.Read',
    writeScopeUrl: 'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/dev/api/User.Write',
    scopeUrls:[
      'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/dev/api/User.Read',
      'https://smartlearnbykarthik.onmicrosoft.com/smartcertify/dev/api/User.Write'
    ],
    apiEndpointUrl: serverUrl
  },
  cacheTimeInMinutes: 30,
};

