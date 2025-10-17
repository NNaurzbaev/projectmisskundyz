import express from 'express';
import sqlite3 from 'sqlite3';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, 'messages.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('Ошибка при открытии базы:', err.message);
  else console.log('База данных подключена:', dbPath);
});

db.run(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    subject TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  db.run(
    `INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)`,
    [name, email, subject, message],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Ошибка при сохранении.');
      } else {
        res.redirect('/contact.html?success=true');
      }
    }
  );
});


app.listen(3000, () => {
  console.log('🚀 Сервер запущен: http://localhost:3000');
});
