package com.example.register.Repository;

import com.example.register.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository extends JpaRepository<Student,Integer> {
    @Query("from Student where name =:name and schoolID =:sID and stuNumber =:sNum")
    Student getStudentByNameAndSchoolIDAndStuNumber(String name,int sID,String sNum);

    @Query("from Student where ID =:id")
    Student getStudentByID(int id);
}
