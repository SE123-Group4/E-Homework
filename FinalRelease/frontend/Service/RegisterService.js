import * as url from '../Constant/Url';
import {getRequest, naiveGet, naivePost, postRequest} from '../Util/Ajax';
import {REGISTER_URL} from '../Constant/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 获取验证码
export const getMailCode = (account, callback) => {
  var data = {account: account};
  console.log('get mail', data);
  naivePost(REGISTER_URL + 'mail_code', data, callback);
};

export const getSchoolList = (callback) => {
  naiveGet(url.REGISTER_URL + 'school_list', callback);
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
  naivePost(url.REGISTER_URL + 'register', data, callback);
};

export const modifyPassword = (username, password, callback) => {
  let _loadID = async () => {
    try {
      var id = JSON.parse(await AsyncStorage.getItem('principal')).id;
      var data = {password: password, id: id};
      postRequest(REGISTER_URL + 'setPassword', data, callback);
    } catch (e) {}
  };
  _loadID();
};
