const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { User } = require('./models');

const app = express();
const port = 5000;

const corsOptions = {
  origin: 'http://localhost:3000', // Permitir solicitudes desde este origen
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
