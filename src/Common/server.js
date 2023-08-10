const express = require ('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(cors())
const db = mysql.createConnection({
  host: "localhost",
  user:'root',
  password:'HTMYSQL',
    database:'login'
})
app.post('/login', (req, res) => {
    const sql = "INSERT INTO login.user_login (`username`,`password`)"
})

app.get('/',(re, res) => {
    return res.json("School Pay database");
})


app.post('/login', (re, res) => {
    const {username, password} = re.body;

        // validation
    if(!username || !password){
        return res.sendStatus(400).send("you forgot entering either your password or ur username")
    }
    console.log("you are tring to login madam");
    //const sql = `SELECT * FROM school_fee where(username = ${username}, password = ${password})`;
    const sql = `SELECT * FROM login.user_login where username = "${username}" and password = "${password}";`
    console.log("the query looks like ", sql);
    db.query(sql, (err, data) => {
        
        
        
         return res.sendStatus(200).send(data);
    })
})

app.listen(3002, () => {
    console.log("Listening");
})
