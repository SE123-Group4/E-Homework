package org.cloudhomworkplatform.cphcourse.Repository;

import org.cloudhomworkplatform.cphcourse.EmbeddedId.GroupmemberId;
import org.cloudhomworkplatform.cphcourse.Entity.Groupmember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GroupmemberRepository extends JpaRepository<Groupmember, GroupmemberId> {
    @Query("from Groupmember where id.groupID=:group")
    List<Groupmember> getById_GroupID(int group);

    @Query("from Groupmember where id.member=:member")
    List<Groupmember> getById_Member(int member);
}
