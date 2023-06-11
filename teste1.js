var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    var name =  req.query.name;
    

    for(let i = 0; i < data.length;  i++) {
        
        if(data[i].name == name) {
            return res.send(data[i]);
        }
    }

    return res.status(404).send('Usuário não encontrado!')

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};