const fs = require("fs");
const crypto = require('crypto');
const hash = crypto.createHash('sha256');
let rawData = fs.readFileSync("./data/users.json");
let data = JSON.parse(rawData);

// try{
//     //create an object of the new item
//    let newUser = {
//        id: 1,
//        name: 'a',
//        password: 'as12',
//        profession: 'asd'
//    };
//    data.push(newUser);
//    console.log(data);
//    fs.writeFile("./data/users.json", JSON.stringify(data), (err) => {
//        if(err) throw err;
//    });
//     //status code 201 means successfully created
//    //res.status(201).json(newUser);
// }catch(ex){
//    console.log(ex);
//    //res.sendStatus(500);
// }
function encrypt(text){
    var cipher = crypto.createCipher('aes-256-cbc','d6F3Efeq')
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
  }
  
  function decrypt(text){
    var decipher = crypto.createDecipher('aes-256-cbc','d6F3Efeq')
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }
  
  var hw = encrypt("hello world")
  decrypt(hw)

