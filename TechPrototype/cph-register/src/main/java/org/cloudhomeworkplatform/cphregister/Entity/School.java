package org.cloudhomeworkplatform.cphregister.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Table(name ="school",schema = "chp")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class School {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "ID")
    private int id;

    @Basic
    private  String name;

}
