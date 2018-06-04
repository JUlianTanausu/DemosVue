'use strict'

var bcrypt = require('bcrypt-nodejs');


var Restaurant = require('../models/restaurant');



function pruebas(req, res){
    res.status(200).send({
        message: 'Accion de pruebas'
    });
}


function saveRestaurant(req, res){
    var params = req.body;
    var restaurant = new Restaurant();

    if(params.nombre && params.direccion && params.descripcion && params.precio){
        restaurant.nombre = params.nombre;
        restaurant.direccion = params.direccion;
        restaurant.descripcion = params.descripcion;
        restaurant.imagen = null;
        restaurant.precio = params.precio;


        //validamos
        Restaurant.find({$or: [
                                {nombre: restaurant.nombre.toLowerCase()}
        ]}).exec((err, restaurants) => {
            if(err){
                return res.status(200).send({message: 'El restaurante que intentas registrar ya exixte'});
            }else{
                restaurant.save((err, restaurantStored) =>{
                    if(err){
                        return res.status(500).send({message: 'Error al guardar el restaurante'});
                    }
                    if(restaurantStored){
                        return res.status(200).send({restaurant: restaurantStored});
                    }else{
                        return res.status(404).send({message: 'No se ha registrado el restaurante'});
                    }
                });
            }
        });
    }else{
        return res.status(200).send({
            message: 'Envia todos los campos necesarios'
        })
    }
}

function getRestaurants(req, res){
    Restaurant.find({}).exec((err, restaurant) =>{
        if(err){
            return res.status(500).send({message: 'Error en la peticion'});
        }else{
            if(!restaurant){
                return res.status(404).send({message: 'No hay restaurantes'});
            }else{
                return res.status(200).send({restaurant});
            }
        }

    });
}


function getRestauranteID(req, res){
    var restaurantId = req.params.id;

    Restaurant.find({_id: restaurantId}).exec((err, restaurant) => {
        if(err){
            return res.status(500).send({Message: 'Error en la peticion'});
        }else{
            if(!restaurant){
                return res.status(404).send({message: 'No hay restaurante'});
            }else{
                return res.status(200).send({restaurant});
            }
        }
    });
}


function updateRestaurant(req, res){
    var restaurantId = req.params.id;
    var update = req.body;

    Restaurant.findByIdAndUpdate(restaurantId, update, {new:true}, (err, restaurantUpdate)=>{
        if(err){
            return res.status(500).send({message: 'Error en la peticion'});
        }

        if(!restaurantUpdate){
            return res.status(404).send({message: 'No se ha podido actualizar el usuario'});
        }

        return res.status(200).send({restaurant: restaurantUpdate});
    });
}


function deleteRestaurant(req, res){
    var restaurantId = req.params.id;

    Restaurant.findByIdAndRemove(restaurantId, (err, restaurantRemoved) =>{
        if(err){
            return res.status(500).send({message: 'Error en la peticion'});
        }else{
            if(!restaurantRemoved){
                return res.status(404).send({message: 'No se ha borrado el restaurante'});
            }else{
                return res.status(200).send({restaurant: restaurantRemoved});
            }
        }
    });
}


module.exports = {
    pruebas,
    getRestaurants,
    saveRestaurant,
    getRestauranteID,
    updateRestaurant,
    deleteRestaurant
}