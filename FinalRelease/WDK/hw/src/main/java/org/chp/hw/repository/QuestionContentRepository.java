package org.chp.hw.repository;

import org.chp.hw.entity.QuestionContent;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionContentRepository extends MongoRepository<QuestionContent, Integer> {

}
