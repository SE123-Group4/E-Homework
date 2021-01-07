package org.chp.hw.daoimpl;

import org.chp.hw.dao.AnswerDao;
import org.chp.hw.dao.HandsonDao;
import org.chp.hw.entity.Answer;
import org.chp.hw.entity.Handson;
import org.chp.hw.entity.Homework;
import org.chp.hw.entity.Student;
import org.chp.hw.repository.HandsonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @ClassName: HandsonDaoImpl
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 11:01 下午
 * @Version 1.0
 **/
@Repository
public class HandsonDaoImpl implements HandsonDao {
    @Autowired
    HandsonRepository handsonRepository;

    @Autowired
    AnswerDao answerDao;

    public void saveHd(Handson handson){
        handsonRepository.saveAndFlush(handson);
        if(handson.getAnswerList() != null) {
            for (Answer answer : handson.getAnswerList()) {
                answerDao.saveAnswer(answer);
            }
        }
    }

    public void saveWithoutAnswer(Handson handson){
        handsonRepository.saveAndFlush(handson);
    }

    public void deleteHdByID(int id){
        Optional<Handson> handsonOptional = getHdByID(id);
        if(handsonOptional.isPresent()){
            Handson handson = handsonOptional.get();
            if(handson.getAnswerList() != null) {
                for (Answer answer : handson.getAnswerList()) {
                    answerDao.deleteAnswerByID(answer.getId());
                }
            }
            handsonRepository.delete(handson);
        }
        return;
    }

    public Optional<Handson> getHdByID(int id){
        System.out.println(id);
        Optional<Handson> handsonOptional = handsonRepository.findById(id);
        if(handsonOptional.isPresent()){
            Handson handson = handsonOptional.get();
            List<Answer> answerList = new ArrayList<>();
            for(Answer answer : handsonOptional.get().getAnswerList()){
                answerList.add(answerDao.getByAnswerID(answer.getId()).get());
            }
            handson.setAnswerList(answerList);
            return Optional.of(handson);
        }
        return Optional.empty();
    }

    public Integer getHdIDByStuAndHw(int hwid, int stuid){
        return handsonRepository.findIDByHWIDAndSTUID(hwid, stuid);
    }
}
