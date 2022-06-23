import Project from "../pages/Project.vue";
import Message from "../pages/Message.vue";
import Friend from "../pages/Friend.vue";
import Version from "../pages/Version.vue";
import About from "../pages/About.vue";
import NotFound from "../components/NotFound.vue";
import Home from "../pages/Home.vue";
import {createRouter, createWebHashHistory} from "vue-router";

export const router = createRouter({
    base: '/',
    // mode: "history",
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                title: 'LGZZK-博客小站'
            }
        },
        {
            path: '/project',
            component: Project,
            meta: {
                title: 'LGZZK-Project'
            }
        },
        {
            path: '/message',
            component: Message,
            meta: {
                title: 'LGZZK-Message'
            }
        },
        {
            path: '/friend',
            component: Friend,
            meta: {
                title: 'LGZZK-Friend'
            }
        },
        {
            path: '/version',
            component: Version,
            meta: {
                title: 'LGZZK-Version'
            }
        },
        {
            path: '/about',
            component: About,
            meta: {
                title: 'LGZZK-About'
            }
        },
        {
            path: '/404',
            name: 'notfound',
            component: NotFound,
            meta: {
                title: 'LGZZK-NotFound'
            },
        }
    ]
})

router.beforeEach(function (to, from, next) {
    document.title = to.meta.title
    if (to.matched.length === 0) {
        router.push({
            name: 'notfound',
            params: {
                path: to.path
            }
        })
    }
    next()
})