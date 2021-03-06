package org.cloudhomworkplatform.cphcourse.Service;

import org.cloudhomworkplatform.cphcourse.Entity.Course;
import org.cloudhomworkplatform.cphcourse.ReturnInfo.ReturnCourse;
import org.cloudhomworkplatform.cphcourse.ReturnInfo.ReturnMsg;

import java.sql.Timestamp;
import java.util.List;

public interface CourseService {
    List<Course> getCoursesByStudentId(int id);

    List<Course> getCoursesByTeacherId(int id);

    ReturnCourse getCourseById(int id);

    ReturnMsg insertCourse(int teacher, String introduction, String name, String book, Timestamp startTime, Timestamp endTime, int state);

    ReturnMsg insertTakes(int schoolID,List<String> students,int courseID);

    ReturnMsg insertGroup(int courseID,String name,List<Integer> members);

    ReturnMsg deleteTakesById(int student,int courseID);

    ReturnMsg  deleteCourseById(int id);

    ReturnMsg updateCourseById(String name,String introduction,String book,int id);
}
