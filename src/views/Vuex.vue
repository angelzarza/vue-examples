<template>
  <v-container class="size-div-vuex mt-10">
    <v-row class="text-center">
      <v-col cols="12">
        <h1
          class="display-2 font-weight-bold mb-3"
          style="color: green"
        >
          VUEX
        </h1>
        <h2
          class="display-2 font-weight-bold mt-10"
          style="color: black"
        >
          <!-- Accedemos a la store y al state -->
          {{ $store.state }}
        </h2>
        <h2
          class="display-2 font-weight-bold mt-10"
          style="color: grey"
        >
          <!-- Accedemos a la store y al getter -->
          {{ $store.getters.title }}
        </h2>
        <h2
          class="display-2 font-weight-bold mt-10"
          style="color: blue"
        >
          <!-- Manera correcta de usar el getter -->
          {{ title }}
        </h2>
        <h2
          class="display-2 font-weight-bold mt-10"
          style="color: orange"
        >
          <!-- Getter que trae el contenido de actions -->
          Hola {{ username }}
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Importamos los mapGetters para trabajar con ellos de una forma mas adecuada
// Importamos la funcion para trabajar con actions
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Vuex',
  data () {
    return {
    }
  },

  mounted () {
    // Los mapActions se cargan en el mounted
    let i = 1
    setInterval(() => {
      // Recorremos el array y mostramos un nombre cada 2 segundos
      this.GET_USERNAME(i % 3 + 1)
      ++i
    }, 2000)
  },

  methods: {
    // Los mapActions se usan en los metodos
    // Destructuramos el array con spread y llamamos a la action
    ...mapActions([
      'GET_USERNAME'
    ])
  },

  computed: {
    // Los mapGetters se usan en las propiedades computadas
    ...mapGetters([
      'title'
    ]),
    ...mapGetters([
      'username'
    ])
  }
}
</script>

<style>
.size-div-vuex {
  /* width: 50px !important; */
  /* height: auto; */
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  border-color: gray;
}
</style>
