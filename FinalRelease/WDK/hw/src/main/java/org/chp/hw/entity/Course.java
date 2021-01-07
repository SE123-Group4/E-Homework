package org.chp.hw.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import org.chp.hw.constant.CourseEnum;

import javax.persistence.*;
import java.util.List;

/**
 * @ClassName: Course
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:11 下午
 * @Version 1.0
 **/

@Entity
@Data
@Table(name = "course",schema = "CHP")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Course {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @ManyToOne(cascade={CascadeType.MERGE,CascadeType.REFRESH},optional=false)
    @JoinColumn(name="teacher")
    private Teacher teacher;

    private String introduction;

    private String name;

    private String book;

    @Column(name = "starttime")
    private String startTime;

    @Column(name = "endtime")
    private String endTime;

    @Enumerated(EnumType.ORDINAL)
    private CourseEnum state;

    @JsonIgnore
    @OneToMany(mappedBy = "course",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Group> groupList;

    @JsonIgnore
    @OneToMany(mappedBy = "course",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Homework> homeworkList;

    /** 维护与student的多对多关系 */
    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "takes",joinColumns = @JoinColumn(name = "courseID"),
            inverseJoinColumns = @JoinColumn(name = "student"))
    private List<Student> studentcourseList;
}
