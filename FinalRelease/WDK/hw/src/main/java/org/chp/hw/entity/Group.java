package org.chp.hw.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @ClassName: Groups
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:06 下午
 * @Version 1.0
 **/

@Entity
@Data
@Table(name = "coursegroup",schema = "CHP")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Group {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @ManyToOne(cascade={CascadeType.MERGE,CascadeType.REFRESH},optional=false)
    @JoinColumn(name="courseID")
    private Course course;

    private String name;

    /** 维护与student的多对多关系 **/
    @ManyToMany
    @JoinTable(name = "groupmember",joinColumns = @JoinColumn(name = "groupID"),
            inverseJoinColumns = @JoinColumn(name = "memberID"))
    private List<Student> studentgroupList;
}
