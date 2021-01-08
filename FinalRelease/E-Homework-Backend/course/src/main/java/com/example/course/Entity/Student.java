package com.example.course.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Table(name ="student",schema = "chp")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "ID")
public class Student {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int ID;

    @Basic
    private int schoolID;

    @Basic
    private String stuNumber;

    @Basic
    private String name;

    @Basic
    @Column(name = "class")
    private String classname;
}
