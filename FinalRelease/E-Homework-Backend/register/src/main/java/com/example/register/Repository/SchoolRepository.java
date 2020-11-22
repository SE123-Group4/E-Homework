package com.example.register.Repository;

import com.example.register.Entity.School;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SchoolRepository extends JpaRepository<School, String> {
    School getByName(String name);
}
