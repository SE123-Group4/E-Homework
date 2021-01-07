package org.chp.hw.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

/**
 * @ClassName: Answer
 * @Description: Answer entity
 * @Author: DakeWang
 * @Date: 2020/11/16 7:24 下午
 * @Version 1.0
 **/

@Entity
@Data
@Table(name = "answer",schema = "CHP")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Answer {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "score")
    private Integer score;

    @Transient
    private AnswerContent content;

    @Transient
    private Comment comment;

    @ManyToOne(cascade={CascadeType.MERGE,CascadeType.REFRESH},optional=false)
    @JoinColumn(name="questionid")
    private Question question;

    @ManyToOne(cascade={CascadeType.MERGE,CascadeType.REFRESH},optional=false)
    @JoinColumn(name="handsonid")
    private Handson handson;
}
