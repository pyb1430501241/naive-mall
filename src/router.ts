import List from "./pages/List.vue"
import Detail from "./pages/Detail.vue"
import {createRouter,createWebHashHistory} from 'vue-router'
import Personal from './pages/Personal.vue'


const routes=[{
    path:'/list',
    component:List
},{
    path:'/detail',
    component:Detail
}, {
    path : '/my-info',
    component : Personal
}]


const router=createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router