package org.chp.hw.dao;

import org.chp.hw.entity.Homework;

import java.util.Optional;

/**
 * @ClassName: HomeWorkDao
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:58 下午
 * @Version 1.0
 **/
public interface HomeWorkDao {
    Optional<Homework> getByHwID(int id);

    void saveHw(Homework hw);

    void deleteHwByID(int id);
}
