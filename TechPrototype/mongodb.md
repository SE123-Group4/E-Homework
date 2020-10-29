# Mongodb
---
## rich Text
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
        question: {
            stem: 1,    // 富文本ID
            options: {
                {option: 'A', content: 2},
                {option: 'B', content: 3},
                {option: 'C', content: 4},
                {option: 'D', content: 5}   //content为富文本ID
            }
        },

        //填空题
        question: {
            stem: {
                '两个',
                '鸣翠柳，一行',
                '上青天。'
            },
            number: 2,  // 填空数
            files: {
                1, 2, 3, 4
            }
        },

        // 主观题
        question: {
            stem: 1 // 富文本ID
        },

        score: 10,

        // 单选
        refAnswer: {option: 'A', content: 2},

        // 多选
        refAnswer: {
            {option: 'A', content: 2},
            {option: 'B', content: 3}
        },

        // 填空
        refAnswer: {
            '黄鹂', '白鹭'
        },

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
## comment
```java
    comment: {
        ID: 1,
        handsonID: 1,
        comments: {
            {commentator: 2, content: 3, time: '2020-10-25 12:00:00'},
            {commentator: 3, content: 4, time: '2020-10-25 13:00:00'}
            // (userRole (ID), richText (ID), DateTime)
        }
    }
```
## file
```java
    file: {
        ID: 1,
        file: null,
        time: '2020-10-25 12:00:00',
        type: enum('TXT', 'JPG', 'PNG', 'MP3', 'ZIP', 'DOCX', 'XLSX', 'PPTX', 'PDF', 'MP4') // .etc
    }
```