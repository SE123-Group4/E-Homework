package org.cloudhomworkplatform.cphcourse.Repository;

import org.cloudhomworkplatform.cphcourse.Entity.Userrole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserroleRepository extends JpaRepository<Userrole,Integer> {
    @Query("select roleID from Userrole where ID=:id")
    int getRoleIDByID(int id);
}
