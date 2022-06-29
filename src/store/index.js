import {defineStore} from "pinia";

export const mainStore = defineStore("main", {
    state: () => ({
        isOpenNavigation: false,
        errorPath: '',
        swiper: null
    }),
    actions: {
        setNavigation() {
            this.isOpenNavigation = !this.isOpenNavigation
        }
    }
})