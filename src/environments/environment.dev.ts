// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//const apiUri = require('./auth_config.json');

export const environment = {
  production: false,
  apiEndpointUrl: 'https://localhost:30001/api/apiVersion/',
  //   httpInterceptor: {
  //     allowedList: [`${apiUri}/*`, 'https://easiflow-dev-uks-apim.azure-api.net/*']
  //   }
};
