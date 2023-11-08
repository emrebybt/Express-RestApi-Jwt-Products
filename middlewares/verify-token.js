const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const secret_key = 'private Secret Key'
    // Gelen token bilgisini alıyoruz.
    const token = req.headers['access-token'] || req.body.token || req.query.token;
    if (token){
        jwt.verify(token, secret_key, (err, decoded) => {
            if (err) {
                res.json('Token eşleşmedi!')
            }
            else{
                req.decodedToken = decoded;
                next();
            }
          });
    }
    else{
        res.json('Token bulunamadı!')
    }
}