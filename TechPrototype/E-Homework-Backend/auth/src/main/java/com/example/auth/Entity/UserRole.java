package com.example.auth.Entity;

import com.example.auth.Constant.Role;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "userrole", schema = "homework")
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private Role role;
    private int roleID;
    private int userID;
}
