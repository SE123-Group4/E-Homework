package org.chp.hw.dao;

import org.chp.hw.entity.Handson;

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

    void deleteHdByID(int handson);

    Optional<Handson> getHdByID(int id);
}
