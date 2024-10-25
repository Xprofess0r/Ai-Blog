import express from 'express';
import bcrypt from 'bcrypt'; // For password hashing
import jwt from 'jsonwebtoken';

const router = express.Router();

// Mock user database (for demonstration purposes)
const users = [];

// Registration endpoint
router.post('/api/auth/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user and store in the mock database
  const newUser = { username, email, password: hashedPassword };
  users.push(newUser);

  // Create a JWT token using the secret from .env
  const token = jwt.sign({ email: newUser.email, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token, message: 'User created successfully' });
});

export default router;
