package com.example.auth.Repository;

import com.example.auth.Constant.Role;
import com.example.auth.Entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {
    Optional<UserRole> findByUserID(Integer userID);
    Optional<UserRole> findByUserIDAndRole(int ID, Role role);
}
