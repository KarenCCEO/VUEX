<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    
    <h1>Mi contador: {{$store.state.contador}}</h1>
    <!-- Llamando al contador con mapState -->
    <h1 :style="colorContador">Mi contador: {{ contador }}</h1>
    <!-- boton con acciones -->
    <button @click="accionIncrementar">Aumentar</button>
    <!-- boton con mutaciones -->
    <button @click="decrementarS">Decrementar</button>


    
    
    <BtnDisminuir/>
    <hr/>
    <!--botones dinamicos con BotonAccion.vue cambian gracias al estado-->
    <BotonAccionVue :estado="true"/>
    <BotonAccionVue :estado="false"/>

  </div>
</template>

<script>
// @ is an alias to /src
//<!--Todo state va dentro de una propiedad computada y todo mapMutation va dentro de un metodo o methods-->
import {mapState, mapMutations, mapActions} from 'vuex'

import BtnDisminuir from '../components/BtnDisminuir.vue'
import BotonAccionVue from '@/components/BotonAccion.vue'



export default {
  name: 'HomeView',
  components: {
    BtnDisminuir
    , BotonAccionVue
},
  data(){
    return{
      titulo:'Mi contador Vuex',
    }
  },

  computed:{
    //State de index.js mapeado con mapState sacando el dato del contador 
   
    ...mapState(['contador']),
    colorContador(){
      return [ this.contador> 100 ? {'color': 'green'} : {'color':'red'}]

    }

  },
  //tambien las acciones al igual que las mutaciones se mapenas en los metodos 
  methods:{
    ...mapMutations(['incrementar']),
    ...mapMutations(['decrementarS']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
