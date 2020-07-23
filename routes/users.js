const express = require("express");
const router = express.Router();
const fs = require("fs");
const getUsers = require("../controllers/getUsers");
const addUsers = require("../controllers/addUsers");
const updateUsers = require("../controllers/updateUsers");
const deleteUsers = require("../controllers/deleteUsers");


let rawData = fs.readFileSync("./data/users.json");
let data = JSON.parse(rawData);

//READ
//returns JSON data array
router.get("/", (req,res) => {
    res.status(200).json(data);
});

//returns an object from a data array find by ID
router.get("/:id", getUsers.getUser);

//CREATE
//add new object to data array

router.post("/", addUsers.createUsers);

//UPDATE
router.put("/:id", updateUsers.updateUser);

//DELETE
router.delete("/:id", deleteUsers.deleteUser);

module.exports = router;    
