package org.cloudhomworkplatform.cphcourse.Dao;

import org.cloudhomworkplatform.cphcourse.Entity.Groupmember;

import java.util.List;

public interface GroupmemberDao {
    List<Groupmember> getById_GroupID(int group);

    List<Groupmember> getById_Member(int member);
}
