package com.example.auth.Entity;

import com.example.auth.Constant.Role;
import com.example.auth.Constant.State;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Data
@Entity
@Table(name = "users", schema = "homework")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private String email;
    private String phone;
    private String password;
    private String state;
}
