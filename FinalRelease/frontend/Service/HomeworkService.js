import {postRequest} from '../Util/Ajax';
import {getRequest} from '../Util/Ajax';
import {HOMEWORK_URL} from '../Constant/Url';

export const getStuAnswer = (homeworkAssignID, callback) => {
  var data = {homeworkAssignID: homeworkAssignID};
  postRequest(HOMEWORK_URL + 'student_answer', data, callback);
};

export const getAssignHomework = (homeworkID, callback) => {
  getRequest(HOMEWORK_URL + 'AssignHomework?hwId=' + homeworkID, callback);
};

export const postAssignHomework = (data, callback) => {
  postRequest(HOMEWORK_URL + 'AssignHomework', data, callback);
};
