package org.chp.hw.dao;

import org.chp.hw.entity.Answer;

import java.util.Optional;

/**
 * @ClassName: AnswerDao
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 11:00 下午
 * @Version 1.0
 **/
public interface AnswerDao {
    Optional<Answer> getByAnswerID(int id);

    void saveAnswer(Answer answer);

    void deleteAnswerByID(int id);
}
