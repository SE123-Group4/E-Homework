package com.example.course.Repository;

import com.example.course.Entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TeacherRepository extends JpaRepository<Teacher,Integer> {
    @Query("select name from Teacher where ID=:id")
    String getNameByID(int id);
}
