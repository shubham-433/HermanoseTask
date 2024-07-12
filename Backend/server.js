const express = require('express');
const connectDB = require('./db/db');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const instructorRoutes = require('./routes/instructorRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', courseRoutes);
app.use('/api', instructorRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
