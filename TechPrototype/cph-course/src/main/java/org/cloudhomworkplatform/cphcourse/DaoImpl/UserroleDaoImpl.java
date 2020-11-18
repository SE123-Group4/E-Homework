package org.cloudhomworkplatform.cphcourse.DaoImpl;

import org.cloudhomworkplatform.cphcourse.Dao.UserroleDao;
import org.cloudhomworkplatform.cphcourse.Repository.UserroleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserroleDaoImpl implements UserroleDao {
    @Autowired
    private UserroleRepository userroleRepository;

    @Override
    public int getRoleIDByID(int id){
        return userroleRepository.getRoleIDByID(id);
    }
}
