
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'valferraco.mysql.dbaas.com.br',
  port     : 3306,
  user     : 'valferraco',
  password : 'Val319alex@',
  database : 'valferraco'
});


connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM grupos", function (err, result, fields) {
      if (err) throw err;
      const user = result
      console.log(user)    
    });
});