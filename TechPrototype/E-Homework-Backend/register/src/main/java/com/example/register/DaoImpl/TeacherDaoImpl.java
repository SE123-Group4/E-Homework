package com.example.register.DaoImpl;

import com.example.register.Dao.TeacherDao;
import com.example.register.Entity.Teacher;
import com.example.register.Repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class TeacherDaoImpl implements TeacherDao {
    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public Optional<Teacher> getByNameAndSchoolIDAndTeaNumber(String name, int sID, String tNum){
        return teacherRepository.findByNameAndSchoolIDAndTeaNumber(name, sID, tNum);
    }

    @Override
    public Teacher getByID(int id){
        return teacherRepository.getByID(id);
    }
}
