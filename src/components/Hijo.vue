<template>
  <v-container class="size-div-hijo mt-10 mb-10">
    <v-row class="text-center">
      <v-col cols="12">
        <h2
          class="display-2 font-weight-bold mb-3"
          style="color: blue"
        >
          COMPONENTE HIJO
        </h2>
      </v-col>
      <v-col>
        <p>Ingrese un número para enviar al componente padre</p>
      </v-col>
      <v-col cols="12">
        <form>
          <v-text-field
            placeholder="Ingrese dato"
            type="number"
            v-model="NumeroInsertadoHijo"
          />
          <v-btn
            color="blue"
            @click="EnviarPadre()"
          >
            Enviar
          </v-btn>
        </form>
      </v-col>
      <v-vol>
        <h4
          style="color: blue"
        >
          EL PADRE ENVIO
        </h4>
        <p>Valor: {{ valorRecibido }}</p>
      </v-vol>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Hijo',
  data () {
    // Establecemos las variables
    return {
      NumeroInsertadoHijo: null
    }
  },
  props: {
    // Establecemos las propiedades del atributo dinamico que recibiremos del padre
    valorRecibido: {
      type: Number,
      default: null
    }
  },
  methods: {
    // Con emit logramos comunicarnos entre hijo y padre, entonces este metodo crea el evento
    // escucharHijo el cual lo recibimos y lo usamos en el padre. Luego con NumeroInsertadoHijo
    // le entregamos el valor escrito en el input del hijo.
    EnviarPadre () {
      alert(this.NumeroInsertadoHijo)
      this.$emit('escucharHijo', this.NumeroInsertadoHijo)
    }
  }
}
</script>

<style>
.size-div-hijo {
  width: 90% !important;
  /* height: 90% !important; */
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  border-color: blue;
}
</style>
