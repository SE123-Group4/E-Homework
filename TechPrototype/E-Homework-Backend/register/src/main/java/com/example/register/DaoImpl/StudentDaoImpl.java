package com.example.register.DaoImpl;

import com.example.register.Dao.StudentDao;
import com.example.register.Entity.Student;
import com.example.register.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class StudentDaoImpl implements StudentDao {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Optional<Student> getStudentByNameAndSchoolIDAndStuNumber(String name, int sID, String sNum){
        //return studentRepository.getStudentByNameAndSchoolIDAndStuNumber(name, sID, sNum);
        return studentRepository.findByNameAndSchoolIDAndStuNumber(name, sID, sNum);
    }

    @Override
    public Student getStudentByID(int id){
        return studentRepository.getStudentByID(id);
    }
}
