package com.example.register.Dao;

import com.example.register.Entity.Teacher;

import java.util.Optional;

public interface TeacherDao {
    Optional<Teacher> getByNameAndSchoolIDAndTeaNumber(String name, int sID, String tNum);

    Teacher getByID(int id);
}
