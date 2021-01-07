package org.chp.hw.repository;

import org.chp.hw.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @ClassName: TeacherRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:55 下午
 * @Version 1.0
 **/
public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
}
