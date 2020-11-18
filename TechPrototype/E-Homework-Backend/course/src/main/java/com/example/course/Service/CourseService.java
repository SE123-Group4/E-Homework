package com.example.course.Service;

import com.example.course.Entity.Course;
import com.example.course.ReturnInfo.ReturnCourse;
import com.example.course.ReturnInfo.ReturnMsg;

import java.sql.Timestamp;
import java.util.List;

public interface CourseService {
    List<Course> getCoursesByStudentId(int id);

    List<Course> getCoursesByTeacherId(int id);

    ReturnCourse getCourseById(int id);

    ReturnMsg insertCourse(int teacher, String introduction, String name, String book, Timestamp startTime, Timestamp endTime, int state);
}
