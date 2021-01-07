package org.chp.hw.daoimpl;

import org.chp.hw.dao.GroupDao;
import org.chp.hw.entity.Group;
import org.chp.hw.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @ClassName: GroupDaoImpl
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 11:01 下午
 * @Version 1.0
 **/
@Repository
public class GroupDaoImpl implements GroupDao {
    @Autowired
    GroupRepository groupRepository;

    public Optional<Group> getByGroupID(int id){
        return groupRepository.findById(id);
    }

    public void saveGroup(Group group){
        groupRepository.saveAndFlush(group);
    }

    public void deleteGroupByID(int id){
        groupRepository.deleteById(id);
    }
}
