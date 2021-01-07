package org.chp.hw.daoimpl;

import org.chp.hw.dao.TeacherDao;
import org.chp.hw.entity.Teacher;
import org.chp.hw.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @ClassName: TeacherDaoImpl
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 11:02 下午
 * @Version 1.0
 **/
@Repository
public class TeacherDaoImpl implements TeacherDao {
    @Autowired
    TeacherRepository teacherRepository;

    public Optional<Teacher> getTeaByID(int id){
        return teacherRepository.findById(id);
    }
}
