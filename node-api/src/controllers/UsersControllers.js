const Users = require('../models/Users');

module.exports = {
    async store (req,res){
        const{login,password} = req.body;

        const users = await Users.create({login,password});

        return res.json(users);
    }, 
    async get(req,res){               
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        const users = await Users.findAll();
        
        return res.json(users);
    }
}