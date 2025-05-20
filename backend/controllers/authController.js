const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

exports.register = (req, res) => {
  const {email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'All fields are required' });

  const hash = bcrypt.hashSync(password, 10);

  const sql = 'INSERT INTO users (email, password) VALUES ( ?, ?)';
  db.query(sql, [email, hash], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    return res.status(201).json({ message: 'User registered' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });

    const user = results[0];

    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return res.status(200).json({ token, user: { id: user.id, username: user.username } });
  });
};
