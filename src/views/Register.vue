<template>
    <div>
    <div class="top">
        <div class="login-top d-flex">
            <p class="logo">美家优鲜</p>
            <p class="welcome">欢迎注册</p>
        </div>
        <a href="">
            已有账号，请登录 >
        </a>  
    </div>
    <div class="content mt-5">
        <div class="steps">
            <div class="step1">
                <span>Ⅰ</span>
                <p>验证手机号</p>
            </div>
            <div class="steps-line">
                · · · · · · · · ·· · ·>
            </div>
            <div class="step1">
                <span>Ⅱ</span>
                <p>填写信息</p>
            </div>
            <div class="steps-line">
                · · · · · · · · ·· · ·>
            </div>
            <div class="step1">
                <span>Ⅲ</span>
                <p>注册成功</p>
            </div>
        </div>
        <div class="clear"></div>
        <div class="phone">
            用 户 名:<input v-model="uname" @focus="unameonfocus()" @blur="unameonblur()" id="uname" type="text" placeholder="请设置用户名"><br>
            <div id="unametip" class="mb-3"></div>
            手 机 号:<input v-model="phone" @focus="phoneonfocus()" @blur="phoneonblur()" id="phone" type="text" placeholder="建议常用手机号"><br>
            <div id="phonetip" class="mb-3"></div>
            设置密码:<input v-model="upwd" @focus="pwdonfocus()" @blur="pwdonblur()" id="password" type="text" placeholder="请设置密码"><br>
            <div id="passwordtip" class="mb-3"></div>
            确认密码:<input @focus="checkonfocus()" @blur="checkonblur()" id="check" type="text" placeholder="请再次输入密码"><br>
            <div id="checktip" class="mb-3"></div>
            电子邮箱:<input v-model="email" @focus="emailonfocus()" @blur="emailonblur()" id="email" type="text" placeholder="请输入邮箱"><br>
            <div id="emailtip" class="mb-3"></div>
        </div>
        <button @click="btnclick()">注册</button>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:'',
            phone:'',
            upwd:'',
            email:''
            
        }
    },
    methods:{
        phoneonfocus(){
            var phonetip=document.getElementById('phonetip');
            phonetip.innerHTML="提示：请输入11位数字手机号码";
        },
        phoneonblur(){
            var phone=document.getElementById('phone');
            var phonetip=document.getElementById('phonetip');
            var reg=/^1[3-8]\d{9}$/;
            if(phone.value==""){
                phonetip.innerHTML="提示：手机号码不能为空";
                return false
            }else{
                if(reg.test(phone.value)){
                    phonetip.innerHTML="";
                    return true
                }else{
                    phonetip.innerHTML="提示：格式错误";
                    return false
                }
            }
        },
        unameonfocus(){
            var unametip=document.getElementById('unametip');
            unametip.innerHTML="提示：用户名为11位以内字母、数字或下划线的组合";
        },
        unameonblur(){
            var uname=document.getElementById('uname');
            var unametip=document.getElementById('unametip');
            var reg=/^\w{1,11}$/;
            if(uname.value==""){
                unametip.innerHTML="提示：手机号码不能为空";
                return false
            }else{
                if(reg.test(uname.value)){
                    unametip.innerHTML="";
                    return true
                }else{
                    unametip.innerHTML="提示：格式错误";
                    return false
                }
            }
        },
        pwdonfocus(){
            var passwordtip=document.getElementById('passwordtip');
            passwordtip.innerHTML="提示：6-12位之间的字母、数字或下划线的组合"
        },
        pwdonblur(){
            var password=document.getElementById('password');
            var passwordtip=document.getElementById('passwordtip');
            var reg=/^\w{6,12}$/;
            if(password.value==""){
                passwordtip.innerHTML="提示：密码不能为空";
                return false
            }else{
                if(reg.test(password.value)){
                    passwordtip.innerHTML="";
                    return true
                }else{
                    passwordtip.innerHTML="提示：密码格式错误";
                    return false
                }
            }
        },
        checkonfocus(){
            var checktip=document.getElementById('checktip');
            checktip.innerHTML="提示：请再次确认密码"
        },
        checkonblur(){
            var check=document.getElementById('check');
            var checktip=document.getElementById('checktip');
            if(check.value==""){
                checktip.innerHTML="提示：确认密码不能为空";
                return false;
            }else{
                if(check.value==password.value){
                    checktip.innerHTML="";
                    return true;
                }else{
                    checktip.innerHTML="提示：密码与上述不一致";
                    return false
                }
            }
        },
        emailonfocus(){
            var emailtip=document.getElementById('emailtip');
            emailtip.innerHTML="提示：请输入正确邮箱"
        },
        emailonblur(){
            var email=document.getElementById('email');
            var emailtip=document.getElementById('emailtip');
            var reg=/^\w+@\w+\.\w+(\.cn)?$/;
            if(email.value==""){
                emailtip.innerHTML="提示：邮箱不能为空";
                return false;
            }else{
                if(reg.test(email.value)){
                    emailtip.innerHTML="";
                    return true;
                }else{
                    emailtip.innerHTML="提示：格式错误";
                    return false
                }
            }
        },
        btnclick(){
            if(this.unameonblur()==false){
                uname.focus()
            }else if(this.phoneonblur()==false){
                phone.focus()
            }else if(this.pwdonblur()==false){
                password.focus()
            }else if(this.checkonblur()==false){
                check.focus()
            }else if(this.emailonblur()==false){
                email.focus()
            }else{
                 this.axios.get("/register",{params:{uname:this.uname,phone:this.phone,upwd:this.upwd,email:this.email}}).then(result=>{
                    if(result.data.result.affectedRows>0){
                        alert('注册成功');
                        this.$router.push('/login')
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
}
.welcome{
    color:#666;
    font-size: 28px;
    margin-left: 5rem;
    margin-top: 1rem;

}
.top a{
    float: right;
    position: relative;
    bottom: 1rem;
    right: 3rem;
    color: #f00;
}
.content{
    height: 150px;
    margin:0 auto ;
    position: relative;
    top: 5rem;
    left:20rem;
}
.clear{
    clear: both;
    height: 0;
    line-height: 0;
    font-size: 0;
}
.steps{
    position: relative;
    right: 2rem;
}
.step1,.steps-line{
    float: left;
    font-size: 20px;
    text-align: center;
    margin-right: 2rem;
}
.phone{
    position: relative;
    top:5rem;
    right: 19rem;
    font-size: 20px;
}
input{
    margin-left: 1rem;
    margin-bottom: 1rem;
    width: 304px;
    height: 45px;
    padding-left: 1rem;
}
#phonetip,#unametip,#passwordtip,#checktip,#emailtip{
    color: #f00;
    font-size: 0.7rem;
}
button{
    width: 430px;
    height: 50px;
    color: #fff;
    font-weight: bold;
    background-color: #DC3545;
    border-radius: 2px;
    border-style: none;
    position: relative;
    top: 5rem;
    right: 19rem;
    font-size: 1.3rem;
}
</style>