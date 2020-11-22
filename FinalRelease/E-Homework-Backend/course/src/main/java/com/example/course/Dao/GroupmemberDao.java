package com.example.course.Dao;

import com.example.course.Entity.Groupmember;

import java.util.List;

public interface GroupmemberDao {
    List<Groupmember> getById_GroupID(int group);

    List<Groupmember> getById_Member(int member);
}
