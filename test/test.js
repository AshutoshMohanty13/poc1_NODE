const expect = require('chai').expect;
var assert = require("chai").assert;
const addUser = require('../controllers/addUsers');

describe("addUser Testing", () => {
    const user = {
        "id": 2,
        "name": "mohit",
        "password": "password2",
        "profession": "lead"    
    }
    
    it('should throw error if status code is not 201', (done) =>{
        //this.timeout(10000);    
        addUser.createUsers(user, (resp, err) => {
            assert.deepEqual(resp.status, 201);
        })
    });
});
