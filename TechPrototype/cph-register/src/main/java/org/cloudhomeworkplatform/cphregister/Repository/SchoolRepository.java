package org.cloudhomeworkplatform.cphregister.Repository;

import org.cloudhomeworkplatform.cphregister.Entity.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SchoolRepository extends JpaRepository<School,Integer> {
    @Query("select id from School where name =:name")
    int getByName(String name);

    @Query("from School ")
    List<School> getSchools();
}
