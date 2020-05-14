<template>
    <div>
        <my-header></my-header>
        <div class="container">
        <!--生鲜>水果>火龙果-->
        <div class="topTitle d-flex border">
            <a href="" class="px-1 pt-1">生鲜 ></a><a href="" class="mt-1" v-text="`${datas.type}>`"></a><a href="" class="mt-1" v-text="datas.title"></a>
        </div>
        <!--购买详情-->
        <div class="content d-flex">
            <!--左侧大小图片-->
            <div class="content-img mt-5">
                <div style="width:400px; height:400px" class="middle">
                    <img :src="Imgurl" alt="" style="width:100%;height:100%">
                </div>
                <div class="small d-flex mt-5">
                    <img class="mr-2 indicator" src="images/product/disabled-prev.png" alt="">
                    <ul class="list-unstyled" v-for="(img,index) of imgurl" :key="index">
                        <li class="px-1" @click="getIndex(img)">
                            <img :src="img" alt="" style="width:50px;height:50px">
                        </li>
                    </ul>
                    <img class="mr-2 indicator" src="images/product/disabled-next.png" alt="">
                </div>
            </div>
            <!--右侧产品类型规格-->
            <div class="content-text ml-5 mt-2">
                <div class="description text-left h4" v-text="datas.subtitle"></div>
                <div class="miaosha mt-4 text-left">
                    <p class="p-1">⏰美家秒杀</p>
                    <span class="d-flex">
                        <p class="mt-3">秒杀价:</p>
                        <p class="miaosha-price mt-1" v-text="`￥${datas.price}`"></p>
                    </span>
                    <span class="promise">承诺：{{datas.promise}}</span>
                    <div class="mt-3">
                        <div class="d-flex">
                            <p class="mb-0">选择总类</p>
                            <b class="ml-4">{{datas.spec}}</b>
                        </div>
                        <div class="type ml-5 mt-0">
                            <div v-for="(item,index) of specs" :key="index">
                                <router-link :to="{name:'detail',params:{id:lids[index]}}"  v-text="item" v-on:click.native="$router.go(0)">
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="count d-flex mt-1" id="cart">
                        数量：<button @click="minus()">-</button>
                        <span class="border px-3 pt-1">{{n}}</span>
                        <button @click="add()">+</button>
                    </div>
                    <div class="go-buy d-flex mt-3">
                        <button class="buy-now mr-3">立即购买</button>
                        <button @click="add_cart" class="takein-cart">🛒加入购物车</button>
                    </div>
                </div>
            </div>
        </div>
        <!--店长推荐-->
        <div>
            <div class="intro">
                <p class="intro-title">店长推荐</p>
            </div>
            <div class="intro-product row mx-0">
                <div class="col-2 mt-4">
                    <img src="images/product/intro01.jpg" alt="">
                    <p class="price">￥99.90</p>
                </div>
                <div class="col-2 mt-4">
                    <img src="images/product/intro02.jpg" alt="">
                    <p class="price">￥73.90</p>
                </div>
                <div class="col-2 mt-4">
                    <img src="images/product/intro03.jpg" alt="">
                    <p class="price">￥24.90</p>
                </div>
                <div class="col-2 mt-4">
                    <img src="images/product/intro04.jpg" alt="">
                    <p class="price">￥39.90</p>
                </div>
                <div class="col-2 mt-4">
                    <img src="images/product/intro05.jpg" alt="">
                    <p class="price">￥59.00</p>
                </div>
                <div class="col-2 mt-4">
                    <img src="images/product/intro06.jpg" alt="">
                    <p class="price">￥49.90</p>
                </div>
            </div>
        </div>
        <!--商品详情-->
        <div class="detail">
            <div class="detail-title d-flex">
                <p>商品详情</p>
                <p class="text-center">商品评价</p>
            </div>
            <div class="detail-img text-center mt-1">
                <img v-for="(item,index) of details" :key="index" :src="item+'.jpg'" alt="">
                <div class="detail-font text-left mt-5">
                    <p class="font-detail">生鲜“优鲜赔”绿色通道</p>
                    <p>生鲜自营商品的破损或腐坏等问题，请在商品签收后48小时内提交“优鲜赔”申请，100分钟内审核通过后即享补偿，无需返回商品；非鲜活易腐类商品需上门取件。</p>
                    <p class="font-detail">生鲜商品售后政策</p>
                    <p>注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，美家优鲜不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若美家优鲜没有及时更新，请大家谅解！</p>
                    <p class="font-detail">权利声明</p>
                    <p>美家上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是美家重要的经营资源，未经许可，禁止非法转载使用。
                        注：本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。</p>
                    
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
            n:1,
            id:this.$route.params.id,
            details:[],
            imgmiddle:[],
            specs:[],
            lids:[],
            datas:'',
            imgurl:[],
            Imgurl:'',
            title:''
        }
    },
    methods:{
        add_cart(){
            if(!this.$store.state.uname){
                alert('请登录')
            }else{
                this.axios.get('/add_cart',{params:{id:this.id,uname:this.$store.   state.uname,img:this.Imgurl,price:this.datas.price,spec:this.datas.spec,count:this.n,title:this.title}})
                .then(res=>{
                    if(res.data==1){
                        alert('加入购物车成功')
                    }else{
                        alert('加入购物车失败')
                    }
                })
            }
        },
        minus(){
            this.n>1&&this.n--
        },
        add(){
            this.n++
        },
        getIndex(imgurl){
            this.borderColor="red"
            this.Imgurl=imgurl
        },
        myload(){
            //console.log(this.id)
            this.axios.get('/detail',{params:{id:this.id}}).then(res=>{
                //console.log(res)
                //获取响应数据
                this.datas=res.data.result[0]
                //console.log(this.datas)
                //详情图片数组
                this.details=res.data.result[0].details.split(',')
                //console.log(this.details)
                this.imgmiddle=res.data.result[0].imgmiddle.split(',')
                //console.log(this.imgmiddle)
                //规格
                this.specs=this.specs.concat(res.data.result[0].specs.split(','))
                //console.log(this.specs)
                //规格对应的id
                this.lids=this.lids.concat(res.data.result[0].lids.split(',')).map(Number)
                //console.log(this.lids)
                this.Imgurl=this.imgmiddle[0]+'.jpg'
                this.title=res.data.result[0].title
                //console.log(this.Imgurl)
                //console.log(this.imgmiddle.length)
                this.imgurl=[this.imgmiddle[0]+'.jpg',this.imgmiddle[1]+'.jpg',this.imgmiddle[2]+'.jpg',this.imgmiddle[3]+'.jpg',this.imgmiddle[4]+'.jpg']
                //console.log(this.imgurl)
            })
        }
    },
    created(){
        this.myload();
        
    },
    watch:{
        lid(){this.myload()}
    },
    
    components:{
        'myFooter':myFooter,
        'myHeader':myHeader
    }
    
}
</script>
<style scoped>

