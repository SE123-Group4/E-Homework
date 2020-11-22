package com.example.course.Repository;

import com.example.course.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository extends JpaRepository<Student,Integer> {
    @Query("select name from Student where ID=:id")
    String getNameByID(int id);
}
