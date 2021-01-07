package com.example.course.Dao;

import com.example.course.Entity.Student;

public interface StudentDao {
    Student getNameByID(int id);

    int getByStuNumberAndSchoolID(String sNum,int sID);
}
