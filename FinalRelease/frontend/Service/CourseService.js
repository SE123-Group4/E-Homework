import {postRequest} from '../Util/Ajax';
import {COURSE_URL} from '../Constant/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const modifyCourse = (courseID, name, introduction, book, callback) => {
  var data = {
    courseID: courseID,
    name: name,
    introduction: introduction,
    book: book,
  };
  postRequest(COURSE_URL + 'updateCourse', data, callback);
};

export const deleteCourse = (courseID, callback) => {
  var data = {id: courseID};
  postRequest(COURSE_URL + 'deleteCourse', data, callback);
};

export const addStudent = (studentIDs, courseID, callback) => {
  var schoolID;
  let _loadSchoolID = async () => {
    try {
      var role = await JSON.parse(AsyncStorage.getItem('principal')).role
      schoolID = role.schoolID;
    } catch (e) {}
  };
  _loadSchoolID();
  var data = {studentIDs: studentIDs, courseID: courseID, schoolID: schoolID};
  postRequest(COURSE_URL + 'addTakes', data, callback);
};

export const deleteStudent = (studentIDs, courseID, callback) => {
  var schoolID;
  let _loadSchoolID = async () => {
    try {
      var role = await JSON.parse(AsyncStorage.getItem('principal')).role
      schoolID = role.schoolID;
    } catch (e) {}
  };
  _loadSchoolID();
  var data = {studentIDs: studentIDs, courseID: courseID, schoolID: schoolID};
  postRequest(COURSE_URL + 'deleteTakes', data, callback);
};
