package org.chp.hw.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import org.chp.hw.constant.QuestionTypeEnum;

import javax.persistence.*;
import java.util.List;

/**
 * @ClassName: Question
 * @Description: Question entity
 * @Author: DakeWang
 * @Date: 2020/11/16 7:25 下午
 * @Version 1.0
 **/
@Entity
@Data
@Table(name = "question",schema = "CHP")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Question {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "score")
    private int score;

    @Transient
    private QuestionContent questionContent;

    @ManyToOne(cascade={CascadeType.MERGE,CascadeType.REFRESH},optional=false)
    @JoinColumn(name="homeworkID")
    private Homework homework;

    @JsonIgnore
    @OneToMany(mappedBy = "question",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Answer> answerList;
}
