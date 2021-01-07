package org.chp.hw.repository;

import org.chp.hw.entity.QuestionContent;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface QuestionContentRepository extends MongoRepository<QuestionContent, Integer> {
    Optional<QuestionContent> findByInnerID(int id);
}
