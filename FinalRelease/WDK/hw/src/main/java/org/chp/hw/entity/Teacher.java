package org.chp.hw.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @ClassName: Teacher
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:04 下午
 * @Version 1.0
 **/

@Entity
@Data
@Table(name = "teacher",schema = "CHP")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Teacher {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name = "schoolid")
    private int schoolid;

    @Column(name = "teanumber")
    private String teanumber;

    @Column(name = "name")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "teacher",cascade= CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Course> courseList;
}
