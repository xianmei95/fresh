<template>
    <div>
        <my-header></my-header>
        <div class="container">
        <div class="topTitle d-flex border p-3">
            <h2 class="pt-1">生鲜 ></h2><h4 class="px-3 py-2 border">{{type}}</h4>
        </div>
        <div class="order d-flex border p-2">
            <a href=""><h5 class="border p-2 mt-1 active">综合排序</h5></a>
            <a href=""><h5 class="border p-2 mt-1">销量</h5></a>
            <a href=""><h5 class="border p-2 mt-1">价格</h5></a>
            <a href=""><h5 class="border p-2 mt-1">评论数</h5></a>
            <a href=""><h5 class="border p-2 mt-1">上架时间</h5></a>
        </div>
        <div class="list row bg-white">
            <div v-for="(item,index) of data" :key="index" class="col-3 text-left">
                <img class="w-100" :src="item.pic" alt="">
                <p class="description text-small text-left"><router-link  :to="{name:'detail',params:{id:item.Lid}}" v-text="item.descript"></router-link></p>
                <p class="price" v-text="`￥${item.price.toFixed(2)}`"></p>
                <div class="d-flex">
                    <p class="sale-self mr-1 px-1">自营</p><p class="buy">放心购</p>
                </div>
                <div class="mb-1">
                    <a href="javascript:void(0)" :id="index" class="guanzhu border p-1" @click="Care(index)">关注♥</a><a class="list-cart border p-1" href="javascript:void(0)">🛒加入购物车</a>
                </div>
            </div>
            
        </div>
    </div>
    <my-footer></my-footer>
    </div>
</template>
<script>
import myFooter from '../components/myFooter'
import myHeader from '../components/myHeader'
export default {
    data(){
        return{
            family_id:this.$route.params.family_id,
            data:[],
            type:''
        }
    },
    created(){
        this.axios.get('/detailList',{params:{family_id:this.family_id}}).then(res=>{
           //console.log(res) 
           this.data=res.data.result;
           this.type=res.data.result[0].type;
        })
    },
    methods:{
        Care(index){
            let is_care=false;
            let care=document.getElementById(index)
            if(!this.is_care){
                care.innerText="已关注";
                this.is_care=true;
            }else{
                care.innerText="♥关注";
                this.is_care=false
            }
        }
    },
    components:{
        'myFooter':myFooter,
        'myHeader':myHeader
    }
}
</script>
<style scoped>
a{
    text-decoration: none;
}
.topTitle{
    background: #eee;
}
.topTitle >h3{
    font-weight: bolder;
}
.topTitle>h4{
    color: red;
}
.order h5{
    color: #333;
}
.order h5:visited{
    background: red;
    color: #fff;
    display: block;
}
.order a:hover{
    text-decoration: none;
}
.order h5:hover{
    color: red;
    display: block; 
}
.order h5:active{
    background: red;
    color: #fff;
    display: block;
}
.list>div:hover{
    border: 1px solid #ddd;
}
.description{
    font-size: 0.9rem;
    margin-top: 1.5rem;
    height: 48px;
}
.description>a{
    color: #333;
}
.price{
    font-size: 1.4rem;
    color: lightcoral;
    font-weight: bold;
    text-align: left;
}
.sale-self{
    background: #f55;
    color: #fff;
    border-radius: 0.1rem;
}
.buy{
    border: 1px solid #55c9ff;
    color: #55c9ff;
    border-radius: 0.1rem;
}
.guanzhu{
    color: #f55;
}
.guanzhu:hover{
    color: #f55;
    text-decoration: none;
}
.list-cart{
    color: #999;
}
.list-cart:hover{
    text-decoration: none;
    color: #f55;
}
</style>