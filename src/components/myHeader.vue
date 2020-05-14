<template>
  <div class="container">
    <table></table>
    <div class="top_header">
        <div class="float-left text-left pt-2 mt-1">
            <img class="img_header" src="images/home.png" alt=""/><a class="text-muted" href="">首页</a>
            <img class="img_header ml-3" src="images/daohang.png" alt=""/><a class="text-muted" href="">山东</a>
        </div>
        <ul class="breadcrumb float-right mb-0">
            <li class="breadcrumb-item">
                <router-link v-if="this.$store.state.uname" class="font_small text-muted" to="/login" v-text="'欢迎你：'+this.$store.state.uname+'! |'"></router-link>
                <router-link v-else class="font_small text-muted" to="/login">你好，请登录&nbsp;|</router-link>
                <span>
                    <router-link v-if="this.$store.state.uname"  class="font_small text-danger" to="/login">退出登录</router-link>
                    <router-link v-else  class="font_small text-danger" to="/register">免费注册</router-link>
                </span>
            </li>
            <li class="breadcrumb-item">
                <router-link class="font_small text-muted" :to="{name:'mine',params:{uname:this.$store.state.uname}}">个人中心</router-link>
            </li>
            <li class="breadcrumb-item">
                <a class="font_small text-muted" href="">fresh会员</a>
            </li>
        </ul>
    </div>
    <div class="center_header">
        <a href=""><img class="w-100 p-0 m-0" src="images\aff1325f0d6d969a.jpg" alt=""/></a>
    </div>
    <div class="bottom_header">
        <div class="row">
           <div class="col-md-4 col-sm-12">
               <p class="logo text-danger font-weight-bold mb-sm-0">美家优鲜</p>
           </div>
           <div class="col-md-4 col-sm-12">
               <div class="input-group pt-md-4 mt-sm-2">
                   <input class="form-control font_small border border-success rounded-0 bg-transparent" type="text" placeholder="请输入您要搜索的内容"/>
                   <a class="bg-success text-white w-25 text-center align-content-center pt-1" href="">搜索</a>
               </div>
           </div>
           <div class="col-md-4 col-sm-12 text-md-center text-sm-left mt-4">
               <div class="pt-md-2">
                   <router-link :to="{name:'cart',params:{uname:this.$store.state.uname}}" class="border text-muted p-2">
                       <img src="images/shop_car1.png" alt=""/>
                       我的购物车
                   </router-link>
               </div>
           </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        
    }
}
</script>
<style scoped>
ul>li a{
    text-decoration: none;
}
ul>li a:hover{
    color: #f00;
}
.breadcrumb-item+.breadcrumb-item::before{
    content:"|";
}
.logo{
    font-size:50px;
    font-family:lobster;
}

.img_header{
    width:7%;
}
input.form-control:focus{
    border-color: #ccc;
    outline: none;
    box-shadow: none;
}
</style>