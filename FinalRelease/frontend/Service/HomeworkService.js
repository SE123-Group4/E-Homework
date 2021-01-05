import {postRequest} from '../Util/Ajax';
import {HOMEWORK_URL} from '../Constant/Url';

export const getStuAnswer = (homeworkAssignID, callback) => {
  var data = {homeworkAssignID: homeworkAssignID};
  postRequest(HOMEWORK_URL + 'student_answer', data, callback);
};
