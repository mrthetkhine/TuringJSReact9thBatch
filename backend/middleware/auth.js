function verifyUserToken(req,res,next){
    console.log('Auth Middleware ',req.headers.authorization);
    if(!req.headers.authorization){
        res.status(401).send('Not authorized').end();
    }
    next();
}
module.exports = {
    verifyUserToken
};