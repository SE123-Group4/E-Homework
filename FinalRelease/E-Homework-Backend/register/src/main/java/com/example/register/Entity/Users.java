package com.example.register.Entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "users", schema = "chp")
public class Users {
    @Id
    private int ID;
    private String email;
    private String phone;
    private String password;
    private int state;
}
