package org.chp.hw.repository;

import org.chp.hw.entity.Handson;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @ClassName: HandsonRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 9:45 下午
 * @Version 1.0
 **/
public interface HandsonRepository extends JpaRepository<Handson, Integer> {
}
