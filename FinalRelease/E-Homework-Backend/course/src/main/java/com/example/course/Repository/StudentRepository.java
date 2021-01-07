package com.example.course.Repository;

import com.example.course.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository extends JpaRepository<Student,Integer> {
    @Query("from Student where ID=:id")
    Student getNameByID(int id);

    @Query("select ID from Student where stuNumber=:sNum and schoolID=:sID")
    int getByStuNumberAndSchoolID(String sNum,int sID);
}
