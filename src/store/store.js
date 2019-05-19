import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        product:[
            {
                name:"Burger",
                price:'0.99',
            },
            {
                name:"Hotdog",
                price:'1.99',
            },
            {
                name:"Panini",
                price:'2.99',
            }
        ]
    }
});