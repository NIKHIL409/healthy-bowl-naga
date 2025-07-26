// filepath: c:\Users\nikhi\Healthy bowl\healthy-bowl\backend\server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Example MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Example API route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

const User = require('./models/User');

// Signup route
app.post('/api/signup', async (req, res) => {
    try {
        const { name, mobile, password } = req.body;
        const user = new User({ name, mobile, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Mobile already exists or invalid data' });
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    try {
        const { mobile, password } = req.body;
        const user = await User.findOne({ mobile, password });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});


// Forgot password route
app.post('/api/forgot-password', async (req, res) => {
    try {
        const { mobile } = req.body;
        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Here you can generate and send OTP or reset link
        res.json({ message: 'Password reset instructions sent to your mobile' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});


app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));