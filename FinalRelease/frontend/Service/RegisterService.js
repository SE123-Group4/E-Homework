import * as url from '../Constant/Url';
import {getRequest, postRequest} from '../Util/Ajax';

// 获取验证码
export const getMailCode = (account, callback) => {
  var data = {account: account};
  postRequest(url.REGISTER_URL + 'mail_code', data, callback);
};

export const getSchoolList = (callback) => {
  getRequest(url.REGISTER_URL + 'school_list', callback);
};

export const register = (
  account,
  name,
  school,
  user_number,
  password,
  role,
  callback,
) => {
  var data = {
    account: account,
    name: name,
    school: school,
    user_number: user_number,
    password: password,
    role: role,
  };
  console.log(data);
  postRequest(url.REGISTER_URL + 'register', data, callback);
};

export const modifyPassword = (username, password, callback) => {

}
