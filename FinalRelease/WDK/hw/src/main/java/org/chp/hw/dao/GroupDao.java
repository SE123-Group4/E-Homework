package org.chp.hw.dao;

import org.chp.hw.entity.Answer;
import org.chp.hw.entity.Group;

import java.util.Optional;

/**
 * @ClassName: GroupDao
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:59 下午
 * @Version 1.0
 **/
public interface GroupDao {
    Optional<Group> getByGroupID(int id);

    void saveGroup(Group group);

    void deleteGroupByID(int id);
}
