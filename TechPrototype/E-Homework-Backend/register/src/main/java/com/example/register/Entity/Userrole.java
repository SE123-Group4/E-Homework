package com.example.register.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Table(name ="userrole",schema = "homework")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "ID")
public class Userrole {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int ID;

    /**
     * student:1
     * teacher:2
     * administer:3
     */
    @Basic
    private int role;

    @Basic
    private int userID;

    @Basic
    private int roleID;
}
