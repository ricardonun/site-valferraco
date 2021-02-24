const Products = require('../models/Products');
const multer = require('multer');
const multerConfig = require('../config/MulterConfig')

module.exports = {
    async store(req,res) {
        const img = req.file.originalname
        const {name,descrition,category} = req.body;
        const product = await Products.create({name,descrition,img,category}); 
        console.log(req.file)
        return res.json(product);

    },
    async get(req,res) {
 
        const product = await Products.findAll();
        
        return res.json(product);

    },
    async show(req,res){
        const product = await Products.findByPk(req.params.id)


        return res.json(product)
    },
    async update(req,res){

        const {name, descrition,img,category} = req.body
        const product = await Products.update({name,descrition,img,category}, {
            where: {id : req.params.id
            }
        })

        return res.json(product)
    },
    async delete(req,res){
        const product = await Products.destroy({where: {id: req.params.id}}
            )

            return res.json(product)
    },
    async showByCat(req,res){

        console.log(req.params)
        const product = await Products.findAll({
            where: { category: req.params.category}
        })


        return res.json(product)
    }
    
    
    
}