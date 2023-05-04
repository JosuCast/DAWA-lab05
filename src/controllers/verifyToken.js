const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req, res, next){
    const token = req.header('Authorization');
    if(!token){
        return res.redirect("/signin");
    }

    const decoded = jwt.verify(token, config.secret);

    req.userId = decoded.id;
    next();

}

module.exports = verifyToken;