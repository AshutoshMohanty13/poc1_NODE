const fs = require("fs");
const { validationResult } = require("express-validator/check");
const logger = require("../utils/logger");
const crypto = require('crypto');

let rawData = fs.readFileSync("./data/users.json");
let data = JSON.parse(rawData);
let iv = crypto.randomBytes(16);


exports.createUsers = (req, res) => {

    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.log({
                level: "error",
                message: "addUser validation error"
            });
            res.send(error);
            return;
        }

        // aes 256-bit cipher block chaining (cbc) encryption/decryption
        let secret_message = req.body.password;
        let key = '12345678123456781234567812345678';

        let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        let encrypted = cipher.update(secret_message, 'utf-8', 'hex');
        encrypted += cipher.final('hex');

        //console.log('encrypted: ' + encrypted)

        //create an object of the new item
        let newUser = {
            id: req.body.id,
            name: req.body.name,
            password: encrypted,
            profession: req.body.profession
        };
        data.push(newUser);
        logger.log({
            level: "info",
            message: "data successfully pushed"
        });
        fs.writeFile("./data/users.json", JSON.stringify(data), (err) => {
            if (err) {
                logger.log({
                    level: "error",
                    message: "error in writing the data in the json file"
                });
                throw err;
            }
        });
        //status code 201 means successfully created
        res.status(201).json(newUser);
    } catch (ex) {
        console.log(ex);
        logger.log({
            level: "error",
            message: ex
        });
        res.sendStatus(500);
    }



};

