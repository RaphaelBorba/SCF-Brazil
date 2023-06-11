var data =  require("./fakeData");

module.exports = function(req, res) {
  
    var name =  req.query.name;

    for(let i = 0; i < data.length;  i++) {
        if(data[i].name == name) {
            data[i] = null;
        }
    }

    res.send("success");

};