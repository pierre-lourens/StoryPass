const express = require('express');
const app = express();
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'storyPass',
  password        : 'bananas',
  database        : 'sql_practice'
});



    app.get('/users', (req, res) => {
    
        pool.query('SELECT * FROM `Users`', function (error, results, fields) {
            // error will be an Error if one occurred during the query
            if (error) throw error;
    
            // results will contain the results of the query
            res.json(results);
            // fields will contain information about the returned results fields (if any)
        });
        
    })

    app.post('/users', (req, res) => {
        const userName = req.query.userName
        const text = req.query.text

        pool.query("INSERT INTO Users (userName, text) VALUES (?)", 
        [[userName, text]], 
        function(error, results, fields){

            if (error) throw (error)
            res.json(results)
            res.end
        });
        
    })

    app.use((req, res) => {
        res.status(404)
        .send('404 error! Resource not found.');
      });
      
    app.listen(8000);