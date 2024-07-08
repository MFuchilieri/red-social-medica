const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { User } = require('./models');

const app = express();
const port = 5000;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  try {
    const user = await User.findOne({ where: { email, password } });
    console.log(user);
    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, 'SECRET_KEY', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Error logging in: ' + error.message);
  }
});

app.post('/register', async (req, res) => {
  const { name, username, password, email, role, avatarUrl } = req.body;

  if (!name || !username || !password || !email || !role) {
    return res.status(400).send('All fields are required');
  }

  try {
    const newUser = await User.create({ name, username, password, email, role, avatarUrl });
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send('Error registering user: ' + error.message);
  }
});

app.get('/profile', authenticate, async (req, res) => {
  console.log("esta en backend");
  try {
    const user = await User.findByPk(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(400).send('Error fetching user data: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function authenticate(req, res, next) {
  
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const verified = jwt.verify(token, 'SECRET_KEY');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
}
