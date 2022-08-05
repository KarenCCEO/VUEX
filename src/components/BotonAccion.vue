<template>
  <button>{{textoButon}}</button>
</template>

<script>
export default {
    props:{
        estado:Boolean
    },
    computed:{
        textoButon(){
            //si el estado es verdadero entonces escribe aumentar si es falso entonces escribe disminuir
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    }

}
</script>

<style>

</style>