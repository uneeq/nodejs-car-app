const express = require('express');
const router = express.Router();
const { 
    HomeController, 
    OwnersController,
    CarsController,
    AuctionsController
} = require('./controllers');

module.exports = (app) => {
    router.get('/', HomeController.index);
    router.get('/routes', HomeController.index);

    router.get('/owners', OwnersController.index);
    router.get('/owners/:id', OwnersController.show);
    router.post('/owners', OwnersController.create);
    router.patch('/owners/:id', OwnersController.update);
    router.delete('/owners/:id', OwnersController.destroy);

    router.get('/cars', CarsController.index);
    router.get('/cars/:id', CarsController.show);
    router.post('/cars', CarsController.create);
    router.patch('/cars/:id', CarsController.update);
    router.delete('/cars/:id', CarsController.destroy);

    router.post('/auctions/sell_car/', AuctionsController.sell_car);
    router.post('/auctions/buy_car/', AuctionsController.buy_car);

    app.use('/api', router);
};