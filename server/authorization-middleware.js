const jwt = require('jsonwebtoken');//eslint-disable-line
const ClientError = require('./client-error');//eslint-disable-line

function authorizationMiddleware(req, res, next) {
  const token = req.get('X-Access-Token');
  if (!token) {
    throw new ClientError(401, 'authentication required');
  }
  const payload = jwt.verify(token, process.env.TOKEN_SECRET);//eslint-disable-line
}

export default authorizationMiddleware;
