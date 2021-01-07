package com.example.course.Dao;

import com.example.course.Entity.Course;

import java.sql.Timestamp;
import java.util.List;

public interface CourseDao {
    Course getByID(int id);

    List<Course> getByTeacher(int teacher);

    int insertCourse(int teacher, String introduction, String name, String book, Timestamp startTime, Timestamp endTime, int state);

    int setState(int id,int s);

    int updateCourseTakes(int id,int takes);

    int deleteCourseById(int id);

    int updateCourseById(String name,String introduction,String book,int id);
}
