import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 引入组件
import recommendMusic from "../components/page/recommendMusic";
import classMusic from "../components/page/classMusic";
import myMusic from "../components/page/myMusic";
import mySongSheet from "../components/page/mySongSheet";
import search from "../components/page/search";

const routes = [
    {
        path:"/recommendMusic",
        name:"推荐音乐",
        component: recommendMusic
    },
    {
        path:"/classMusic",
        name:"音乐分类",
        component: classMusic
    },
    {
        path:"/myMusic",
        name:"我的音乐",
        component: myMusic
    },
    {
        path:"/mySongSheet",
        name:"我的歌单",
        component: mySongSheet
    },
    {
        path:"/search",
        name:"搜索",
        component: search
    }
];

const router = new VueRouter({
    routes
});
export default router;
