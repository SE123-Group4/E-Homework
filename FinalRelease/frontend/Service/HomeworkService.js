import {postRequest, getRequest, postImageRequest} from '../Util/Ajax';
import {
  HOMEWORK_URL,
  SEARCH_URL,
  IMAGE_URL,
  IMAGE2WORD_URL,
} from '../Constant/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const getStuQuestion = (homeworkAssignID, callback) => {
  var data = {homeworkAssignID: homeworkAssignID};
  postRequest(HOMEWORK_URL + 'student_question', data, callback);
};

export const getStatistics = (homeworkID, callback) => {
  var data = {homeworkID: homeworkID};
  postRequest(HOMEWORK_URL + 'statistics', data, callback);
};

export const getStuHomework = (callback) => {
  var stuID;
  let _loatID = async () => {
    try {
      stuID = await AsyncStorage.getItem('principal').roleID;
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
      teaID = await AsyncStorage.getItem('principal').roleID;
    } catch (e) {}
  };
  _loatID();
  var data = {teaID: teaID};
  postRequest(HOMEWORK_URL + 'tea_homework_list', data, callback);
};

export const getCourseHomework = (courseID, role, callback) => {
  var data = {courseID: courseID, role: role};
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
            principal = await AsyncStorage.getItem('principal');
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

export const getAssignHomework = (data, callback) => {
  getRequest(HOMEWORK_URL + 'getAssignHomework?' + data, callback);
};

export const postAssignHomework = (data, callback) => {
  postRequest(HOMEWORK_URL + 'AssignHomework', data, callback);
};

export const postImage = (data, callback) => {
  postImageRequest(IMAGE_URL, data, callback);
};

export const image2word = (data, callback) => {
  postImageRequest(IMAGE2WORD_URL, data, callback);
};
