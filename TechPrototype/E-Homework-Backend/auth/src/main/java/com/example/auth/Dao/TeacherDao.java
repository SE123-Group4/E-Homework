package com.example.auth.Dao;

import com.example.auth.Entity.Teacher;

import java.util.Optional;

public interface TeacherDao {
    Optional<Teacher> findByID(int ID);
}
