'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = Schema({
    nombre: String,
    direccion: String,
    descripcion: String,
    imagen: String,
    precio: String,
    
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
