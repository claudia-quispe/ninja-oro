<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">Earns {{ minGold }} - {{ maxGold }} golds</p>
            <a href="#" class="btn btn-success" @click="generateGold" >Find Gold!</a>
        </div>
    </div>   
</template>

<script>
import store from '@/store.js'

export default {
    name: "Gold",
    props: {
        name: String,
        minGold: Number,
        maxGold: Number,
    },
    methods: {
        generateGold: function (ev) { //propiedad del objeto methods// generamos numero al azar
            ev.preventDefault(); //para que no recargue la pagina
            const newGold = Math.floor(Math.random() * (this.maxGold - this.minGold)) + this.minGold; //sumas ese numero al total de oros
            store.generateGold(newGold); // agrego una nueva actividad indicando cuantos oros gané
            //store.addActivity(`You win ${newGold} gold!`);
            //creamos DATE
            let date = new Date();
            let hour = date.getHours();
            let minutes = date.getMinutes();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let year = date.getFullYear();
            const instante = hour + ":" + minutes + "hrs." + day + "/" + month + "/" + year;
            // agregar nueva actividad
            store.addActivity(`${newGold < 0 ? "Lost :(" : "Earned"} ${newGold} golds from the ${this.name} (${instante})`
            );    
        }
    }
};
</script> 
<style scoped>

</style>