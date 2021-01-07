package org.chp.hw.repository;

import org.chp.hw.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @ClassName: UserRepository
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/8 3:23 上午
 * @Version 1.0
 **/
public interface UserRepository extends JpaRepository<User, Integer> {
}
