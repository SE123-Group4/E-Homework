import {postRequest} from '../Util/Ajax';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HOMEWORK_URL, SEARCH_URL} from '../Constant/Url';
import {getRequest} from '../Util/Ajax';

export const getStuAnswer = (homeworkAssignID, callback) => {
  var data = {homeworkAssignID: homeworkAssignID};
  postRequest(HOMEWORK_URL + 'student_answer', data, callback);
};

export const commitCorrection = (correction, callback) => {
  var data = {correction: correction};
  postRequest(HOMEWORK_URL + 'correction', data, callback);
};

export const commitAnswer = (answer, handsonID, callback) => {
  var data = {answer: answer, handsonID: handsonID};
  postRequest(HOMEWORK_URL + 'answer', data, callback);
};

export const getStuQuestion = (handsonID, callback) => {
  // var stuID;
  // let _loatID = async () => {
  //   try {
  //     stuID = await AsyncStorage.getItem('principal').roleID;
  //   } catch (e) {}
  // };
  // _loatID();
  var data = {handsonID: handsonID};
  postRequest(HOMEWORK_URL + 'questions', data, callback);
};

export const getStatistics = (homeworkID, callback) => {
  var data = {homeworkID: homeworkID};
  postRequest(HOMEWORK_URL + 'statistics', data, callback);
};

export const getStuHomework = (callback) => {
  var stuID;
  let _loatID = async () => {
    try {
      stuID = await JSON.parse(AsyncStorage.getItem('principal')).roleID;
    } catch (e) {}
  };
  _loatID();
  var data = {stuID: stuID};
  postRequest(HOMEWORK_URL + 'stu_homework_list', data, callback);
};

export const getTeaHomework = (callback) => {
  var teaID;
  let _loatID = async () => {
    try {
      teaID = await JSON.parse(AsyncStorage.getItem('principal')).roleID;
    } catch (e) {}
  };
  _loatID();
  var data = {teaID: teaID};
  postRequest(HOMEWORK_URL + 'tea_homework_list', data, callback);
};

export const getCourseHomework = (courseID, role, callback) => {
  if (role === 'ROLE_STUDENT') {
    var stuID;
    let _loatID = async () => {
      try {
        stuID = await JSON.parse(AsyncStorage.getItem('principal')).roleID;
      } catch (e) {}
    };
    _loatID();
    var data = {courseID: courseID, role: role, stuID: stuID};
  } else {
    var data = {courseID: courseID, role: role};
  }
  postRequest(HOMEWORK_URL + 'course_homework_list', data, callback);
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
            principal = await JSON.parse(AsyncStorage.getItem('principal'));
          } catch (e) {}
        };
        _loadID();
        var requestData = {
          homeworkIDs: res.data,
          stuID: principal.roleID,
        };
        postRequest(
          HOMEWORK_URL + '/get_homework_by_id',
          requestData,
          callback,
        );
      }
    }
  };
  postRequest(SEARCH_URL + 'search', data, searchCallback);
};

export const getAssignHomework = (homeworkID, callback) => {
  getRequest(HOMEWORK_URL + 'AssignHomework?hwId=' + homeworkID, callback);
};

export const postAssignHomework = (data, callback) => {
  postRequest(HOMEWORK_URL + 'AssignHomework', data, callback);
};
