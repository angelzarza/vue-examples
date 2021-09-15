# Vue examples

- Ejecutar el servidor con node server.js


Uso de las directivas basicas Vue
----------------------------------

- v-bind: Directiva para trabajar con atributos dinamicos asociandolos con variables. Su abreviatura es :nombreVariable. El uso común de data binding es manipular la lista de clases de un elemento y sus estilos.

- v-model: Directiva para crear bindings de datos bidireccionales, es decir lo que ocurra la zona de llamada del v-model="message" ejemplo en un input, tambien ocurrira tambien en sus llamadas secundarias {{ message }} en otras partes del código. Tambien se puede asignar a la data el mismo nombre de la variable para trabajar por ejemplo con listas guardando el valor escrito en un input en un array.

- v-on: Directiva para trabajar con eventos como por ejemplo v-on:click, tambien trabaja con la data y los metodos.


Uso de Vuex
------------

- State: Objeto centralizado donde manejar los datos, como por ejemplo gestionar el carrito de la compra de una tienda online. En resumen, es información que podemos cargar en los componentes.

- Actions: Las actions siempre devuelven promesas, como por ejemplo pedir un token de usuario al backend. Despues emite un commit a la mutation y es la que modifica el state. 

- Mutations: Se puede comunicar tanto con el componente directamente como recibir información de las actions, su funcón consiste en modificar o el componente o el state. Una vez que el state cambie, automaticamente todos los componentes perciben el cambio.


Ejemplos del proyecto
----------------------

- Comunicación entre componentes