.topTitle>a{
    color: #333;
}
.topTitle>a:hover{
    color: #f55;
    text-decoration: none;
}
.indicator{
    height:10%;
    position: relative;
    top:0.5rem
}
.miaosha>p{
    background: #f55;
    color: #fff;
    font-size: 1.3rem;
    text-align: left;
}
.miaosha-price{
    color: #f55;
    font-size: 2rem;
}
b{
    color: #f11;
}
.type>div{
    margin-top: 0.7rem;
}
.specactive{
    border-color: #0aa1ed;
}
.type>div>a{
    color: #333;
    border:1px solid #999;
    height: 30px;
    padding: 0.3rem;
}
.type>div>a:hover{
    text-decoration: none;
}
.count>input{
    width: 10%;
}
.buy-now{
    height: 50px;
    width: 30%;
    background:#ffeded ;
    color: #ff4a6f;
    border: 1px solid #ff4a6f;
    border-radius: 0.2rem;
    font-size: 1.3rem;
    text-align: center;
    padding: 2px;
}
.takein-cart{
    height: 50px;
    width: 30%;
    background:#ff0036;
    color: #fff;
    border: 0px;
    border-radius: 0.2rem;
    font-size: 1.3rem;
    text-align: center;
    padding: 2px;
}
.intro{
    width: 100%;
    border-bottom:1px solid #ff4a6f ;
    background: #eeeeee;
}
.intro>p{
    width: 10%;
    height: 100%;
    background:#ff4a6f ;
    color: #fff;
    font-size: 1.5rem;
    margin-top: 30px;
    margin-bottom: 0px;
    padding: 5px;
}
.intro-product{
    background-color: #fff;
    
}
.price{
    font-size: 1.4rem;
    color: lightcoral;
    font-weight: bold;
    text-align: center;
}
.detail-title{
    width: 100%;
    border-bottom:1px solid #ff4a6f ;
    background: #eeeeee;
    margin-top: 30px;
}
.detail-title>p{
    width: 15%;
    height: 100%;
    background:#ff4a6f ;
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 0px;
    padding: 5px;
}
.font-detail{
    font-weight: bold;
    color: #f11;
}
</style>