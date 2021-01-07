import {postRequest, getRequest, postImageRequest} from '../Util/Ajax';
import {HOMEWORK_URL, IMAGE_URL, IMAGE2WORD_URL} from '../Constant/Url';

export const getStuAnswer = (homeworkAssignID, callback) => {
  var data = {homeworkAssignID: homeworkAssignID};
  postRequest(HOMEWORK_URL + 'student_answer', data, callback);
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
