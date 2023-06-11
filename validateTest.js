
/* 
    Validação feita com token, o token vem pelo header neste formato:
    {
        authorization: "Bearer admin"
    }
 */

module.exports = function (req, res, next) {

    const authHeader = req.header("Authorization");
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);

    console.log(typeof token)
    console.log(token)

    if (token !== 'admin') {

        return res.sendStatus(401)
    }

    next()
}