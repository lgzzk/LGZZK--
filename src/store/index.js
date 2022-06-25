import {createStore} from "vuex";

export let store = createStore({
    state() {
        return {
            isOpenNavigation: false,
            errorPath: ''
        }
    },
    mutations: {
        setNavigation(state) {
            state.isOpenNavigation = !state.isOpenNavigation
        }
    }
})