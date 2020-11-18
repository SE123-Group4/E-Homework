package org.cloudhomeworkplatform.cphregister.Dao;

import org.cloudhomeworkplatform.cphregister.Entity.Student;

public interface StudentDao {
    Student getStudentByNameAndSchoolIDAndStuNumber(String name, int sID, String sNum);

    Student getStudentByID(int id);
}
