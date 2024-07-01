const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./models'); // Importa el modelo de usuario

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { name, username, password, email, role, avatarUrl } = req.body;

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
