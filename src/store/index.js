import {createStore} from "vuex";

export let store = createStore({
    state() {
        return {
            isOpenNavigtion: false,
            errorPath: ''
        }
    },
    mutations: {
        setNavigtion(state) {
            state.isOpenNavigtion = !state.isOpenNavigtion
        }
    }
})