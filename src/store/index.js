import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Estados a mostrar en los componentes
    title: 'Titulo declarado en el state',
    username: ''
  },
  getters: {
    // Los getters son recomendables para traer datos del state, así evitar usar directamente
    // el state en los componentes
    title: state => state.title + ' renderizado a traves de un getter',
    username: state => state.username + ' renderizado a traves de un getter'
  },
  mutations: {
    // Encargados de hacer las mutaciones en el state
    SET_USERNAME (state, username) {
      state.username = username
    }
  },
  actions: {
    // Funciones que devuelven una promesa, se comunican con el backend ejemplo:
    async GET_USERNAME ({ commit }, primaryKey) {
      // Desde el context o commit tiene acceso al state, getters, actions, etc. Tienes acceso al store
      // en general
      const res = await fetch(`http://localhost:8081/username/${primaryKey}`)
      // Extraemos el username del json mediante el await para que le de tiempo a recibir la respuesta
      const { username } = await res.json()

      // Aqui le decimos a las mutaciones que modifique este valor
      commit('SET_USERNAME', username)
    }
  },
  modules: {
    // Los usamos para englobar una store con todos sus state, actions, mutation, ya que podemos crear
    // un script separado y llamar a sus funciones desde los componentes indicando la ruta del modulo
    // y el script
  }
})
