package com.example.auth.DaoImpl;

import com.example.auth.Dao.StudentDao;
import com.example.auth.Entity.Student;
import com.example.auth.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class StudentDaoImpl implements StudentDao {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Optional<Student> findByID(int ID) {
        return studentRepository.findByID(ID);
    }
}
