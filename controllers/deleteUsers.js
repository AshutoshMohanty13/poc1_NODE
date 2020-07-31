const fs = require("fs");
let rawData = fs.readFileSync("./data/users.json");
let data = JSON.parse(rawData);
const logger = require("../utils/logger");

exports.deleteUser = (req, res) => {
    try{
    let found = data.find((user) => {
        return user.id === parseInt(req.params.id);
    });

    if(found) {
        logger.log({
            level: "info",
            message: "user found"
        });
        var targetIndex = data.indexOf(found);
        data.pop(targetIndex);
        logger.log({
            level: "info",
            message: "user deleted"
        });
        fs.writeFile("./data/users.json", JSON.stringify(data), (err) => {
            if(err){
                logger.log({
                    level: "error",
                    message: err
                }); 
                throw (err);
            }
        });

        res.status(201).json(data);
    }
    else{
        logger.log({
            level: "error",
            message: "error in finding the user"
        });
        res.sendStatus(404)};
}catch(ex){
    console.log(ex);
    logger.log({
        level: "error",
        message: ex
    });
    res.sendStatus(500);
}
};