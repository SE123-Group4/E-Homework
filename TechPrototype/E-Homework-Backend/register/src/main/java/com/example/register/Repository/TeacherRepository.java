package com.example.register.Repository;

import com.example.register.Entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TeacherRepository extends JpaRepository<Teacher,Integer> {
    @Query("from Teacher where name =:name and schoolID =:sID and teaNumber =:tNum")
    Teacher getByNameAndSchoolIDAndTeaNumber(String name,int sID,String tNum);

    Optional<Teacher> findByNameAndSchoolIDAndTeaNumber(String name, int sID, String tNum);

    @Query("from Teacher where ID =:id")
    Teacher getByID(int id);
}
