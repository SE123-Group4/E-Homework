import {getRequest} from '../Util/Ajax';
import * as url from '../Constant/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUser = (callback) => {
  getRequest(url.AUTH_URL + 'user', callback);
};

export const logout = (callback) => {
  let _deleteToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('principal');
    } catch (e) {}
  };
  _deleteToken();
  callback(200);
};
