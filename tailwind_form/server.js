const express = require ("express");
const app= express();
const  mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  user            : 'root',
  host            : 'localhost',
  password        : '',
  database        : 'employee'
});

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.post('/sign',(req,res)=>{
  const sql="INSERT INTO webpage (`firstname`,`surname`,`email`,`password`) Values(?)";

  const values = [req.body.firstname, req.body.surname, req.body.email,req.body.password]

  db.query(sql,[ values],(err,data)=>{
      if(err)
      return res.json(data);
  })
})

app.post("/login",(req,res)=>{
    const sql="SELECT * FROM webpage WHERE `email`= ? AND `password`= ?";

    db.query(sql,[req.body.email,req.body.password],(err,result)=>{
        if(err){
            return res.json("Error");
        }
        if(result.length > 0){
            return res.json("Login Success")
        }else{
            return res.json("No Record")
        }
    })
})


app.listen(8083,()=>{
    console.log("Listening on port number 8083");
})