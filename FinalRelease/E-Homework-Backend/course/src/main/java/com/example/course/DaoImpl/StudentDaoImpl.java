package com.example.course.DaoImpl;

import com.example.course.Dao.StudentDao;
import com.example.course.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDaoImpl implements StudentDao {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public String getNameByID(int id){
        return studentRepository.getNameByID(id);
    }
}
