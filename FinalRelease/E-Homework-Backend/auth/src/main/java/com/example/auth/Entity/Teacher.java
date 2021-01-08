package com.example.auth.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "teacher", schema = "chp")
public class Teacher {
    @Id
    private int ID;
    private int schoolID;
    private String teaNumber;
    private String name;
}
