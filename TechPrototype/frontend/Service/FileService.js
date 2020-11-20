import {HOMEWORK_URL} from '../Constant/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

var RNFS = require('react-native-fs');

export const uploadFile = (files, uploadBegin, uploadProgress) => {
  let _upload = async () => {
    try {
      var token = await AsyncStorage.getItem('token');
      //var roleID = JSON.parse(await AsyncStorage.getItem('userInfo')).id;
      RNFS.uploadFiles({
        toUrl: HOMEWORK_URL + 'upload_file',
        files: files,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
        fields: {
          hello: 'world',
        },
        begin: uploadBegin,
        progress: uploadProgress,
      });
      //     .promise.then((responce) => {
      //         if (responce.statusCode === 200) {
      //
      //         } else {
      //
      //         }
      // })
      //     .catch((err) => {
      //
      //     });
    } catch (e) {}
  };
};
