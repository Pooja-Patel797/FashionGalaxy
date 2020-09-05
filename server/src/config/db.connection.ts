import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "LetsBuy",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
