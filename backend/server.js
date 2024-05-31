const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'tododb',
  password: 'password',
  port: 5432,
});

app.get('/todos', async (req, res) => {
  const result = await pool.query('SELECT * FROM todos');
  res.json(result.rows);
});

app.post('/todos', async (req, res) => {
  const { content } = req.body;
  const result = await pool.query('INSERT INTO todos (content) VALUES ($1) RETURNING *', [content]);
  res.json(result.rows[0]);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
