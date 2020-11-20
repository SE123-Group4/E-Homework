package org.cloudhomworkplatform.cphcourse.Dao;

public interface StudentDao {
    String getNameByID(int id);

    int getByStuNumberAndSchoolID(String sNum,int sID);
}
