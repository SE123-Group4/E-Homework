import {postRequest} from '../Util/Ajax';
import {HOMEWORK_URL} from '../Constant/Url';

export const getStuAnswer = (homeworkAssignID, callback) => {
  var data = {homeworkAssignID: homeworkAssignID};
  postRequest(HOMEWORK_URL + 'student_answer', data, callback);
};

export const commitCorrection = (correction, callback) => {
  postRequest(HOMEWORK_URL + 'correction', correction, callback);
};

export const commitAnswer = (answer, callback) => {
  postRequest(HOMEWORK_URL + 'answer', answer, callback);
};

export const getStuQuestion = (homeworkAssignID, callback) => {
  var data = {homeworkAssignID: homeworkAssignID};
  postRequest(HOMEWORK_URL + 'student_question', data, callback);
};

export const getStatistics = (homeworkID, callback) => {
  var data = {homeworkID: homeworkID};
  postRequest(HOMEWORK_URL + 'statistics', data, callback);
};
