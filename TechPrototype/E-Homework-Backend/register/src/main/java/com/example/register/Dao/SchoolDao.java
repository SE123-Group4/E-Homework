package com.example.register.Dao;

import com.example.register.Entity.School;

import java.util.List;

public interface SchoolDao {
    int getByName(String name);

    List<School> getSchools();
}
