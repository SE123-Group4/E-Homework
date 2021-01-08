package com.example.course.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Table(name ="course",schema = "chp")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Course {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int ID;

    @Basic
    private int teacher;

    @Basic
    private String introduction;

    @Basic
    private String name;

    @Basic
    private String book;

    @Basic
    @Column(name = "startTime")
    private String startTime;

    @Basic
    @Column(name = "endTime")
    private String endTime;

    @Basic
    private int state;

    @Basic
    private int takes;
}
