package org.chp.hw.repository;

import org.chp.hw.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @ClassName: AnswerRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 9:45 下午
 * @Version 1.0
 **/
public interface AnswerRepository extends JpaRepository<Answer, Integer> {
}
