const { Owner } = require("../models");

const OwnersController = {
    async index(req, res){
        const owners = await Owner.find().populate('cars');
        res.status(200).json({owners: owners});
    },
    async show(req, res){
        try {
            const owner = await Owner.findById(req.params.id).populate('cars');

            res.status(302).json({owner: owner});
        } catch (e) {
            res.json({owner: "does not exist"});
        }
    },
    async create(req, res){
        const newOwner = new Owner(req.body);
        try {
            await newOwner.save();
            res.status(201).json({owner: newOwner});
        } catch (e) {
            res.json(e);
        }
    },
    async update(req, res){
        try {
            await Owner.updateOne({ _id: req.params.id }, req.body);
            const updatedOwner = await Owner.findById(req.params.id).populate('cars');

            res.status(200).json({owner: updatedOwner})
        } catch (e) {
            res.json(e);
        }
    },
    async destroy(req, res){
        try {
            await Owner.findByIdAndRemove(req.params.id);

            res.status(200).json({});
        } catch (e) {
            res.json(e);
        }
    }
}

module.exports = OwnersController;
