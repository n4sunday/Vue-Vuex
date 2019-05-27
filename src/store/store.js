import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store=new Vuex.Store({
    state:{
        food:'ต้มยำกุ้ง',
        sport:'มวยไทย'
    },
    mutations:{
        setFood(state,foodx){
            state.food=foodx //assign
        },
        setSport(state,sportx){
            state.sport=sportx
        }
    },
    getters:{
        food:state=>state.food,
        sport:state=>state.sport
    }
})