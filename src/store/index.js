import {createStore} from "vuex";

export let store = createStore({
    state() {
        return {
            isOpenNavigation: false,
            errorPath: '',
            swiper: {}
        }
    },
    mutations: {
        setNavigation(state) {
            state.isOpenNavigation = !state.isOpenNavigation
        },
        setSwiper(state, swiper){
            state.swiper = swiper
        }
    }
})