package org.chp.hw.dao;

import org.chp.hw.entity.Question;

import java.util.Optional;

/**
 * @ClassName: QuestionDao
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:59 下午
 * @Version 1.0
 **/
public interface QuestionDao {
    Optional<Question> getByQuestionID(int id);

    void saveQuestion(Question question);

    void deleteQuestionByID(int ID);
}
