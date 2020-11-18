package org.cloudhomworkplatform.cphcourse.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Table(name ="teacher",schema = "chp")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "ID")
public class Teacher {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int ID;

    @Basic
    private int schoolID;

    @Basic
    @Column(name = "teanumber")
    private String teaNumber;

    @Basic
    private String name;
}
