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
    userID          int,
    roleID          int,
    FOREIGN KEY (userID) REFERENCES users (ID) ON DELETE CASCADE
);

CREATE TABLE school(
    ID              int PRIMARY KEY auto_increment,
    name            VARCHAR(50) NOT NULL
);

-- stuNumber为学号
CREATE TABLE student(
    ID              int PRIMARY KEY auto_increment,
    schoolID        int,
    stuNumber       VARCHAR(20) NOT NULL,
    name            VARCHAR(50),
    class           VARCHAR(50),
    FOREIGN KEY (schoolID) REFERENCES school (ID) ON DELETE CASCADE
);

-- teaNumber为工号
CREATE TABLE teacher(
    ID              int PRIMARY KEY auto_increment,
    schoolID        int,
    teaNumber       VARCHAR(20) NOT NULL,
    name            VARCHAR(50),
    FOREIGN KEY (schoolID) REFERENCES school (ID) ON DELETE CASCADE
);

CREATE TABLE administrator(
    ID              int PRIMARY KEY auto_increment,
    name            VARCHAR(50)
);

-- 状态为：审核中、未开始、进行中、已结课、审核未通过
CREATE TABLE course(
    ID              int PRIMARY KEY auto_increment,
    teacher         int,
    introduction    VARCHAR(255),
    name            VARCHAR(50),
    book            VARCHAR(255),
    startTime       DATETIME,
    endTime         DATETIME,
    state           enum('UNDERREVIEW', 'NOTSTARTED', 'UNDERWAY', 'FINISHED', 'NOTPASS'),
    FOREIGN KEY (teacher) REFERENCES userRole (ID) ON DELETE CASCADE
);

CREATE TABLE takes(
    student         int,
    courseID        int,
    PRIMARY KEY (student, courseID),
    FOREIGN KEY (student) REFERENCES userRole (ID) ON DELETE CASCADE,
    FOREIGN KEY (courseID) REFERENCES course (ID) ON DELETE CASCADE
);

CREATE TABLE groups(
    ID              int PRIMARY KEY auto_increment,
    courseID        int,
    name            VARCHAR(50),
    FOREIGN KEY (courseID) REFERENCES course (ID) ON DELETE CASCADE
);

CREATE TABLE groupMember(
    groupID         int,
    member          int,
    PRIMARY KEY (groupID, member),
    FOREIGN KEY (groupID) REFERENCES groups (ID) ON DELETE CASCADE,
    FOREIGN KEY (member) REFERENCES userRole (ID) ON DELETE CASCADE
);

-- resultAfter为答案成绩在提交后公布或截止时间后公布
-- 状态为草稿、已发布、已废弃
CREATE TABLE homework(
    ID              int PRIMARY KEY auto_increment,
    title           VARCHAR(50),
    assignTime      DATETIME,
    deadline        DATETIME,
    courseID        int,
    totals          int,
    isDelayed       TINYINT,
    isRepeated      TINYINT,
    isTimed         TINYINT,
    isGrouped       TINYINT,
    resultAfter     enum('SUBMIT', 'DEADLINE'),
    state           enum('DRAFT', 'ASSIGNED', 'ABORTED'),
    FOREIGN KEY (courseID) REFERENCES course (ID) ON DELETE CASCADE
);

-- 作业-对象表中状态与handson中状态重复，且状态适合放在handson中，可在handson中查询获得状态
CREATE TABLE homeworkAssign(
    ID              int PRIMARY KEY auto_increment,
    homeworkID      int,
    submitter       int NOT NULL,
    type            enum('INDIVIDUAL', 'GROUP'),
    -- state           enum('SUBMITTED', 'UNSUBMITTED', 'LATE'),
    FOREIGN KEY (homeworkID) REFERENCES homework (ID) ON DELETE CASCADE
);

-- questionID是mongodb的question主键
CREATE TABLE homeworkQuestion(
    homeworkID      int,
    questionID      int NOT NULL,
    PRIMARY KEY (homeworkID, questionID),
    FOREIGN KEY (homeworkID) REFERENCES homework (ID) ON DELETE CASCADE
);

-- 状态为：已提交、迟交（补交）、已批改
CREATE TABLE handson(
    ID              int,
    totalScore      int,
    submitTime      DATETIME,
    state           enum('SUBMITTED', 'LATE', 'CORRECTED'),
    FOREIGN KEY (ID) REFERENCES homeworkAssign (ID) ON DELETE CASCADE
);

-- content, comment都是mongodb富文本ID，questionID是mongodb的question主键
CREATE TABLE answer(
    ID              int PRIMARY KEY auto_increment,
    handsonID       int,
    questionID      int NOT NULL,
    content         int NOT NULL,
    comment         int,
    score           int,
    FOREIGN KEY (handsonID) REFERENCES handson (ID) ON DELETE CASCADE
);

-- fileID为mongodb中file的主键
CREATE TABLE personalFile(
    fileID          int NOT NULL,
    user            int,
    PRIMARY KEY (fileID, user),
    FOREIGN KEY (user) REFERENCES userRole (ID) ON DELETE CASCADE
);

CREATE TABLE courseFile(
    fileID          int NOT NULL,
    courseID        int,
    PRIMARY KEY (fileID, courseID),
    FOREIGN KEY (courseID) REFERENCES course (ID) ON DELETE CASCADE
);