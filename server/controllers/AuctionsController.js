const { Owner, Car } = require("../models");

const AuctionsController = {
    async sell_car(req, res){
        try {
            const car = await Car.findById(req.body.car_id);
            if (car.owner) {
                await Car.updateOne({ _id: req.body.car_id}, { $unset: {"owner": ""}});

                carOwner = await Owner.findById(car.owner);
                carOwner.cars.remove(car);

                await carOwner.save();

                res.status(200).json({car: `${car.model} - SOLD!`});
            } else {
                res.status(403).json({car: "does not have an owner"});
            }
        } catch (e) {
            res.status(404).json({car: "Not Found"});
        }
    },
    async buy_car(req, res) {
        try {
            const owner = await Owner.findById(req.body.owner_id);
            const car = await Car.findById(req.body.car_id);

            if (!car.owner) {
                await Car.updateOne({ _id: req.body.car_id}, {owner: owner._id});

                owner.cars.push(car);

                await owner.save();

                console.log(`car ${car.model} is yours!`);

                res.status(200).json(car.populate("owner"));
            } else {
                res.status(403).json({car: "already has an owner"});
            }
        } catch (e) {
            res.status(404).json({car: "Not Found"});
        }
    }
}

module.exports = AuctionsController;