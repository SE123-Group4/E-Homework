package org.cloudhomworkplatform.cphcourse.Repository;

import org.cloudhomworkplatform.cphcourse.EmbeddedId.TakesId;
import org.cloudhomworkplatform.cphcourse.Entity.Takes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.List;

public interface TakesRepository extends JpaRepository<Takes, TakesId> {
    @Query("from Takes where id.student=:student")
    List<Takes> getByIdStudent(int student);

    @Query("from Takes where id.courseID=:course")
    List<Takes> getByIdCourseID(int course);

    @Transactional
    @Modifying
    @Query(value="insert into takes(student,courseID) values (?,?)",nativeQuery=true)
    int insertTakes(int student,int courseID);
}
