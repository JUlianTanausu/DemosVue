<template>
    <div id="restaurante-add">
        <h2>Crear nuevo restaurante</h2>
        <form v-on:submit.prevent="guardarRestaurante">
            <p>
                <label>Nombre</label>
                <input type="text" v-model="restaurante.nombre">
            </p>
            <p>
                <label>Direccion</label>
                <input type="text" v-model="restaurante.direccion">
            </p>
            <p>
                <label>Descripcion</label>
                <textarea v-model="restaurante.descripcion"></textarea>
            </p>
            <p>
                <label>Precio</label>
                <select v-model="restaurante.precio">
                    <option value="">Selecciona una opcion..</option>
                    <option value="bajo">Bajo</option>
                    <option value="normal">Medio</option>
                    <option value="alto">Alto</option>
                </select>
            </p>
            <input type="submit" value="Guardar Restaurante">
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name: 'restaurante-add',
        mounted(){

        },
        data(){
            return{
                restaurante: {
                    nombre: '',
                    direccion: '',
                    descripcion: '',
                    precio: 'normal'
                }
            };
        },

        methods: {
            guardarRestaurante(){
                var router = this.$router;

                var params = this.restaurante;
                console.log(params);
                axios.post('http://localhost:3800/api/save', params).then((respuesta)=>{


                        //redireccion
                        router.push('/restaurantes');

                })
                .catch((error)=>{
                    console.log(error);
                });
            }
        }
    }
</script>
