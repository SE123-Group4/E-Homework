package org.chp.hw.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import org.chp.hw.constant.HwResultEnum;
import org.chp.hw.constant.HwStateEnum;

import javax.persistence.*;
import java.util.List;

/**
 * @ClassName: Homework
 * @Description: Homework entity
 * @Author: DakeWang
 * @Date: 2020/11/16 7:25 下午
 * @Version 1.0
 **/
@Entity
@Data
@Table(name = "homework",schema = "CHP")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Homework {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "assigntime")
    private String assignTime;

    @Column(name = "deadline")
    private String deadline;

    @Column(name = "totals")
    private int totals;

    @Column(name = "isdelayed")
    private boolean isdelayed;

    @Column(name = "isrepeated")
    private boolean isrepeated;

    @Column(name = "istimed")
    private boolean istimed;

    @Column(name = "isgrouped")
    private boolean isgrouped;

    @Column(name = "resultafter")
    @Enumerated(EnumType.ORDINAL)
    private HwResultEnum resultafter;

    @Enumerated(EnumType.ORDINAL)
    private HwStateEnum state;

    @ManyToOne(cascade={CascadeType.MERGE,CascadeType.REFRESH},optional=false)
    @JoinColumn(name="courseid")
    private Course course;

    @JsonIgnore
    @OneToMany(mappedBy = "homework",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Handson> handsonList;

    @JsonIgnore
    @OneToMany(mappedBy = "homework",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Question> questionList;
}
