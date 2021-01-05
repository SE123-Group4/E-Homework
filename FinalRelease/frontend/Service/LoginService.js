import {getRequest} from '../Util/Ajax';
import * as url from '../Constant/Url';

export const getUser = (callback) => {
  getRequest(url.AUTH_URL + 'user', callback);
};
