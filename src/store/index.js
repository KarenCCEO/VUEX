import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 100
  },
  getters: {
  },
  //LAS MUTACIONES MODIFICAN EL VALOR DE UN STATE
  mutations: {
    incrementar(state){
      state.contador = state.contador +10
    },
    incrementarS(state, payload){
      state.contador = state.contador + payload
    },
    //payload es el valor que recibe la funcion
    decrementar(state, payload){
      state.contador =state.contador -payload
    },
    decrementarS(state){
      state.contador =state.contador -10
    }
  },
  //las acciones nos sirven para ejecutar una mutacion por que no se recomienda ejecutar una mutacion directamente
  actions: {
    //tambien hacen llamados a la api y a las bases de datos
//el comit ejecuta una mutacion 
    accionIncrementar({commit}){
      commit('incrementar')

    },
    accionIncrementarS({commit}){
      commit('incrementar', 10)

    },
    //disminuir con parametro 
    accionDisminuirS({commit}){

      commit('decrementar')
    },

    accionDisminuir({commit}, numero){

      commit('decrementar', numero)
    },
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero )
      } else{
        commit
      }

    }
  },
  modules: {
  }
})
