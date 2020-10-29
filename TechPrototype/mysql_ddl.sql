DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS administrator;
DROP TABLE IF EXISTS userRole;
DROP TABLE IF EXISTS school;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS takes;
DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS groupMember;
DROP TABLE IF EXISTS homework;
DROP TABLE IF EXISTS homeworkAssign;
DROP TABLE IF EXISTS homeworkQuestion;
DROP TABLE IF EXISTS answer;
DROP TABLE IF EXISTS handson;
DROP TABLE IF EXISTS personalFile;
DROP TABLE IF EXISTS courseFile;

-- 状态为：未激活、正常、禁用
CREATE TABLE users(
    ID              int PRIMARY KEY auto_increment,
    email           VARCHAR(20),
    phone           VARCHAR(20),
    password        VARCHAR(20) NOT NULL,
    state           enum('INACTIVATED', 'NORMAL', 'FORBIDDEN')
);

CREATE TABLE userRole(
    ID              int PRIMARY KEY auto_increment,
    role            enum('STUDENT', 'TEACHER', 'ADMINISTRATOR'),
    userID          VARCHAR(20) REFERENCES users (ID) ON DELETE CASCADE,
    roleID          VARCHAR(20)
);

-- stuNumber为学号
CREATE TABLE student(
    ID              int PRIMARY KEY auto_increment,
    schoolID        int REFERENCES school (ID) ON DELETE CASCADE,
    stuNumber       VARCHAR(20) NOT NULL,
    name            VARCHAR(50),
    class           VARCHAR(50)
);

-- teaNumber为工号
CREATE TABLE teacher(
    ID              int PRIMARY KEY auto_increment,
    schoolID        int REFERENCES school (ID) ON DELETE CASCADE,
    teaNumber       VARCHAR(20) NOT NULL,
    name            VARCHAR(50)
);

CREATE TABLE administrator(
    ID              int PRIMARY KEY auto_increment,
    name            VARCHAR(50)
);

CREATE TABLE school(
    ID              int PRIMARY KEY auto_increment,
    name            VARCHAR(50) NOT NULL
);

-- 状态为：审核中、未开始、进行中、已结课、审核未通过
CREATE TABLE course(
    ID              int PRIMARY KEY auto_increment,
    teacher         int REFERENCES userRole (ID) ON DELETE CASCADE,
    introduction    VARCHAR(255),
    name            VARCHAR(50),
    book            VARCHAR(255),
    startTime       DATETIME,
    endTime         DATETIME,
    state           enum('UNDERREVIEW', 'NOTSTARTED', 'UNDERWAY', 'FINISHED', 'NOTPASS')
);

CREATE TABLE takes(
    student         int REFERENCES userRole (ID) ON DELETE CASCADE,
    courseID        int REFERENCES course (ID) ON DELETE CASCADE,
    PRIMARY KEY (student, courseID)
);

CREATE TABLE groups(
    ID              int PRIMARY KEY auto_increment,
    courseID        int REFERENCES course (ID) ON DELETE CASCADE,
    name            VARCHAR(50)
);

CREATE TABLE groupMember(
    groupID         int REFERENCES groups (ID) ON DELETE CASCADE,
    member          int REFERENCES userRole (ID) ON DELETE CASCADE,
    PRIMARY KEY (groupID, member)
);

-- resultAfter为答案成绩在提交后公布或截止时间后公布
-- 状态为草稿、已发布、已废弃
CREATE TABLE homework(
    ID              int PRIMARY KEY auto_increment,
    title           VARCHAR(50),
    assignTime      DATETIME,
    deadline        DATETIME,
    courseID        int REFERENCES course (ID) ON DELETE CASCADE,
    totals          int,
    isDelayed       TINYINT,
    isRepeated      TINYINT,
    isTimed         TINYINT,
    isGrouped       TINYINT,
    resultAfter     enum('SUBMIT', 'DEADLINE'),
    state           enum('DRAFT', 'ASSIGNED', 'ABORTED')
);

-- 作业-对象表中状态与handson中状态重复，且状态适合放在handson中，可在handson中查询获得状态
CREATE TABLE homeworkAssign(
    ID              int PRIMARY KEY auto_increment,
    homeworkID      int REFERENCES homework (ID) ON DELETE CASCADE,
    submitter       int NOT NULL,
    type            enum('INDIVIDUAL', 'GROUP')
    -- state           enum('SUBMITTED', 'UNSUBMITTED', 'LATE'),
);

-- questionID是mongodb的question主键
CREATE TABLE homeworkQuestion(
    homeworkID      int REFERENCES homework (ID) ON DELETE CASCADE,
    questionID      int NOT NULL,
    PRIMARY KEY (homeworkID, questionID)
);

-- content, comment都是mongodb富文本ID，questionID是mongodb的question主键
CREATE TABLE answer(
    ID              int PRIMARY KEY auto_increment,
    handsonID       int REFERENCES handson (ID) ON DELETE CASCADE,
    questionID      int NOT NULL,
    content         int NOT NULL,
    comment         int,
    score           int
);

-- 状态为：已提交、迟交（补交）、已批改
CREATE TABLE handson(
    ID              int REFERENCES homeworkAssign (ID) ON DELETE CASCADE,
    totalScore      int,
    submitTime      DATETIME,
    state           enum('SUBMITTED', 'LATE', 'CORRECTED')
);

-- fileID为mongodb中file的主键
CREATE TABLE personalFile(
    fileID          int NOT NULL,
    user            int REFERENCES userRole (ID) ON DELETE CASCADE,
    PRIMARY KEY (fileID, user)
);

CREATE TABLE courseFile(
    fileID          int NOT NULL,
    courseID        int REFERENCES course (ID) ON DELETE CASCADE,
    PRIMARY KEY (fileID, courseID)
);