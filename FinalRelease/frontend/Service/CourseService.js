import {postRequest} from '../Util/Ajax';
import {COURSE_URL} from '../Constant/Url';

export const getStuCourses = (roleID, callback) => {
  var data = {id: roleID};
  postRequest(COURSE_URL + 'student_courses', data, callback);
};

export const getTeaCourses = (roleID, callback) => {
  var data = {id: roleID};
  postRequest(COURSE_URL + 'teacher_courses', data, callback);
};

export const getCourseByID = (courseID, callback) => {
  var data = {id: courseID};
  console.log('data', data);
  postRequest(COURSE_URL + 'course', data, callback);
};

export const addCourse = (
  teacher,
  name,
  introduction,
  book,
  startTime,
  endTime,
  state,
  callback,
) => {
  var data = {
    teacher: teacher,
    name: name,
    introduction: introduction,
    book: book,
    startTime: startTime,
    endTime: endTime,
    state: state,
  };
  postRequest(COURSE_URL + 'add_course', data, callback);
};
