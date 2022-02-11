const jwt  = require("jsonwebtoken");

function getUserId (context) {
    // "Authorization": "Bearer <token_jwt>"
    const Authorization = context.request.get('Authorization');

    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        // RETORNA TOKEN VERIFICADO
        const {userId} = jwt.verify(token, process.env.JWT_SCRET);
    }
}