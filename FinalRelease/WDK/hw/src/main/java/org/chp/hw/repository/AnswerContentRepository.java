package org.chp.hw.repository;

import org.chp.hw.entity.AnswerContent;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @ClassName: AnswerContentRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/6 11:24 上午
 * @Version 1.0
 **/
public interface AnswerContentRepository extends MongoRepository<AnswerContent, Integer> {
}
