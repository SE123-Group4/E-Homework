package org.chp.hw.repository;

import org.chp.hw.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @ClassName: QuestionRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 9:45 下午
 * @Version 1.0
 **/
public interface QuestionRepository extends JpaRepository<Question, Integer> {
}
