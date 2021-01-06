package org.chp.hw.daoimpl;

import org.chp.hw.dao.StudentDao;
import org.chp.hw.entity.Student;
import org.chp.hw.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @ClassName: StudentDaoImpl
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 11:02 下午
 * @Version 1.0
 **/
@Repository
public class StudentDaoImpl implements StudentDao {
    @Autowired
    StudentRepository studentRepository;

    public Optional<Student> getByID(int id){
        return studentRepository.findById(id);
    }
}
