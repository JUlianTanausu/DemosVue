<template>
    <div id="restaurante-edit">
        <h2>Editar restaurante</h2>
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
        name: 'restaurante-edit',
        mounted(){
            this.id = this.$route.params.id;
            axios.get('http://localhost:3800/api/restaurantId/'+ this.id).then((respuesta) => {
                this.restaurante = respuesta.data.restaurant[0];
            });
        },
        data(){
            return{
                id: null,
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
                var id = this.id;

                var params = this.restaurante;
                console.log(params);
                axios.post('http://localhost:3800/api/update/'+id, params).then((respuesta)=>{


                        //redireccion
                        router.push('/restaurante/'+id);

                })
                .catch((error)=>{
                    console.log(error);
                });
            }
        }
    }
</script>
