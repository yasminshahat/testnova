const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { readData, writeData } = require('../utils/storage');
const { successResponse, errorResponse } = require('../utils/response');

exports.register = async (req, res) => {
  try {
    const { username, email, password, role = 'student' } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res
        .status(400)
        .json(errorResponse('All fields are required', 400));
    }

    // Get existing users
    const users = await readData();

    // Check if user exists
    const userExists = users.some(
      (user) => user.email === email || user.username === username
    );

    if (userExists) {
      return res
        .status(400)
        .json(errorResponse('Email or username already exists', 400));
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date().toISOString(),
    };

    // Save user
    users.push(newUser);
    await writeData(users);

    // Generate token
    const token = jwt.sign(
      { id: newUser.id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json(
      successResponse(
        {
          user: userWithoutPassword,
          token,
        },
        'Registration successful'
      )
    );
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json(errorResponse('Registration failed', 500));
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json(errorResponse('Email and password are required', 400));
    }

    // Get users
    const users = await readData();

    // Find user
    const user = users.find((u) => u.email === email);

    if (!user) {
      return res
        .status(401)
        .json(errorResponse('Invalid email or password', 401));
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res
        .status(401)
        .json(errorResponse('Invalid email or password', 401));
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.json(
      successResponse(
        {
          user: userWithoutPassword,
          token,
        },
        'Login successful'
      )
    );
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json(errorResponse('Login failed', 500));
  }
};

// Add login to exports
exports.login = login;
