# Code
---
## URL
- 命名为```http://localhost:8080/服务器/名词(首字母大写,如Student,PersonalFile)/```
- 通过```post```、```get```等方法区分

## 后端类
- 命名需每个单词首字母大写，如```StudentServiceImpl```、```Course```、```HomeworkController```等
- 实体类加Lombok```@Data```注解，不需要另加getter, setter

## 类的分类
- Utils为封装后便于使用的类，如```HttpClient```、```PostRequest```，且封装后端的返回值，如：
```
Return<T>: {
    msg: 'return message',
    status: 404,    // 404/200/500
    data: {
        ...
    }   // Object T
}
```
- Constant内用大写字母定义相应常量，如```APP_ID```、```MAX_VALUE```等
- 若同质化类较多可放进同一个package中，便于查看
```
Entity
    File
        PersonalFile
        CourseFile
    User
        User
        Student
        Teacher
        Administrator
    Else
```

## 后端函数名
- 一般为动词加名词，动词小写，名词首字母大写，如```submit()```、```getStudents()```、```isEmpty()```、```addFile()```等，```Login()```之类的除外

## 变量名
- 变量首字母小写，变量中之后单词首字母大写，如```bool isTimed;```、```String submitTime;```等

## 注释
- 最好在每个类、函数前加上注释，介绍该类、函数功能，复杂代码块或不易理解的变量、运算前也可加注释，如：
```
// 函数功能
void submit(int, JSONObject, ...) {
    // 变量
    int something;

    // 重点代码功能及逻辑
    for (int i = 0; i < something; i++) {
        ...
    }
}
```

## 代码风格
- ESLint