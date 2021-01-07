package org.chp.hw.dao;

import org.chp.hw.entity.Teacher;

import java.util.Optional;

/**
 * @ClassName: TeacherDao
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:58 下午
 * @Version 1.0
 **/
public interface TeacherDao {
    Optional<Teacher> getTeaByID(int id);
}
