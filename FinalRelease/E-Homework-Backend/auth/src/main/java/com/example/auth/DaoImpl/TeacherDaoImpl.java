package com.example.auth.DaoImpl;

import com.example.auth.Dao.TeacherDao;
import com.example.auth.Entity.Teacher;
import com.example.auth.Repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class TeacherDaoImpl implements TeacherDao {
    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public Optional<Teacher> findByID(int ID) {
        return teacherRepository.findByID(ID);
    }
}
