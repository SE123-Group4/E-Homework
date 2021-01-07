package org.chp.hw.repository;

import org.chp.hw.entity.Handson;
import org.chp.hw.entity.Homework;
import org.chp.hw.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

/**
 * @ClassName: HandsonRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 9:45 下午
 * @Version 1.0
 **/
public interface HandsonRepository extends JpaRepository<Handson, Integer> {
    @Query(value = "select id from handson h where h.homeworkID = ?1 and h.submitter = ?2", nativeQuery = true)
    Integer findIDByHWIDAndSTUID(int hwid, int stuid);
}
