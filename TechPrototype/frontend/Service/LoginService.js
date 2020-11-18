import {getRequest} from '../Util/Ajax';

const USER_URL = 'http://localhost:8802/auth/user';

export const getUser = (callback) => {
  getRequest(USER_URL, callback);
};
