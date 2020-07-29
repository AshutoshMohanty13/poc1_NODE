const fs = require("fs");
let rawData = fs.readFileSync("./data/users.json");
let data = JSON.parse(rawData);

exports.getUser = (req, res) => {
    try{
    let found = data.find((user) => {
        //console.log(user.id === parseInt(req.params.id), user.id)
        return parseInt(user.id) === parseInt(req.params.id);
    });
    // console.log(parseInt(req.params.id));
    // console.log(found);

    if(found) res.status(200).json(found);
    else res.sendStatus(404);
}catch(ex){
    console.log(ex);
    res.sendStatus(500);
}
};