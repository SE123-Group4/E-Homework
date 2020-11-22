package com.example.auth.Dao;

import com.example.auth.Entity.Student;

import java.util.Optional;

public interface StudentDao {
    Optional<Student> findByID(int ID);
}
