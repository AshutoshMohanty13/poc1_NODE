const fs = require("fs");
let rawData = fs.readFileSync("./data/users.json");
let data = JSON.parse(rawData);

exports.deleteUser = (req, res) => {
    try{
    let found = data.find((user) => {
        return user.id === parseInt(req.params.id);
    });

    if(found) {
        var targetIndex = data.indexOf(found);
        data.pop(targetIndex);
        fs.writeFile("./data/users.json", JSON.stringify(data), (err) => {
            if(err) throw (err);
        });

        res.status(201).json(data);
    }
    else res.sendStatus(404);
}catch(ex){
    console.log(ex);
    res.sendStatus(500);
}
};