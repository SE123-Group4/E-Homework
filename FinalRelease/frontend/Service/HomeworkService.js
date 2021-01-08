import {postRequest, getRequest, postImageRequest} from '../Util/Ajax';
import {
  HOMEWORK_URL,
  SEARCH_URL,
  IMAGE_URL,
  IMAGE2WORD_URL,
} from '../Constant/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStuAnswer = (handsonID, callback) => {
  var data = {handsonID: handsonID};
  console.log('get stu answer', data);
  postRequest(HOMEWORK_URL + 'student_answer', data, callback);
};

export const commitCorrection = (correction, callback) => {
  var data = {correction: correction};
  console.log('commit correction', data);
  postRequest(HOMEWORK_URL + 'correction', data, callback);
};

export const commitAnswer = (answer, handsonID, callback) => {
  var data = {answer: answer, handsonID: handsonID};
  console.log('commit answer', data);
  postRequest(HOMEWORK_URL + 'answer', data, callback);
};

export const getStuQuestion = (handsonID, callback) => {
  var data = {handsonID: handsonID};
  console.log('get stu q', data);
  postRequest(HOMEWORK_URL + 'questions', data, callback);
};

export const getStatistics = (homeworkID, callback) => {
  var data = {homeworkID: homeworkID};
  console.log('get statistic', data);
  postRequest(HOMEWORK_URL + 'statistics', data, callback);
};

export const getStuHomework = (callback) => {
  let _loatID = async () => {
    try {
      var stuID = JSON.parse(await AsyncStorage.getItem('principal')).roleID;
      var data = {stuID: stuID};
      postRequest(HOMEWORK_URL + 'stu_homework_list', data, callback);
    } catch (e) {}
  };
  _loatID();
};

export const getTeaHomework = (callback) => {
  let _loadID = async () => {
    try {
      var teaID = JSON.parse(await AsyncStorage.getItem('principal')).roleID;
      var data = {teaID: teaID};
      console.log('getTeahW', data);
      postRequest(HOMEWORK_URL + 'tea_homework_list', data, callback);
    } catch (e) {}
  };
  _loadID();
};

export const getCourseHomework = (courseID, role, callback) => {
  let _loatID = async () => {
    try {
      var data, stuID;
      stuID = JSON.parse(await AsyncStorage.getItem('principal')).roleID;
      if (role === 'ROLE_STUDENT') {
        data = {courseID: courseID, role: role, stuID: stuID};
      } else {
        data = {courseID: courseID, role: role};
      }
      postRequest(HOMEWORK_URL + 'course_homework_list', data, callback);
    } catch (e) {}
  };
  _loatID();
};

export const getHandsons = (homeworkID, callback) => {
  var data = {homeworkID: homeworkID};
  console.log('get handson', data);
  postRequest(HOMEWORK_URL + 'get_handson', data, callback);
};

export const search = (searchValue, callback) => {
  var data = {keyword: searchValue};
  const searchCallback = (res) => {
    if (res.status === 200) {
      if (res.num === 0) {
        var zero = {status: 200, data: null};
        callback(zero);
      } else {
        var principal;
        let _loadID = async () => {
          try {
            principal = JSON.parse(await AsyncStorage.getItem('principal'));
            var requestData = {
              homeworkIDs: res.data,
              stuID: principal.roleID,
            };
            postRequest(
              HOMEWORK_URL + '/get_homework_by_id',
              requestData,
              callback,
            );
          } catch (e) {}
        };
        _loadID();
      }
    }
  };
  postRequest(SEARCH_URL + 'search', data, searchCallback);
};

export const getAssignHomework = (data, callback) => {
  console.log('get assign homework', data);
  getRequest(HOMEWORK_URL + 'getAssignHomework?' + data, callback);
};

export const postAssignHomework = (data, callback) => {
  console.log('post assignment', data);
  postRequest(HOMEWORK_URL + 'AssignHomework', data, callback);
};

export const postImage = (data, callback) => {
  postImageRequest(IMAGE_URL, data, callback);
};

export const image2word = (data, callback) => {
  postImageRequest(IMAGE2WORD_URL, data, callback);
};
