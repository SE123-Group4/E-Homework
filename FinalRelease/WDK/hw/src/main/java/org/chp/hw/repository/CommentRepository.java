package org.chp.hw.repository;

import org.chp.hw.entity.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @ClassName: CommentRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/20 1:56 下午
 * @Version 1.0
 **/
public interface CommentRepository extends MongoRepository<Comment, Integer> {
}
