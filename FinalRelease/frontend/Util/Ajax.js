import AsyncStorage from '@react-native-async-storage/async-storage';
import * as url from '../Constant/Url';

const TOKEN_URL =
  url.AUTH_URL +
  'oauth/token?grant_type=password&client_id=ehomeworkapp&client_secret=ehomeworkapp';

export const loginAjax = (username, password, callback) => {
  fetch(TOKEN_URL + '&username=' + username + '&password=' + password, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRequest = (request_url, callback) => {
  const _retrieveData = async () => {
    try {
      var token = await AsyncStorage.getItem('token');
      fetch(request_url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          console.log(resData);
          callback(resData);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {}
  };
  _retrieveData();
};

export const postRequest = (request_url, data, callback) => {
  const _retrieveData = async () => {
    try {
      var token = await AsyncStorage.getItem('token');
      fetch(request_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          console.log(resData);
          callback(resData);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {}
  };
  _retrieveData();
};

export const postImageRequest = (request_url, data, callback) => {
  const _retrieveData = async () => {
    try {
      fetch(request_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'image=' + data,
      })
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          console.log(resData);
          callback(resData);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {}
  };
  _retrieveData();
};
