package com.example.register.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Table(name ="student",schema = "homework")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Student {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int ID;

    @Basic
    private int schoolID;

    @Basic
    @Column(name = "stuNumber")
    private String stuNumber;

    @Basic
    private String name;

    @Basic
    @Column(name = "class")
    private String classname;
}
