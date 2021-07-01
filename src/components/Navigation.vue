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
            <div class="label recommendMusic">
                {{pageInformation[0].name}}
            </div>
            <div class="label classMusic">
                {{pageInformation[1].name}}
            </div>
            <div class="label myMusic">
                {{pageInformation[2].name}}
            </div>
            <div class="label mySongSheet">
                {{pageInformation[3].name}}
            </div>
            <div class="label search">
                <label>
                    <input type="text" class="searchFrame" placeholder="搜索音乐">
                </label>
                <input type="submit" value="搜索" class="searchButton">
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
                // 侧边栏数据信息
                pageInformation:[]
            }
        },
        created:function () {
            // sysApi.sys_getDictionary({}).then((res)=>{
            //     console.log(res)
            // });
            this.pageInformation.push({id:0,url:'recommendMusic',name:'推荐音乐'});
            this.pageInformation.push({id:1,url:'classMusic',name:'音乐分类'});
            this.pageInformation.push({id:2,url:'myMusic',name:'我的音乐'});
            this.pageInformation.push({id:3,url:'mySongSheet',name:'我的歌单'});
            this.pageInformation.push({id:4,url:'search',name:'搜索'});
        },
        methods: {

        }
    }
</script>

<style scoped>
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
        width: 450px;
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
    .searchButton:hover,.recommendMusic:hover,.classMusic:hover,.myMusic:hover,.mySongSheet:hover{
        cursor:pointer;
        color: #00f6ff;
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
