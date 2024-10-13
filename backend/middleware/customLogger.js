function customLogger(req,res,next){
    console.log('Log form custom log ',req.url);
    next();
}
module.exports = customLogger;