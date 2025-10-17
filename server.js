const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./data/messages.db');

db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    subject TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    db.run(
        `INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)`,
        [name, email, subject, message],
        (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Ошибка сервера');
            } else {
                res.redirect('/contact.html?success=true');
            }
        }
    );
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
