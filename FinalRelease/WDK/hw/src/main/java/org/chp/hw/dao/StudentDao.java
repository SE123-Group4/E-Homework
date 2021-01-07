package org.chp.hw.dao;

import org.chp.hw.entity.Student;

import java.util.Optional;

/**
 * @ClassName: StudentDao
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:58 下午
 * @Version 1.0
 **/
public interface StudentDao {
    Optional<Student> getByID(int id);
}
