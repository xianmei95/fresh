<template>
  <div class="info" id="info">
                  <form action="">
                      <div class="title py-2 pl-5">我的信息</div>
                      <div>用户名：<input type="text" v-model="uname"></div>
                      <div>性&nbsp;别:
                          <input name="sex" type="radio" class="ml-5">男&nbsp;&nbsp; 
                          <input name="sex" type="radio" class="ml-5">女
                      </div>
                      <div>绑定电话: <input type="text" v-model="phone"></div>
                      <div>绑定邮箱: <input type="text" v-model="email"></div>
                      <button>保存更改</button>
                  </form>
              </div>
</template>

<script>
export default {
    data(){
        return{
            uname:this.$store.state.uname,
            phone:'',
            email:''
        }
    },
    mounted(){
        this.axios.get('/mine',{params:{uname:this.uname}}).then(res=>{
            let data=res.data.result[0]
            this.phone=data.phone
            this.email=data.email
        })
    }
}
</script>

<style>
.title{
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        margin-right:0 ;
    }
    
    form div,form button{
        margin:0 3rem 2rem 0;
        font-size: 1rem;
    }
    form button{
        background-color:#18a9f1 ;
        color: white;
        border: 0;
        outline: none;
        padding: 0.5rem;
        border-radius: 0.2rem;
    }
</style>