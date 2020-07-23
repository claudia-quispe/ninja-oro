<template> 
  <div class="componente">
    <h3>Your Gold: {{ NumGold }}</h3>
      <div class="row">
        <div class="col-sm-3">
          <Gold name="Farm" :minGold="10" :maxGold="20"/>
        </div>
        <div class="col-sm-3">
          <Gold name="Cave" :minGold="5" :maxGold="10"/>
        </div>
        <div class="col-sm-3">
          <Gold name="House" :minGold="2" :maxGold="5"/>
        </div>
        <div class="col-sm-3">
          <Gold name="Casino" :minGold="50" :maxGold="-50"/>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h6> Activity: </h6>
          <ul class="list-group">
            <li class="list-group-item" v-for="(Actividad, i) in Activity" v-bind:key="i">{{ Actividad }}</li>
          </ul>            
        </div>
      </div>
        <a href="#" class="btn btn-success" @click="reset" >Reset</a> 
  </div>
</template>

<script>
import Gold from '@/components/Gold.vue' //importo el oro a padre
import store from '@/store.js' //importo mi almacen de oro a padre

export default {
  name: 'FindGold', //nombre del padre
  data() { // TRAER LOS  DATOS DESDE EL ALMACEN STORE
      return store.state
    },
  components: {
    Gold
  },
  methods: {
    reset: function (event) { // truco event, preventDefault evitamos que la pagina se recargue (href #)
      event.preventDefault() 
      const respuesta = confirm("¿Deseas restaurar la página?") // acá añadimos el mensaje dentro de Confirm
      if (respuesta == true) { //acá damos la opción de resetear oro y actividades con un if
        store.resetGold() // 
        store.resetActivities()
      }
    }
  }
}

</script>



<style scoped>
.componente{
  margin-top: 20px;
  margin-left: 80px;
  margin-right: 20px;
}

h3 {
  margin: 20px 0 0;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.card {
  margin: auto;
  margin-top: 20px;
}
.btn {
  margin-top: 15px;
}
</style>
