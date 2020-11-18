package org.cloudhomeworkplatform.cphregister.Dao;

import org.cloudhomeworkplatform.cphregister.Entity.School;

import java.util.List;

public interface SchoolDao {
    int getByName(String name);

    List<School> getSchools();
}
