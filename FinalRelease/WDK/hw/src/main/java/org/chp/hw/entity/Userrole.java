package org.chp.hw.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;
import static javax.persistence.GenerationType.IDENTITY;


/**
 * @ClassName: Userrole
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/8 3:21 上午
 * @Version 1.0
 **/
@Data
@Entity
@Table(name ="userrole",schema = "homework")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
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
