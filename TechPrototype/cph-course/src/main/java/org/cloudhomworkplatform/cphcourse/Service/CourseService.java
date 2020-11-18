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
}
