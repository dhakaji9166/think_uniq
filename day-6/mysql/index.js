const express = require('express');
const mysql = require('mysql');

const app = express();

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lalchand'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Fetch data from MySQL
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM your_table', (err, rows) => {
    if (err) {
      console.error('Error querying MySQL: ', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(rows); // Send fetched data as JSON
  });
});

// Start the server
const port = 3000; // Or any port you prefer
app.listen(port, () => {
  console.log(Server running on port ${port});

});
