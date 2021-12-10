const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log("token in auth",req.headers.authorization);
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,'SecretjwtKey');
        console.log("auth decoded token",decoded);
        req.userData = decoded;
        next();
    } catch (error) {
        console.log("auth ma araha ",error);
        next({
           
            message: 'Auth failed',
            status: 401
        });
    }
};