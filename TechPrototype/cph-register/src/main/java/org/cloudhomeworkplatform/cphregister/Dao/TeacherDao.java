package org.cloudhomeworkplatform.cphregister.Dao;

import org.cloudhomeworkplatform.cphregister.Entity.Teacher;

public interface TeacherDao {
    Teacher getByNameAndSchoolIDAndTeaNumber(String name, int sID, String tNum);

    Teacher getByID(int id);
}
