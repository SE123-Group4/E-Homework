package org.chp.hw.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @ClassName: User
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/8 3:19 上午
 * @Version 1.0
 **/

@Entity
@Data
@Table(name = "users", schema = "homework")
public class User {
    @Id
    private int ID;
    private String email;
    private String phone;
    private String password;
    private String state;
}
