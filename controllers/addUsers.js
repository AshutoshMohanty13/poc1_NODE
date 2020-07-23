const fs = require("fs");
const { validationResult } = require("express-validator/check");

let rawData = fs.readFileSync("./data/users.json");
let data = JSON.parse(rawData);


exports.createUsers = (req, res) => {
    
    try{
        const error = validationResult(req);
        if(!error.isEmpty()){
            res.send(error);
            return;
        }
         //create an object of the new item
        let newUser = {
            id: req.body.id,
            name: req.body.name,
            password: req.body.password,
            profession: req.body.profession
        };
        data.push(newUser);
        fs.writeFile("./data/users.json", JSON.stringify(data), (err) => {
            if(err) throw err;
        });
         //status code 201 means successfully created
        res.status(201).json(newUser);
    }catch(ex){
        console.log(ex);
        res.sendStatus(500);
    }

       
   
};

