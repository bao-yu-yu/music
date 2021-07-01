<template>
    <div id="app">
        <div class="share navigation">
            <Navigation msg="欧阳霆宇"/>
        </div>
        <div class="share page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navigation from './components/Navigation.vue'

    export default {
        name: 'App',
        components: {
            // 导航栏
            Navigation
        }
    }
</script>


<style>
    html, body{
        padding:0;
        margin:0;
        /*height: 937px;*/
        height: 100%;
        width: 100%;
    }
    #app {
        /*内边距*/
        padding:0;
        /*外边距*/
        margin:0;
        /*内边框显示*/
        /*box-sizing: border-box;*/
        /*显示边框*/
        /*border: solid black 1px;*/
        height: 100%;
    }
    /*公用*/
    .share{
        padding:0;
        margin:0;
        /*左浮动*/
        float: left;
        /*box-sizing: border-box;*/
        /*border: solid red 1px;*/
    }
    /*导航栏*/
    .navigation{
        width: 100%;
        height: 80px;
    }
    /*侧边栏*/
    .sidebar{
        width: 190.3px;
        height: calc(100% - 80px); ;
    }
    /*内容页*/
    .page{
        width: 100%;
        height: calc(100% - 80px);
        overflow: scroll;
    }
    .page::-webkit-scrollbar {
        display: none;
    }
</style>
