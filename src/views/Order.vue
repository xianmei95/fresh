<template>
  <div class="order">
      <my-header></my-header>
      <div class="container mt-4">
        <div class="text-left">
            <p class="address ml-5">填写收货地址</p>
            <table class="text-center">
                <tr>
                    <td class="px-5 py-2">收件人姓名</td>
                    <td class="px-5">省份</td>
                    <td class="px-5">城市</td>
                    <td class="px-5">区域</td>
                    <td class="px-5">详细地址</td>
                    <td class="px-5">手机号</td>
                </tr>
                <tr>
                    <td>
                        <input class="border-0 text-center" type="text" placeholder="请填写姓名">
                    </td>
                    <td>
                        <select name="" id="">
                            <option value="">请选择</option>
                        </select>
                    </td>
                    <td>
                        <select name="" id="">
                            <option value="">请选择</option>
                        </select>
                    </td>
                    <td>
                        <select name="" id="">
                            <option value="">请选择</option>
                        </select>
                    </td>
                    <td>
                        <input class="border-0 text-center" type="text" placeholder="请填写详细地址">
                    </td>
                    <td>
                        <input class="border-0 text-center" type="text" placeholder="请填写正确手机号">
                    </td>
                </tr>
            </table>
        </div>
        <div class="checkagain text-left mt-4 mb-3 ml-5">确认商品信息</div>
        <div class="content">
            <table class="text-center">
                <tr class="title">
                    <td class="py-2">商品信息</td>
                    <td class="pl-3">商品价格</td>
                    <td class="p-2 px-5">数量</td>
                    <td>小计</td>
                </tr>
                <tr v-for="(item,index) in data" :key="index">
                    <td class="info_td">
                        <div class="info d-flex">
                            <img class="m-1 mr-4" :src="item.product_img" alt="">
                        <span>
                            <p class="mb-2 mt-2" v-text="item.product_title"></p>
                            <p class="mb-0" v-text="item.product_price"></p>
                        </span>
                        </div>
                    </td>
                    <td class="pl-3" v-text="(item.product_spec)+'元'"></td>
                    <td>
                        <span class="px-2 py-1" v-text="'x'+item.count"></span>
                    </td>
                    <td v-text="(item.product_spec*item.count)+'元'"></td>
                </tr>
                <tr class="total">
                    <td>
                        
                        <router-link to="/">
                        <button @click="cancle" class="cancle">
                            &lt;&lt;返回首页
                        </button>
                        </router-link>
                    </td>
                    <td></td>
                    <td class="pr-3">
                        <p class="m-0">合计(不算运费):
                            <span class="total-price">{{totalPrice.toFixed(2)}}元</span>
                        </p>
                        <p class="m-0">共计{{total}}件商品</p>
                    </td>
                    <td class="go"><button class="px-2 py-2">确认并付款</button></td>
                </tr>
            </table>
        </div>
      </div>
  </div>
</template>

<script>
import myHeader from '../components/myHeader'
export default {
    data(){
        return{
            data:[],
            total:0,
        }
    },
    methods:{
        cancle(){
            this.axios.get('/cancle',{params:{uname:this.$store.state.uname}})
            .then(res=>{
                console.log(res)
            })
        }
    },
    mounted(){
        this.axios.get('/order',{params:{uname:this.$store.state.uname}})
        .then(res=>{
            console.log(res)
            this.data=res.data.result;
            //console.log(data)
        })
    },
    components:{
        'myHeader':myHeader
    },
    computed:{
        totalPrice(){
            let price=0;
            this.data.forEach(item=>{
                this.total++;
                price+=parseFloat(item.product_spec);
            })
            return price;
        }
    },
}
</script>

<style>
a{
    color: #333;
}
a:hover{
    text-decoration: none;
    color: tomato;
}
table{
    margin: 0 auto;
}
.container{
    position: relative;
}
.address,.checkagain{
    font-size: 1.2rem;
    font-weight: bold;
}
.content{
    font-size: 0.9rem;
}

tr{
    border: 1px solid #e8e8e8;
}
.title{
    background-color: #e8e8e8;
    color: #888;
    font-weight: bold;
}
.info_td{
    position: relative;
    width: 300px;
}
.info>img{
        width: 18%;
}
.total-price{
    color: tomato;
    font-size: 1rem;
    font-weight: bold;
}
.back,.go>button{
    background-color: tomato;
    border: 0;
    color: white;
    font-weight: bold;
}
.cancle{
    position: relative;
    right:30%;
    background-color:#f5f5f5;
    border: 0;
    outline: none;
}
</style>