package com.example.register.Dao;

import com.example.register.Entity.Student;

import java.util.Optional;

public interface StudentDao {
    Optional<Student> getStudentByNameAndSchoolIDAndStuNumber(String name, int sID, String sNum);

    Student getStudentByID(int id);
}
