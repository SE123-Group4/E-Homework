package com.example.register.Dao;

import com.example.register.Entity.Teacher;

public interface TeacherDao {
    Teacher getByNameAndSchoolIDAndTeaNumber(String name, int sID, String tNum);

    Teacher getByID(int id);
}
