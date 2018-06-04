'use strict'

var express = require('express');
var RestaurantController = require('../controllers/restaurant');

var api = express.Router();
var multipart = require('connect-multiparty');

api.get('/pruebas', RestaurantController.pruebas);
api.get('/restaurantes', RestaurantController.getRestaurants);
api.post('/save', RestaurantController.saveRestaurant);
api.get('/restaurantId/:id', RestaurantController.getRestauranteID);
api.post('/update/:id', RestaurantController.updateRestaurant);
api.delete('/delete/:id', RestaurantController.deleteRestaurant);


module.exports = api;