<template>
  <div class="container">
      <my-header></my-header>
      <div class="content d-flex mt-5">
          <div class="">
              <ul class="tree tabs">
                  <li>
                      <span class="open">
                          <img src="../../public/images/zhanghao.png" alt="">
                          账号管理
                      </span>
                      <ul class="mt-3 mb-3">
                          <li class="tab" @click="toggleTab('info')">
                              <a href="javascript:;">我的信息</a>
                          </li>
                          <li class="tab" @click="toggleTab('safe')">
                              <a href="javascript:;">安全管理</a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <span>
                          <img src="../../public/images/liebiao.png" alt="">
                          我的订单
                      </span>
                      <ul class="mt-3">
                          <li class="tab" @click="toggleTab('orderall')">
                              <a href="javascript:;">全部订单</a>
                          </li>
                          <li class="tab" @click="toggleTab('orderall')">
                              <a href="javascript:;">待付款</a>
                          </li>
                          <li class="tab" @click="toggleTab('orderall')">
                              <a href="javascript:;">待收货</a>
                          </li>
                          <li class="tab" @click="toggleTab('orderall')">
                              <a href="javascript:;">待评价</a>
                          </li>
                          <li class="tab" @click="toggleTab('orderall')">
                              <a href="javascript:;">退货退款</a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </div>
          <div class="bg-white rig">
              <info :is="currentTab" keep-alive></info>
          </div>
      </div>
  </div>
</template>

<script>
    import myHeader from '../components/myHeader'
    import info from '../components/info'
    import safe from '../components/safe'
    import orderall from '../components/orderall'
export default {
    data(){
        return{
            uname:this.$store.state.uname,
            currentTab:'info'
        }
    },
    components:{
        'myHeader':myHeader,
        info,
        safe,
        orderall
    },
    methods:{
        toggleTab(tab){
            this.currentTab=tab
        },
        start(){
            var spans=document.querySelectorAll("ul.tree>li>span");
            for(var span of spans){
                span.onclick=function(){
                    if(this.className=="open"){
                        this.className=""
                    }else{
                        var openSpan=document.querySelector("ul.tree>li>span.open");
                        if(openSpan!=null){
                            openSpan.className=""
                        }
                        this.className="open"
                    }
                }
            }
        },
    },
    mounted(){
        this.start()
        
    }
}
</script>
    
<style>
.container{
    text-align: center;
    vertical-align: middle;
}
    a{
        font-size: 1rem;
    }
    li{
        list-style: none;
        margin-bottom: 1rem;
    }
    li span{
        color: #eeeeee;
        padding-left: 20px;
        cursor: pointer;
        border-radius: 0.3rem;
    }
    li span img{
        width: 10%;
    }
    li ul{
        display: none;
    }
    .open+ul{
        display: block;
    }
    .tree{
        padding-left: 0;
    }
    .tree>li>span{
        background: #28a745;
        font-size: 1.3rem;
        padding:0.5rem 1rem 0.5rem 1rem
    }
    .rig{
        width: 700px;
        height: 390px;
    }
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