var data = require("./fakeData");

function isString(x) {

    return Object.prototype.toString.call(x) === "[object String]"
}

module.exports = function (req, res) {

    var { name, job } = req.body;
    let id

    if (!isString(name) || !isString(job)) return res.status(400).send('Formato incorreto!')

    if (name.length < 3 || job.length < 3) return res.status(400).send('Nome e Trabalho precisam ter tamanho maior ou igual a 3!')

    for (let i in data) {
        id = data[i].id
    }

    var newUser = {
        id: id + 1,
        name: name,
        job: job
    }

    data.push(newUser)

    res.send(newUser);

};