const jwt  = require("jsonwebtoken");

function getUserId (context) {
    // "Authorization": "Bearer <token_jwt>"
    const Authorization = context.request.get('Authorization');

    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        // VERIFY TOKEN
        const { userId } = jwt.verify(token, process.env.JWT_SCRET);

        return userId;
    }

    throw new Error('Not authenticated!');
}

module.exports = {
    getUserId
}