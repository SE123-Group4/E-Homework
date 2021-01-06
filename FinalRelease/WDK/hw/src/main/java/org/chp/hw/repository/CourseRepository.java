package org.chp.hw.repository;

import org.chp.hw.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @ClassName: CourseRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:54 下午
 * @Version 1.0
 **/
public interface CourseRepository extends JpaRepository<Course, Integer> {
}
