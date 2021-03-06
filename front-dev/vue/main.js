"use strict";
import Vue from "vue"
import Router from 'vue-router'
import App from "./APP.vue"
import {tokenAjax,promiseAjax} from "./service/ajax"
// 挂载tokenAjax
$.tokenAjax=tokenAjax;
$.promiseAjax=promiseAjax;

import Home from "./components/Home/home.vue"
import Admin from "./components/Admin/admin.vue"
import adminHome from "./components/Admin/adminHome.vue"
import adminUserList from "./components/Admin/user/userList.vue";
import adminUserDetail from "./components/Admin/user/userDetail.vue";
import user from "./components/user/user.vue";
//import fenchPassWord from "./components/user/fetchPassWord.vue";
import userData from "./components/user/userData.vue";
import adminProjectList from "./components/Admin/project/project-list.vue";
import adminProjectEdit from "./components/Admin/project/project-edit.vue";
import project from "./components/Project/project.vue";
import projectList from "./components/Project/projectList.vue";
import projectDetail from "./components/Project/projectDetail.vue"
Vue.use(Router);

var router = new Router();


//动态监听和改变宽度
setInterval(function () {
    if($(document).width()>420){
        let rH=$(".right-content").height()+20;
        if(rH<window.screen.height){
            $(".header nav").height(window.screen.height);
        }else{
            $(".header nav").height(rH);
        }
    }
},250);

router.map({
    '/': {
        component: Home
    },
    "/admin":{
        name: 'admin',
        component:Admin,
        auth:true,
        subRoutes:{
            "/":{
                component:adminHome
            },
            "/user/":{
                component:adminUserList
            },
            "/user/:userId":{
                component:adminUserDetail
            },
            "/project/":{
                component:adminProjectList,
            },
            "/project/:id":{
                component:adminProjectEdit,
            }
        }
    },
    "/user/":{
        name:"user",
        component:user,
        subRoutes:{
            "/:userId":{
                component:userData
            },
            "/change/:userId":{
                component:adminUserDetail
            }
        }
    },
    "/project/":{
        component:project,
        subRoutes:{
            "/":{
                component:projectList
            },
            "/:projectId":{
                component:projectDetail
            }
        }
    }
});



router.beforeEach(function (transition) {
    if(transition.to.auth){
        //判断用户是否有权限访问本页面
        if(window.localStorage.getItem("token")&&window.localStorage.getItem("name")){
            $.tokenAjax("/me","get").then((data)=>{
                console.log(91,data);
                if(data.result.role>=10){
                    transition.next();
                };
            }).catch((error)=>{
                transition.redirect("/");
            })
        }else{
            transition.redirect("/");
        };
        //判断用户是否登陆,登陆才能访问个人页面
    }else {
        transition.next();
    }




});

router.start(App,"#app");

$('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
);


if($(document).width()>420){
    $("body").addClass("body-content-show");
}else{

}


$(document).on({
    dragleave:function(e){    //拖离
        e.preventDefault();
    },
    drop:function(e){  //拖后放
        e.preventDefault();
    },
    dragenter:function(e){    //拖进
        e.preventDefault();
    },
    dragover:function(e){    //拖来拖去
        e.preventDefault();
    }
});







