package com.example.course.Dao;

import com.example.course.Entity.Takes;

import java.util.List;

public interface TakesDao {
    List<Takes> getByIdStudent(int student);

    List<Takes> getByIdCourseID(int course);

    int insertTakes(int student,int courseID);
}
