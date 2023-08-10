 import express from 'express'
 import mysql from 'mysql2'
 import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host : "localhost",
    user: 'root',
    password: "HTMYSQL",
    database : 'schoolpay'
})
app.post('/schoolpay', (req, res) => {
    const sql = "INSERT INTO schoolpay.user_signup(`firstname`,`lastname`,`username`,`password`,`confirmpassword`) VALUES(?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.username,
        req.body.password,
        req.body.confirmpassword
    ]
    db.query(sql, [values], (err, result) =>{
        if(err) return res.json({Message: "error in node"});
        return res.json(result);
    })
})

 app.listen(3000, () => {
    console.log("connected to the server");
 })