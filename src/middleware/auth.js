const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        console.log('1');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('2');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user;
        next();
        console.log(token);
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.'})
    }
};

module.exports = auth;