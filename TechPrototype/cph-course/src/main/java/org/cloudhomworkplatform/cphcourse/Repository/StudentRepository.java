package org.cloudhomworkplatform.cphcourse.Repository;

import org.cloudhomworkplatform.cphcourse.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository extends JpaRepository<Student,Integer> {
    @Query("select name from Student where ID=:id")
    String getNameByID(int id);

    @Query("select ID from Student where stuNumber=:sNum and schoolID=:sID")
    int getByStuNumberAndSchoolID(String sNum,int sID);
}
