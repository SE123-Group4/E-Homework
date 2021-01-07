package org.chp.hw.daoimpl;

import org.chp.hw.dao.AnswerDao;
import org.chp.hw.entity.*;
import org.chp.hw.repository.AnswerContentRepository;
import org.chp.hw.repository.AnswerRepository;
import org.chp.hw.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @ClassName: AnswerDaoImpl
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 11:01 下午
 * @Version 1.0
 **/
@Repository
public class AnswerDaoImpl implements AnswerDao {
    @Autowired
    AnswerRepository answerRepository;

    @Autowired
    AnswerContentRepository answerContentRepository;

    @Autowired
    CommentRepository commentRepository;

    public Optional<Answer> getByAnswerID(int id){
        Optional<Answer> answerOptional = answerRepository.findById(id);
        if(answerOptional.isPresent()){
            Answer answer  = answerOptional.get();
            Optional<AnswerContent> answerContentOptional = answerContentRepository.findByInnerID(id);
            Optional<Comment> commentOptional = commentRepository.findById(id);
            if(answerContentOptional.isPresent()){
                answer.setContent(answerContentOptional.get());
            }
            if(commentOptional.isPresent()){
                answer.setComment(commentOptional.get());
            }
            return Optional.of(answer);
        }
        return Optional.empty();
    }

    public void saveAnswer(Answer answer){
        answerRepository.saveAndFlush(answer);
        if(answer.getContent() != null){
            answer.getContent().setInnerID(answer.getId());
            answerContentRepository.save(answer.getContent());
        }
        if(answer.getComment() != null){
            answer.getComment().setId(answer.getId());
            commentRepository.save(answer.getComment());
        }
    }

    public void deleteAnswerByID(int id){
        Optional<Answer> answerOptional = getByAnswerID(id);
        if(answerOptional.isPresent()){
            answerContentRepository.delete(answerOptional.get().getContent());
            answerRepository.delete(answerOptional.get());
        }
    }
}
