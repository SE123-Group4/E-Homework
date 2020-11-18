package com.example.register.Dao;

import com.example.register.Entity.Student;

public interface StudentDao {
    Student getStudentByNameAndSchoolIDAndStuNumber(String name, int sID, String sNum);

    Student getStudentByID(int id);
}
