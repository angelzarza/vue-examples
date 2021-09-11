<template>
  <v-container class="size-div-padre mt-10">
    <v-row class="text-center">
      <v-col cols="12">
        <h2
          class="display-2 font-weight-bold mb-3"
          style="color: green"
        >
          COMPONENTE PADRE
        </h2>
      </v-col>
      <v-col>
        <p>Ingrese un número para enviar al componente hijo</p>
      </v-col>
      <v-col cols="12">
        <form>
          <v-text-field
            placeholder="Ingrese dato"
            type="number"
            v-model="NumeroInsertadoPadre"
          />
          <v-btn
            color="green"
            @click="EnviarHijo()"
          >
            Enviar
          </v-btn>
        </form>
      </v-col>
      <v-col
        cols="12"
        class="mt-3"
      >
        <h4 style="color: green">
          EL HIJO ENVIO
        </h4>
        <p>Valor: {{ VariableRecibida }}</p>
      </v-col>
      <v-row class="text-center">
        <v-col cols="12">
          <Hijo
            :valor-recibido="NumeroAEnviar"
            @escucharHijo="VariableHijo"
          />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import Hijo from '../components/Hijo'

export default {
  name: 'Padre',
  data () {
    // Establecemos las variables
    return {
      NumeroInsertadoPadre: null,
      NumeroAEnviar: null,
      VariableRecibida: null
    }
  },

  components: {
    Hijo
  },

  methods: {
    // Enviamos el valor insertado en el input vinculado con el v-model a la variable NumeroAEnviar
    // a traves del boton que ejecuta este metodo
    EnviarHijo () {
      this.NumeroAEnviar = this.NumeroInsertadoPadre
    },
    // Con este metodo escuchamos al hijo el cual esta asignado al evento escucharHijo creado
    // anteriormente en el componente hijo.
    VariableHijo (value) {
      alert(value)
      this.VariableRecibida = value
    }
  }
}
</script>

<style>
.size-div-padre {
  /* width: 50px !important; */
  /* height: auto; */
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  border-color: gray;
}
</style>
