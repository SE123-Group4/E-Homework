package org.chp.hw.dao;

import org.chp.hw.entity.Handson;
import org.chp.hw.entity.Homework;
import org.chp.hw.entity.Student;

import java.util.Optional;

/**
 * @ClassName: HandsonDao
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:58 下午
 * @Version 1.0
 **/
public interface HandsonDao {
    void saveHd(Handson handson);

    void saveWithoutAnswer(Handson handson);

    void deleteHdByID(int handson);

    Optional<Handson> getHdByID(int id);

    Integer getHdIDByStuAndHw(int hwid, int stuid);
}
