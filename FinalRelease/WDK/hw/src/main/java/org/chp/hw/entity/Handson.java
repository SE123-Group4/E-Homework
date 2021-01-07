package org.chp.hw.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import org.chp.hw.constant.HdStateEnum;

import javax.persistence.*;
import java.util.List;

/**
 * @ClassName: Handson
 * @Description: Handson entity
 * @Author: DakeWang
 * @Date: 2020/11/16 7:25 下午
 * @Version 1.0
 **/

@Entity
@Data
@Table(name = "handson",schema = "CHP")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Handson {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "totalscore")
    private Integer totalScore;

    @Column(name = "isgrouped")
    private Boolean isGrouped;

    @ManyToOne(cascade={CascadeType.MERGE,CascadeType.REFRESH},optional=false)
    @JoinColumn(name="submitter")
    private Student submitter;

    @Column(name = "submittime")
    private String submittime;

    @Enumerated(EnumType.ORDINAL)
    private HdStateEnum state;

    @ManyToOne(cascade={CascadeType.MERGE,CascadeType.REFRESH},optional=false)
    @JoinColumn(name="homeworkid")
    private Homework homework;

    @JsonIgnore
    @OneToMany(mappedBy = "handson",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Answer> answerList;
}
