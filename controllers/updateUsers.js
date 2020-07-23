const fs = require("fs");

let rawData = fs.readFileSync("./data/users.json");
let data = JSON.parse(rawData);

exports.updateUser = (req, res) => {
    try{
        
    let found = data.find((user) => {
        return user.id === parseInt(req.params.id);
    });    
    
    //check if user found
    if(found) {
        var targetIndex = data.indexOf(found);
        let updated = {
            id: found.id,
            name: req.body.name || data[targetIndex].name,
            password: req.body.password || data[targetIndex].password,
            profession: req.body.profession || data[targetIndex].profession

        };

        //replace object of data by the updated data
        data.splice(targetIndex, 1, updated);
        fs.writeFile("./data/users.json", JSON.stringify(data), (err) => {
            if(err) throw err;
        });

        
        res.status(201).json(updated);
    }
    else res.sendStatus(404);
}catch(ex){
    console.log(ex);
    res.sendStatus(500);
}
};