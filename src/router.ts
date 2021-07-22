import List from "./pages/List.vue"
import Detail from "./pages/Detail.vue"
import {createRouter,createWebHashHistory} from 'vue-router'

const routes=[{
    path:'/list',
    component:List
},{
    path:'/detail',
    component:Detail
}]


const router=createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router