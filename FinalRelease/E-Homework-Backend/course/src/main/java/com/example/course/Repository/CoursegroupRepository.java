package com.example.course.Repository;

import com.example.course.Entity.Coursegroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CoursegroupRepository extends JpaRepository<Coursegroup,Integer> {
    @Query("from Coursegroup where courseID=:cID")
    List<Coursegroup> getByCourseID(int cID);

    @Query("from Coursegroup where ID=:id")
    Coursegroup getByID(int id);

    @Transactional
    @Modifying
    @Query(value="insert into coursegroup(courseID,name) values (?,?)",nativeQuery=true)
    int insertCourseGroup(int cID,String name);

    @Query("select ID from Coursegroup where courseID=:cID and name=:name")
    int getByCourseIDAndName(int cID,String name);
}
