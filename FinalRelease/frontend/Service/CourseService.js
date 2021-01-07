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
    id: courseID,
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
      var role = JSON.parse(await AsyncStorage.getItem('principal')).role;
      //console.log('role', role);
      schoolID = role.schoolID;
      var data = {students: studentIDs, courseID: courseID, schoolID: schoolID};
      console.log('add student', data);
      postRequest(COURSE_URL + 'addTakes', data, callback);
    } catch (e) {}
  };
  _loadSchoolID();
};

export const deleteStudent = (studentIDs, courseID, callback) => {
  let _loadSchoolID = async () => {
    try {
      var role = JSON.parse(await AsyncStorage.getItem('principal')).role;
      var schoolID = role.schoolID;
      var data = {students: studentIDs, courseID: courseID, schoolID: schoolID};
      console.log('delete student', data);
      postRequest(COURSE_URL + 'deleteTake', data, callback);
    } catch (e) {}
  };
  _loadSchoolID();
};

export const searchStudent = (courseID, keyword, callback) => {
  var data = {cid: courseID, search: keyword};
  postRequest(COURSE_URL + 'searchStudent', data, callback);
};

export const getStudentsByCourse = (courseID, callback) => {
  var data = {id: courseID};
  postRequest(COURSE_URL + 'getStudentsByCourse', data, callback);
};
