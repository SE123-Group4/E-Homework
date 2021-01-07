package org.chp.hw.repository;

import org.chp.hw.entity.Userrole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @ClassName: UserRoleRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/8 3:23 上午
 * @Version 1.0
 **/
public interface UserRoleRepository extends JpaRepository<Userrole, Integer> {
    Optional<Userrole> findByRoleAndRoleID(int type, int id);
}
