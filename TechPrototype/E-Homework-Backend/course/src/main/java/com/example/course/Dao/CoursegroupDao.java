package com.example.course.Dao;

import com.example.course.Entity.Coursegroup;

import java.util.List;

public interface CoursegroupDao {
    List<Coursegroup> getByCourseID(int cID);

    Coursegroup getByID(int id);

    int insertCourseGroup(int cID,String name);
}
