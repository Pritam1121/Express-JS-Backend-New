
const express = require('express')
const cors = require('cors')

require('dotenv').config()
const app = express();
app.use(cors())

const port = process.env.PORT || '4000';
const hostname =  process.env.HOSTNAME || 'localhost' ;

app.get('',(req,resp)=>{
    resp.send('This is the Home Page');
})

app.get('/courses',(req,resp)=>{
    const courses =[
        {
            id:1,
            courseName:'Full-Stack'
        },
        {
            id:2,
            courseName:'MERN-Stack'
        },
        {
            id:3,
            courseName:'MEAN-Stack'
        },
        {
            id:4,
            courseName:'UI/IX Designer'
        }
    ]
    resp.send(courses);
})

app.listen(port,()=>{
    console.log(`server is listing http://${hostname}:${port}`);
})