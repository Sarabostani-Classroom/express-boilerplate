exports.authCheck = (req, res, next) => {
    if (req.auth_token && isAuthenticated(req.auth_token))
        next();
    else
        res.status(401).end();
}