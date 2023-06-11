var data =  require("./fakeData");

function isString(x) {

    return Object.prototype.toString.call(x) === "[object String]"
}

module.exports =  function(req, res) {
  
    var id =  Number(req.query.id);
    const {name, job} = req.body

    if(isNaN(id)) return res.status(400).send('Id inválido!')

    if (!isString(name) || !isString(job)) return res.status(400).send('Formato incorreto!')

    if (name.length < 3 || job.length < 3) return res.status(400).send('Nome e Trabalho precisam ter tamanho maior ou igual a 3!')

    for(let i in data){
        console.log(data[i].id)
        if(data[i].id === id){

            data[i] = {
                id,
                name,
                job
            }

            return res.status(200).send(data[i])
        }
    }
    

    return res.status(404).send('Id não encontrado!');

};