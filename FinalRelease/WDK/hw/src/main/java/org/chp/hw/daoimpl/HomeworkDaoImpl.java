package org.chp.hw.daoimpl;

import org.chp.hw.dao.HandsonDao;
import org.chp.hw.dao.HomeWorkDao;
import org.chp.hw.dao.QuestionDao;
import org.chp.hw.entity.Handson;
import org.chp.hw.entity.Homework;
import org.chp.hw.entity.Question;
import org.chp.hw.repository.HomeworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @ClassName: HomeworkDaoImpl
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 11:01 下午
 * @Version 1.0
 **/
@Repository
public class HomeworkDaoImpl implements HomeWorkDao {
    @Autowired
    HomeworkRepository homeworkRepository;

    @Autowired
    HandsonDao handsonDao;

    @Autowired
    QuestionDao questionDao;


    public Optional<Homework> getByHwID(int id){
        Optional<Homework> homeworkOptional = homeworkRepository.findById(id);
        if(homeworkOptional.isPresent()){
            Homework homework = homeworkOptional.get();
            if (homework.getQuestionList()!= null){
                List<Question> questionList = new ArrayList<>();
                for (Question question : homework.getQuestionList()){
                    questionList.add(questionDao.getByQuestionID(question.getId()).get());
                }
                homework.setQuestionList(questionList);
            }
            if (homework.getHandsonList()!=null){
                List<Handson> handsonList = new ArrayList<>();
                for(Handson handson: homework.getHandsonList()){
                    System.out.println(handson.getId());
                    handsonList.add(handsonDao.getHdByID(handson.getId()).get());
                }
                homework.setHandsonList(handsonList);
            }
            return Optional.of(homework);
        }
        return Optional.empty();
    }

    public void saveHw(Homework hw){
        homeworkRepository.saveAndFlush(hw);
//        if(hw.getHandsonList() != null) {
//            for (Handson handson : hw.getHandsonList()) {
//                handsonDao.saveHd(handson);
//            }
//        }
//        if(hw.getQuestionList() != null) {
//            for (Question question : hw.getQuestionList()) {
//                questionDao.saveQuestion(question);
//            }
//        }
    }

    public void deleteHwByID(int id){
        Optional<Homework> homeworkOptional = getByHwID(id);
        if(homeworkOptional.isPresent()){
            Homework homework = homeworkOptional.get();
            if (!homework.getQuestionList().isEmpty()){
                for (Question question : homework.getQuestionList()){
                    questionDao.deleteQuestionByID(question.getId());
                }
            }
            if (!homework.getHandsonList().isEmpty()){
                for(Handson handson: homework.getHandsonList()){
                    handsonDao.deleteHdByID(handson.getId());
                }
            }
            homeworkRepository.deleteById(id);
        }
        return;
    }
}
