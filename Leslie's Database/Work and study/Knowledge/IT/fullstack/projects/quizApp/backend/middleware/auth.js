const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

    if (!token) return res.status(401).json({ error: 'No token provided' });
    if (!process.env.JWT_SECRET) {
        return res.status(500).json({ error: 'JWT_SECRET is not configured' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(403).json({ error: 'Invalid or expired token' });
    }
};
