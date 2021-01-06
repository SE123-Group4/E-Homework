# Mongodb
---
## ~~rich Text~~
```java
    richText: {
        ID: 1,
        content: 'xscsdcds',
        files: {
            1, 2, 3, 4
        }                   // file (ID)
    }
```

## question
```java
    question: {
        ID: 1,

        // 选择题
        
        stem: "stem",
        image: "base64",
        options: {
            {option: 'A', content: "string", image:"base64"},
            {option: 'B', content: "string", image:"base64"},
            {option: 'C', content: "string", image:"base64"},
            {option: 'D', content: "string", image:"base64"}
        }

        //填空题
        //question: {
        //    stem: {
        //        '两个',
        //        '鸣翠柳，一行',
        //        '上青天。'
        //    },
        //    number: 2,  // 填空数
        //    files: {
        //        1, 2, 3, 4
        //    }
        //},

        // 主观题        
        stem: "string",
        image: "base64"

        score: 10,

        // 单选
        refAnswer: {option: 'A', content: "string", image:"base64"},

        // 多选
        refAnswer: {
            {option: 'A', content: "string", image:"base64"},
            {option: 'B', content: "string", image:"base64"}
        },

        // 填空
        //refAnswer: {
        //    '黄鹂', '白鹭'
        //},

        // 主观题
        refAnswer: 6,    // 富文本ID

        analysis: 1,    // 富文本ID

        type: enum(
            'ONE_CHOICE', 
            'MULTIPLE_CHOICE', 
            'FILL_IN_THE_BLANK', 
            'TRUE_OR_FALSE', 
            'SUBJECTIVE'
        )
    }
```
## ~~comment~~
```java
    comment: {
        ID: 1,
        handsonID: 1,
        comments: {
            {commentator: 2, content: "string", image:"base64", time: '2020-10-25 12:00:00'},
            {commentator: 3, content: "string", image:"base64", time: '2020-10-25 13:00:00'}
            // (userRole (ID), richText (ID), DateTime)
        }
    }
```
## ~~file~~
```java
    file: {
        ID: 1,
        file: null,
        time: '2020-10-25 12:00:00',
        type: enum('TXT', 'JPG', 'PNG', 'MP3', 'ZIP', 'DOCX', 'XLSX', 'PPTX', 'PDF', 'MP4') // .etc
    }
```