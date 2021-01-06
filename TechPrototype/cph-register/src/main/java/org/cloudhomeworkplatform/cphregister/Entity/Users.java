package org.cloudhomeworkplatform.cphregister.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Table(name ="users",schema = "chp")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "ID")
public class Users {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int ID;

    @Basic
    private String email;

    @Basic
    private String phone;

    @Basic
    private String password;

    /**
     *  0: INACTIVATED,
     *  1: NORMAL,
     *  2: FORBIDDEN
     */
    @Basic
    private int state;
}
