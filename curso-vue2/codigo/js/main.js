Vue.component('peliculas', {
    template: `
        <h1>COMPOENENTE {{titulo}}</h1>
        `,
        data(){
            return {
                titulo: 'PELICULAS',
            }
        }
});

Vue.component('padre', {
    template: `<div>
        <h1>Componente padre</h1>
        <div>
            <hijo></hijo>
        </div>
        <div>`
});


Vue.component('hijo', {
    template: `<p style="background: yellow;">Soy un parrafo en el component hijo </p>`
});



Vue.component('frutas', {
    props: ['objeto'],
    
    mounted(){
        console.log(this.objeto);
    }
});


Vue.filter('mayusculas', (value) => value.toUpperCase());
new Vue({
    el: 'main',
    mounted(){// OnInit
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((respuesta) => {
                this.posts = respuesta.data;
            });
    },
    data: {
        elegido: 'peliculas',
        posts: null,
        texto: 'Hola mundo desde VUE2',
        nombre: 'Julian',
        apellido: 'Villar',
        nota: 5,
        peliculas: ['Batman', 'Apocalipsis', 'Los mercenarios', 'Spiderman'],
        frutas: [
            {nombre: 'Manzana', temporada: 'Invierno', precio: 'Bajo'},
            {nombre: 'Naranja', temporada: 'Otoño', precio: 'Medio'},
            {nombre: 'Cereza', temporada: 'Primavera', precio: 'Alto'},
            {nombre: 'Sandia', temporada: 'Verano', precio: 'Medio'},
        ],
        superfruta: {nombre: 'Mandarina', temporada: 'Verano', precio: 'Medio'},
        peliculaNueva: null,
        busqueda: null,
        confirmado: null
    },
    methods: {
        crearPelicula(){
           // alert(this.peliculaNueva);
           this.peliculas.unshift(this.peliculaNueva);
           this.peliculaNueva = null;
        },
        borrarPelicula(indice){
            this.peliculas.splice(indice, 1);

        },
        marcar(index){
            this.confirmado = index;
        }
    },

    //metodos que no se hacen en la vista
    computed: {
        nombreYapellidos(){
            var date = new Date();
            var year = date.getFullYear();
            return this.nombre +" "+this.apellido+" - Nota: "+ this.nota+"-"+year+" "+date.getMonth();
        },

        peliculasOrdenadas(){
            return this.peliculas.sort();
        },

        buscarFruta(){
            return this.frutas.filter((fruta) => fruta.nombre.includes(this.busqueda));
            
        }
    }

});

const vue2 = new Vue({
    el: '#app',
    data: {
        texto: 'Segunda instancia vue'
    }
});

const vue3 = new Vue({
    el: '#tercera',
    data: {
        texto: 'Tercera instancia vue'
    }
});