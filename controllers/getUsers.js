const fs = require("fs");
let rawData = fs.readFileSync("./data/users.json");
let data = JSON.parse(rawData);

exports.getUser = (req, res) => {
    try{
    let found = data.find((user) => {
        return user.id === parseInt(req.params.id);
    });

    if(found) res.status(200).json(found);
    else res.sendStatus(404);
}catch(ex){
    console.log(ex);
    res.sendStatus(500);
}
};