<template>
<!--
    EL ESTADO Y EL NUMERO SE ENCUENTRAN DENTRO DE UN OBJETO
-->
  <button 
  @click="accionBoton({estado: estado, numero: 15})">{{textoButon}}</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:{
        estado:Boolean
    },
    computed:{
        textoButon(){
            //si el estado es verdadero entonces escribe aumentar si es falso entonces escribe disminuir
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    },
    methods:{
        ...mapActions(['accionBoton'])

    }

}
</script>

<style>

</style>