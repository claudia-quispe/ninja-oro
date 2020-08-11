import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
//creamos nuestro almacen/store
const store = new Vuex.Store({
  state: {
    golds: 0,
    activities: []
    
  },
  // si queremos procesar datos antes de usarlos creamos GETTERS
  getters: {

  },
  //para modificar el estado de nuestro almacen
  mutations: {
    saveGold(state, newGold) {
      state.golds = state.golds + newGold;
    },
    addActivity(state, activity) {
      state.activities = [...state.activities, activity];
    }
  }
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
