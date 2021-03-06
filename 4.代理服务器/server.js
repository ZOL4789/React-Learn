const express = require('express')
const app = express()

app.use((request, response, next)=>{
    console.log('有人请求了服务器1');
    console.log('请求来自于',request.get('Host'));
    console.log('请求地址',request.url);
    next();
})

app.get('/students', (request, response)=>{
    const students = [
        {id:1,name:'tom',age:18},
        {id:1,name:'jack',age:18},
        {id:1,name:'herry',age:19},
    ]
    response.send(students);
})


app.listen(5000, (err)=>{
    if(!err){
        console.log("有人请求了服务器，地址为http://localhost:5000/students");
    }
})


// 代理服务器。node server.js启动服务器