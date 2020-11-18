package org.cloudhomeworkplatform.cphregister.Repository;

import org.cloudhomeworkplatform.cphregister.Entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TeacherRepository extends JpaRepository<Teacher,Integer> {
    @Query("from Teacher where name =:name and schoolID =:sID and teaNumber =:tNum")
    Teacher getByNameAndSchoolIDAndTeaNumber(String name,int sID,String tNum);

    @Query("from Teacher where ID =:id")
    Teacher getByID(int id);
}
