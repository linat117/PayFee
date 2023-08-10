

const mysql = require("mysql")

const conn  =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"school-fee"
})

conn.connect((err) => {
    if(err) throw err;
    else console.log("database is connected")
})