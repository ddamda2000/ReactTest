const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//사용하지 않아도 json방식으로 반환되는거 확인
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended : true }));

app.get('/api/customers', (req, res) => {
    res.send([ 
        {
            'id' : 'rosedamask'
        ,   'image' : 'https://placeimg.com/64/64/any'
        ,   'name' : '김판수'
        ,   'age' : '27'
        ,   'job' : '백수'
        ,   'point' : '그냥병신'
        }
        ,
        {
            'id' : 'rlatjddyd23'
        ,   'image' : 'https://placeimg.com/64/64/2'
        ,   'name' : '김성용'
        ,   'age' : '27'
        ,   'job' : '회사원'
        ,   'point' : '인격장애'
        }
        ,
        {
            'id' : 'lys9765'
        ,   'image' : 'https://placeimg.com/64/64/3'
        ,   'name' : '이용섭'
        ,   'age' : '27'
        ,   'job' : '취준생'
        ,   'point' : '코딩노예'
        }
        ,
        {
            'id' : 'dudqja'
        ,   'image' : 'https://placeimg.com/64/64/4'
        ,   'name' : '김영범'
        ,   'age' : '27'
        ,   'job' : '공시생'
        ,   'point' : '붕어빵못만드는새끼'
        } 
    ]);
});

app.listen(port, () => console.log(`Listening port ${port}`));