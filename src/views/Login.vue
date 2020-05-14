<template>
    <div>
        <div class="top">
        <div class="login-top d-flex">
            <p class="logo">美家优鲜</p>
            <p class="welcome">欢迎登录</p>
        </div>
        <a href="">
            <p class="search">
                <img src="../../public/images/diaochawenjuan.png" alt="">
                登录页面，调查问卷
            </p>
        </a>
        
    </div>
    <div class="content mt-5 text-center">
        <div class="tip">
            <img src="../../public/images/tip.png" alt="">依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版<a href="">《美家隐私政策》</a>已上线，将更有利于保护您的个人隐私。
        </div>
        <div class="login-wrap">
            <table></table>
            <div class="login-form">
                <table>
                    <tr>
                        <td class="form-tip" colspan="2">
                            <img src="images/tip.png" alt="">美家不会以任何理由要求您转账汇款，谨防诈骗
                        </td>
                    </tr>
                    <tr class="form-title">
                        <td colspan="2">账户登录</td>
                    </tr>
                    <tr class="user">
                        <td colspan="2" class="pt-4 pb-0">
                            <img class="mt-1" src="../../public/images/user.png" alt="">
                            <input  v-model="uname" id="username" @focus="usernamefocus()" @blur="usernameonblur()" class="ml-1 pl-4" type="text" placeholder="邮箱/用户/登录手机">
                            <div class="text-danger"></div>
                        </td>
                    </tr>
                    <tr class="password">
                        <td colspan="2">
                            <img class="mt-1" src="../../public/images/password.png" alt="">
                            <input v-model="pwd" id="password" @focus="upwdfocus()" @blur="upwdonblur()" class="ml-1 pl-4" type="text" placeholder="请输入密码">
                            <div class="text-danger"></div>
                        </td>
                    </tr>
                    <tr class="forget">
                        <td colspan="2" class="pr-3 pb-4">
                            <a href="">忘记密码</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button @click="btnclick()">登录</button>
                        </td>
                    </tr>
                    <tr class="lastrow">
                        <td class="qw pt-5">
                            <img class="qq" src="../../public/images/qq.png" alt="">
                            <a href="">QQ</a>
                            |
                            <img class="wechat" src="../../public/images/wechat.png" alt="">
                            <a href="">微信</a>
                        </td>
                        <td class="register pt-5"><a href="/register">立即注册 </a></td>
                    </tr>
                </table>
            </div>
            <table></table>
        </div>
    </div>
    <div class="footer text-center mt-4">
        <div class="link">
            <a href="">关于我们</a>
            |
            <a href="">联系我们</a>
            |
            <a href="">人才招聘</a>
            |
            <a href="">商家入驻</a>
            |
            <a href="">广告服务</a>
            |
            <a href="">友情链接</a>
            |
            <a href="">销售联盟</a>
        </div>
        <div class="copyright mt-3">Copyright © 2004-2020  美家 版权所有</div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            pwd:"",
            isLogin:false
        }
    },
    created(){
        
    },
    methods:{
        usernamefocus(){
            var username=document.getElementById('username');
            
            var div=username.nextElementSibling;
            div.innerHTML="提示：11个字符以内的字母、数字或下划线的组合"
            
        },
        upwdfocus(){
            var password=document.getElementById('password');
            var div=password.nextElementSibling;
            div.innerHTML="提示：6-12位之间的字母、数字或下划线的组合"
        },
        usernameonblur(){
            var username=document.getElementById('username');
            var div=username.nextElementSibling;
            var reg=/^\w{1,11}$/;
            if(username.value==""){
                div.innerText="密码不能为空";
                return false
            }else{
                if(reg.test(username.value)){
                    div.innerText="";
                    return true;
                }else{
                    div.innerText="用户名格式错误"
                    return false
                }
            }
        },
        upwdonblur(){
            var password=document.getElementById('password');
            var div=password.nextElementSibling;
            var reg=/^\w{6,12}$/;
            if(password.value==""){
                div.innerText="密码不能为空";
                return false
            }else{
                if(reg.test(password.value)){
                    div.innerText="";
                    return true
                }else{
                    div.innerText="密码格式错误";
                    return false
                }
            }
        },
        btnclick(){
            if(this.usernameonblur()==false){
            username.focus()
            }else if(this.upwdonblur()==false){
                password.focus()
            }else{
                 this.axios.get("/login",{params:{uname:this.uname,pwd:this.pwd}}).then(result=>{
                     if(result.data.code==0){
                         alert('用户名或密码错误')
                     }else{
                         this.isLogin=true;
                         this.$store.dispatch('getUser',this.uname)
                         alert('登录成功');
                         this.$router.replace('/')
                         
                     }
                 })
            }
        },
    }
}
</script>
<style scoped>
a{
    color: #666;
}
a:hover{
   color: #f00; 
}
.logo{
    color: #DC3545;
    font-size: 48px;
    font-weight: bold;
    position: relative;
    float: left;
    left: 4rem;
    margin-bottom: 0;
}
.welcome{
    color:#666;
    font-size: 28px;
    margin-top:1rem;
    margin-left:5rem ;

}
.search{
    float: right;
    position: relative;
    bottom: 1rem;

}
.search img{
    width: 8%;
}
.tip{
    font-size: 12px;
    color: #666;
    background-color: #fff8f0;
}
.tip img{
    width: 1.3%;
    margin-bottom: 0.3rem;
}
.login-wrap{
    background-image: url('../../public/images/login-background.jpg');
}
.login-form{
    width: 380px;
    height: 460px;
    background-color: #fff;
    position: relative;
    left:50rem;
    margin-top: 10px;
    margin-bottom: 20px;
}
.form-tip img{
    width: 4%;
    margin-bottom: 0.3rem;
}
.form-tip{
    font-size:12px;
    color: #666;
    padding-top: 0.5rem;
    background-color: #fff8f0;
}
.form-title{
    height: 55px;
    color: crimson;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 0.1px solid #999;
}
.user,.password{
    height: 85px;
}
.user input,.password input{
    width: 304px;
    height: 45px;
    border: 1px solid #999;
    border-radius: 1px;
}
.user img,.password img{
    width: 42px;
    height: 44.8px;
    border: 1px solid #999;
    border-right: 0;
    border-radius: 1px;
    position: relative;
    bottom:0.18rem;
    margin: 0;
    left: 0.27rem;
}

.forget{
    height: 50px;
    text-align: right;
}
.forget>td>a{
    color:#666 ;
}
.forget>td>a:hover{
    color:#f00 ;
}
button{
    width: 310px;
    height: 40px;
    color: #fff;
    font-weight: bold;
    background-color: #DC3545;
    border-radius: 2px;
    border-style: none;
}
.qw,.register{
    width: 190px;
}
.qq,.wechat{
    width: 12%;
}
</style>