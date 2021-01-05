package com.example.course.DaoImpl;

import com.example.course.Dao.GroupmemberDao;
import com.example.course.Entity.Groupmember;
import com.example.course.Repository.GroupmemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GroupmemberDaoImpl implements GroupmemberDao {
    @Autowired
    private GroupmemberRepository groupmemberRepository;

    @Override
    public List<Groupmember> getById_GroupID(int group){
        return groupmemberRepository.getById_GroupID(group);
    }

    @Override
    public List<Groupmember> getById_Member(int member){
        return groupmemberRepository.getById_Member(member);
    }

    @Override
    public int insertGroupMember(int groupID,int member){
        return groupmemberRepository.insertGroupMember(groupID, member);
    }
}
