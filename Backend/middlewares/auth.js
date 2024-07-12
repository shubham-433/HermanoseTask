const jwt = require('jsonwebtoken');

const authMiddleware = (role) => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied.');

  try {
    const payload = jwt.verify(token, 'your_jwt_secret');
    if (role && payload.role !== role) return res.status(403).send('Forbidden.');
    req.user = payload;
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
};

module.exports = authMiddleware;
