package com.example.auth.Entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "student", schema = "homework")
public class Student {
    @Id
    private int ID;
    private int schoolID;
    private String stuNumber;
    private String name;
    @Basic
    @Column(name = "class")
    private String classname;
}
