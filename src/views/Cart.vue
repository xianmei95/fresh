<template>
    <div class="container">
        <my-header></my-header>
        <div class="text-left mt-4 mb-3 ml-4">全部商品{{data.length}}件</div>
        <div class="content">
            <table class="text-center">
                <tr class="title">
                    <td class="py-2">商品名称</td>
                    <td class="">商品价格(元)</td>
                    <td class="p-2 px-5">数量</td>
                    <td >小计</td>
                    <td class="p-2">操作</td>
                </tr>
                <tr v-for="(item,index) in data" :key="index">
                    <td class="d-flex">
                        <input type="checkbox" v-model="item.is_checked" @click="check(item)" class="mx-2 check">
                        <img class="m-1" :src="item.product_img" alt="">
                        <span>
                            <p class="mb-2 mt-2" v-text="item.product_title"></p>
                            <p class="mb-0" v-text="item.product_spec"></p>
                        </span>
                    </td>
                    <td v-text="item.product_price.toFixed(2)+'元'"></td>
                    <td>
                        <span class="px-2 py-1" v-text="'x'+item.count"></span>
                    </td>
                    <td v-text="(item.product_price*item.count).toFixed(2)+'元'"></td>
                    <td><button @click="del_cart(item.product_id)">删除</button></td>
                </tr>
                <tr class="total">
                    <td class="text-left p-2">
                        <input type="checkbox" class="m-1" v-model="AllChecked" @click="checkAll">全选
                    </td>
                    <td></td>
                    <td></td>
                    <td class="pr-3">
                        <p class="m-0">合计(不算运费):
                            <span class="total-price">{{totalPrice.toFixed(2)}}元</span>
                        </p>
                        <p class="m-0">共计{{total}}件商品</p>
                    </td>
                    <td class="go"><button class="px-2" @click="add_order">去结算</button></td>
                </tr>
            </table>
            <div class="mt-3 d-flex text-center">
                <button class="delAll border p-1 mr-1" @click="del_all">清空购物车</button>
                <p class="continue border p-2"><router-link to="/" class="" >继续购物</router-link></p>
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
import myHeader from '../components/myHeader'
export default{
    data(){
        return{
            uname:this.$route.params.uname,
            data:[],
            total:0,
            AllChecked:false
        }
    },
    computed:{
        totalPrice(){
            let price=0;
            this.data.forEach(item=>{
                if(item.is_checked){
                    price+=item.product_price*item.count;
                }
            })
            return price;
        }
    },
    methods:{
        //添加订单数据
        add_order(){
            this.data.forEach(item=>{
                //console.log('循环数组')
                if(item.is_checked){
                    //console.log('有选中的')
                    this.axios.get('/add_order',{params:{uname:this.uname,product_id:item.product_id,product_img:item.product_img,product_title:item.product_title,product_spec:item.product_spec,product_price:item.product_price,count:item.count}})
                    .then(res=>{
                        //console.log(res)
                    })
                }
            });
            this.$router.replace('/order/'+this.uname)
        },
        //单选
        check(item){
            if(!item.is_checked){
                this.total++;
            }else{
                this.total--;
            }
            this.AllChecked=this.total===this.data.length
        },
        //全选和反选
        checkAll(){
            const AllChecked=this.AllChecked;
            this.data.forEach(item=>{
                item.is_checked=!AllChecked;
            });
            this.AllChecked=!this.AllChecked
            this.total=this.AllChecked ? this.data.length : 0
        },
        cart_load(){
            this.axios.get('/cart',{params:{uname:this.uname}}).then(res=>{
                //console.log(res)
                this.data=res.data.result
            })
        },
        del_cart(product_id){
            this.axios.get('/del_cart',{params:{uname:this.uname,product_id}}).then(res=>{
                //console.log(res)
                this.cart_load()
            })
        },
        del_all(){
            this.axios.get('/del_all',{params:{uname:this.uname}}).then(res=>{
                //console.log(res)
                this.cart_load()
            })
        },
        select(){
            var checkall=document.getElementById('checkall');
            var check=document.getElementsByClassName('check');
            var k=0;
            for(var i=0;i<check.length;i++){}

        }
    },
    mounted(){
        this.cart_load()
    },
    components:{
        'myHeader':myHeader
    }
}
</script>
<style scoped>
    a{
        color: white;
    }
    a:hover{
        text-decoration: none;
        color:white
    }
    tr{
        background-color: #edfff9;
        border: 1px solid #aaa;
    }
    .title{
        background-color: #f7f7f7;
    }
    
    td>img{
        width: 20%;
    }
    td>input{
        align-self: center;
    }
    button{
        background-color: #f3f3f3;
        border: 1px solid #aaaaaa;
    }
    .total{
        background-color: #fef4ea;
    }
    .total-price{
        color: #ff3d3e;
    }
    .go{
        background-color: #ff3d3d;
    }
    .go>button{
        background-color: #ff3d3d;
        color: white;
        border: 0;
    }
    .total a{
        font-weight: bold;
        font-size: 1.2rem;
    }
    .link>a{
        color: #333;
    }
    .continue,.delAll{
        background-color: tomato;
        color: white;
    }
    .delAll{
        height: 42px;
    }
    
</style>