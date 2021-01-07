package org.chp.hw.daoimpl;

import org.chp.hw.dao.AnswerDao;
import org.chp.hw.dao.QuestionDao;
import org.chp.hw.entity.Answer;
import org.chp.hw.entity.Question;
import org.chp.hw.entity.QuestionContent;
import org.chp.hw.repository.QuestionContentRepository;
import org.chp.hw.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * @ClassName: QuestionDaoImpl
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 11:02 下午
 * @Version 1.0
 **/
@Repository
public class QuestionDaoImpl implements QuestionDao {
    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    QuestionContentRepository questionContentRepository;

    @Autowired
    AnswerDao answerDao;


    public Optional<Question> getByQuestionID(int id){
        Optional<Question> questionOptional = questionRepository.findById(id);
        if(questionOptional.isPresent()){
            Question question = questionOptional.get();
            Optional<QuestionContent> questionContentOptional = questionContentRepository.findById(id);
            if(questionContentOptional.isPresent()){
                question.setQuestionContent(questionContentOptional.get());
            }
            return Optional.of(question);
        }
        return Optional.empty();
    }

    public void saveQuestion(Question question){
        questionRepository.saveAndFlush(question);
        QuestionContent questionContent = question.getQuestionContent();
        questionContent.setId(question.getId());
        questionContentRepository.save(question.getQuestionContent());
    }

    public void deleteQuestionByID(int id){
        Optional<Question> questionOptional = getByQuestionID(id);
        if(questionOptional.isPresent()){
            Question question = questionOptional.get();
            questionContentRepository.delete(question.getQuestionContent());
            questionRepository.delete(question);
            List<Answer> answerList = question.getAnswerList();
            for(Answer answer : answerList){
                answerDao.getByAnswerID(answer.getId());
            }
        }
    }
}
