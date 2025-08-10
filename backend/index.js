const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'productsdb',
  password: 'postgrespassword',
  port: 5432,
});

app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM product');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = 4000;
app.listen(port, () => console.log(`Backend listening on port ${port}`));
