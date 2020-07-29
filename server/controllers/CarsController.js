const { Car } = require("../models");

const CarsController = {
    async index(req, res){
        const cars = await Car.find().populate('owner');
        res.status(200).json({cars: cars});
    },
    async show(req, res){
        try {
            const car = await Car.findById(req.params.id).populate('owner');

            res.status(302).json({car: car});
        } catch (e) {
            res.json({car: "does not exist"});
        }
    },
    async create(req, res){
        const newCar = new Car(req.body);
        try {
            await newCar.save();
            res.status(201).json({car: newCar});
        } catch (e) {
            res.json(e);
        }
    },
    async update(req, res){
        try {
            await Car.updateOne({ _id: req.params.id }, req.body);
            const updatedCar = await Car.findById(req.params.id).populate('owner');

            res.status(200).json({car: updatedCar})
        } catch (e) {
            res.json(e);
        }
    },
    async destroy(req, res){
        try {
            await Car.findByIdAndRemove(req.params.id);

            res.status(200).json({});
        } catch (e) {
            res.json(e);
        }
    }
}

module.exports = CarsController;
