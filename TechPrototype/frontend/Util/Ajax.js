import {AsyncStorage} from 'react-native';

const AUTH_URL =
  'http://localhost:8802/auth/oauth/token?client_id=ehomeworkapp&client_secret=ehomeworkapp';

export const loginAjax = (username, password, callback) => {
  fetch(AUTH_URL + '&username=' + username + '&password=' + password, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
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

export const getRequest = (url, data, callback) => {
  var token = '';
  const _retrieveData = async () => {
    try {
      token = await AsyncStorage.getItem('token');
    } catch (e) {}
  };
  _retrieveData();

  fetch(url, {
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
};
