
<template>
    <div id="app">
        <div id="logo">
            <img class="logo" src="../assets/logo.png" alt="">
        </div>
        <div id="other">
            <div class="label">
            </div>
            <div class="label">
            </div>
            <div v-for="(item, index) of pageInformation" :key="index">
                <router-link :to="{path:item.url}" class="pageList" tag="div" v-if="item.class!=='search'">
                    <div :style="{'color':item.fontColor}" :class="['label',item.class]">
                        {{item.name}}
                    </div>
                </router-link>
                <div v-if="item.class==='search'" >
                    <label>
                        <input type="text" class="searchFrame" placeholder="搜索音乐">
                    </label>
                </div>
                <router-link :to="{path:item.url}" class="pageList" tag="div"  v-if="item.class==='search'" >
                    <div :class="['label',item.class]">
                        <input type="submit" value="搜索" class="searchButton">
                    </div>
                </router-link>
            </div>
        </div>
        <div id="user">
            <img class="userImg" src="../assets/logo.png" alt="">
            <div class="userName">{{msg}}</div>
        </div>
    </div>
</template>

<script>
    // import * as sysApi from "../base/api/system.js"
    export default {
        name: 'Navigation',
        props: {
            msg: String
        },
        data(){
            return{
                //判断是否绑定对应class
                isActive: true,
                hasError: true,
                // 侧边栏数据信息
                pageInformation:[],
                // 当前页面的路由
                thisRouter: ""
            }
        },
        created:function () {
            // sysApi.sys_getDictionary({}).then((res)=>{
            //     console.log(res)
            // });
            this.pageInformation.push({id:0,url:'recommendMusic',name:'推荐音乐',class:'recommendMusic',fontColor:'#FFF'});
            this.pageInformation.push({id:1,url:'classMusic',name:'音乐分类',class:'classMusic',fontColor:'#FFF'});
            this.pageInformation.push({id:2,url:'myMusic',name:'我的音乐',class:'myMusic',fontColor:'#FFF'});
            this.pageInformation.push({id:3,url:'mySongSheet',name:'我的歌单',class:'mySongSheet',fontColor:'#FFF'});
            this.pageInformation.push({id:4,url:'search',name:'搜索',class:'search',fontColor:'#FFF'});
            this.getUrl();

        },
        methods: {
            getUrl() {
                this.thisRouter=this.$route.path.split("/")[1];
                for (let i=0;i<this.pageInformation.length;i++){
                    this.pageInformation[i].fontColor="#FFF";
                    // eslint-disable-next-line no-empty
                    if(this.pageInformation[i].class===this.thisRouter){
                        this.pageInformation[i].fontColor="#00f6ff";
                    }
                }

                if(this.thisRouter===""){
                    this.pageInformation[0].fontColor="#00f6ff"
                }
            }
        },
        watch:{
            $route(to,from){
                this.thisRouter=to.path.split("/")[1];
                // eslint-disable-next-line no-empty
                for (let i=0;i<this.pageInformation.length;i++){
                    this.pageInformation[i].fontColor="#FFF";
                    // eslint-disable-next-line no-empty
                    if(this.pageInformation[i].class===this.thisRouter){
                        this.pageInformation[i].fontColor="#00f6ff";
                    }
                }
            }
        }
    }
</script>

<style scoped>
    html,body,#app{
        min-width: 1920px;
    }
    html, body{
        padding:0;
        margin:0;
        height: 100%;
        width: 100%;
    }
    #app{
        /*内边距*/
        padding:0;
        /*外边距*/
        margin:0;
        height: 100%;
        width: 100%;
        background-color: #000000;
    }
    #logo{
        float: left;
        width: 5%;
    }
    #logo,.logo{
        height: 90%;
        margin:5px 0 0 1%;
    }
    #other{
        float: left;
        width: 80%;
        height: 100%;
        box-sizing: border-box;
        /*border: solid 1px red;*/
    }
    .label{
        float: left;
        width: 150px;
        height: 100%;
        color: white;
        text-align:center;
        line-height:80px;
        font-weight:100;
        font-size: 22px;
        box-sizing: border-box;
        /*border: solid 1px red;*/
    }
    .search{
        width: 80px;
    }
    .searchFrame{
        float: left;
        width: 250px;
        height: 30px;
        margin:20px 0 0 100px;
        border: 0;
        outline: none;
        font-weight:100;
        font-size: 15px;
        padding:5px 10px;
    }
    /*.searchFrame::selection{*/
    /*    background:rgba(0,0,0,0);*/
    /*}*/
    .searchButton{
        width: 50px;
        height: 30px;
        color: white;
        text-align:center;
        font-weight:100;
        font-size: 22px;
        box-sizing: border-box;
        background-color: rgba(0,0,0,0);
        border: 0;

    }
    .searchButton::selection,.recommendMusic::selection,.classMusic::selection,.myMusic::selection,.mySongSheet::selection,.logo::selection,.userImg::selection,.userName::selection{
        background:rgba(0,0,0,0);
    }
    .searchButton:hover,.recommendMusic:hover,.classMusic:hover,.myMusic:hover,.mySongSheet:hover{
        cursor:pointer;
        color: #00f6ff !important;
    }
    #user{
        float: right;
        height: 100%;
        width: 10%;
    }
    .userImg{
        float: right;
        height: 60%;
        margin:20px 20px 0 0;
    }
    .userName{
        margin:0 10px 0 0;
        float: right;
        line-height:85px;
        font-weight:100;
        font-size: 22px;
        color: white;
    }
</style>
