package org.chp.hw.repository;

import org.chp.hw.entity.Homework;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @ClassName: HomeworkRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 9:44 下午
 * @Version 1.0
 **/
public interface HomeworkRepository extends JpaRepository<Homework, Integer> {
}
