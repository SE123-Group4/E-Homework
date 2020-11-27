package com.example.course.DaoImpl;

import com.example.course.Dao.TeacherDao;
import com.example.course.Repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TeacherDaoImpl implements TeacherDao {
    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public String getNameByID(int id){
        return teacherRepository.getNameByID(id);
    }
}
