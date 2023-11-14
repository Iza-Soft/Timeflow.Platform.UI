import { environment } from '../../../src/environments/environment.prod';

const API_LIST = {
  // ------------------------------------ PROJECTS ------------------------------------ //

  PROJECT_BY_USERID_API_URL: 'project/user-id',

  // ------------------------------------ PROJECTS ------------------------------------ //
};

const getPath = (val: string) => {
  return environment.apiEndpointUrl + API_LIST[val];
};

export { getPath };
