package com.example.course.Repository;

import com.example.course.EmbeddedId.GroupmemberId;
import com.example.course.Entity.Groupmember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GroupmemberRepository extends JpaRepository<Groupmember, GroupmemberId> {
    @Query("from Groupmember where ID.groupID=:group")
    List<Groupmember> getById_GroupID(int group);

    @Query("from Groupmember where ID.member=:member")
    List<Groupmember> getById_Member(int member);
}
