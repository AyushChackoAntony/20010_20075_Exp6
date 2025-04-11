const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-form1', async (req, res) => {
  const { name, email } = req.body;
  try {
    await db.query('INSERT INTO form1 (name, email) VALUES (?, ?)', [name, email]);
    res.send(`
      Form 1 submitted successfully.
      <br><br>
      <button onclick="window.location.href='form1.html'">Back to Form</button>
      <button onclick="window.location.href='index.html'">Back to Home</button>
    `);
    
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.post('/submit-form2', async (req, res) => {
  const { feedback } = req.body;
  try {
    await db.query('INSERT INTO form2 (feedback) VALUES (?)', [feedback]);
    res.send(`
      Form 2 submitted successfully.
      <br><br>
      <button onclick="window.location.href='form2.html'">Back to Form</button>
      <button onclick="window.location.href='index.html'">Back to Home</button>
    `);
    
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.post('/submit-form3', async (req, res) => {
  const { answer1, answer2 } = req.body;
  try {
    await db.query('INSERT INTO form3 (answer1, answer2) VALUES (?, ?)', [answer1, answer2]);
    res.send(`
      Form 3 submitted successfully.
      <br><br>
      <button onclick="window.location.href='form2.html'">Back to Form</button>
      <button onclick="window.location.href='index.html'">Back to Home</button>
    `);
    
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.post('/submit-form4', async (req, res) => {
  const { booking_date, location } = req.body;
  try {
    await db.query('INSERT INTO form4 (booking_date, location) VALUES (?, ?)', [booking_date, location]);
    res.send(`
      Form 4 submitted successfully.
      <br><br>
      <button onclick="window.location.href='form2.html'">Back to Form</button>
      <button onclick="window.location.href='index.html'">Back to Home</button>
    `);
    
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.post('/submit-form5', async (req, res) => {
  const { name, message } = req.body;
  try {
    await db.query('INSERT INTO form5 (name, message) VALUES (?, ?)', [name, message]);
    res.send(`
      Form 5 submitted successfully.
      <br><br>
      <button onclick="window.location.href='form2.html'">Back to Form</button>
      <button onclick="window.location.href='index.html'">Back to Home</button>
    `);
    
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));