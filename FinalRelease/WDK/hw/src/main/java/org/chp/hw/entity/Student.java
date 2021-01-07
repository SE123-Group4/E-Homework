package org.chp.hw.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @ClassName: Student
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:04 下午
 * @Version 1.0
 **/

@Entity
@Data
@Table(name = "student",schema = "CHP")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Student {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    private int schoolID;

    @Column(name = "stunumber")
    private String stuNumber;

    private String name;

    @Column(name = "class")
    private String className;

    @JsonIgnore
    @ManyToMany(mappedBy = "studentgroupList")
    private List<Group> groupList;

    @JsonIgnore
    @ManyToMany(mappedBy = "studentcourseList")
    private List<Course> courseList;
}
