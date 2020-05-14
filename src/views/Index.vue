<template>
<div>
<my-header></my-header>
<div class="container">
    <div class="row border-bottom pb-4">
        <!--左边商品列表-->
        <div class="col-md-2 col-sm-12 product-list">
            <ul class="list-unstyled mt-2">
                <li class="text-success p-3 text-center pr-4 mb-4 border-bottom">生鲜商品分类</li>
                <li class="d-flex mb-4 border-bottom pb-2">
                    <img src="images/fruit.png" alt="">
                    <router-link class="text-dark pl-2 pt-3" to="/detailList/1">新鲜水果</router-link>   
                    <img class="ml-3" src="images/go2.png" alt="">
                </li>
                <li class="d-flex mb-4">
                    <img src="images/haixian.png" alt="">
                    <router-link class="text-dark pl-2 pt-3" to="/detailList/2">海鲜水产</router-link>
                    <img class="ml-3" src="images/go2.png" alt="">
                </li>
                <li class="d-flex mb-4">
                    <img src="images/roulei.png" alt="">
                    <router-link class="text-dark pl-2 pt-3" to="/detailList/3">精选肉类</router-link>
                    <img class="ml-3" src="images/go2.png" alt="">
                </li>
                <li class="d-flex mb-4">
                    <img src="images/cream.png" alt="">
                    <router-link class="text-dark pl-2 pt-3" to="/detailList/4">冷饮冻食</router-link>
                    <img class="ml-3" src="images/go2.png" alt="">
                </li>
                <li class="d-flex">
                    <img src="images/vege.png" alt="">
                    <router-link class="text-dark pl-2 pt-3" to="/detailList/5">蔬菜蛋品</router-link>
                    <img class="ml-3" src="images/go2.png" alt="">
                </li>
            </ul>
        </div>
        <!--中间轮播图及详细列表-->
        <div class="col-md-9 col-sm-12">
            <!--详细列表-->
            <div></div>
            <!--轮播图上边的列表-->
            <ul class="breadcrumb pt-4 pb-4 mb-2 text-center bg-parent">
                <li class="breadcrumb-item">
                    <a class="text-success" href="">生鲜首页</a>
                </li>
                <li class="breadcrumb-item">
                    <a class="text-muted" href="">东家菜</a>
                </li>
                <li class="breadcrumb-item">
                    <a class="text-muted" href="">优选100</a>
                </li>
                <li class="breadcrumb-item">
                    <a class="text-muted" href="">试吃</a>
                </li>
                <li class="breadcrumb-item">
                    <a class="text-muted" href="">企业购</a>
                </li>
            </ul>
            <!--轮播图-->
            <my-carousel></my-carousel>
            <!--轮播图结束-->
        </div>
        <!--右侧广告-->
        <div class="col-md-1 col-sm-12 p-0 border-top">
            <div class="toutiao">
                <div class="toutiao-title mb-3">
                -生鲜头条-
                </div>
                <div class="toutiao-list">
                    <div class="mb-2"><a href="">· 营养精挑细选</a></div>
                    <div class="mb-2"><a href="">· 0元试吃上线</a></div>
                    <div class="mb-2"><a href="">· 用心做顿好饭</a></div>
                </div>
                <img src="images/9019d96f8bc7c610.png" alt="">
                <img src="images/7}5N)TCBRICQCYHZ}3FP20Z.png" alt="">
            </div>
        </div>
    </div>
    <!--首页推荐-->
    <div class="shenlinqijing text-center">
        <h1>首/页/推/荐</h1>
    </div>
    <!--水果栏-->
    <!--水果目录-->
    <div class="row mt-3">
        <div class="col-2 fruit-category text-center">
            <p class="category-title pt-3">新鲜水果</p>
            <p class="category-subtitle">应时而采，新鲜特供</p>
            <div class="category-keys mb-3 text-left">
                <a href="">车厘子</a>
                <a href="">猕猴桃</a>
            </div>
            <div class="category-keys text-left mb-3">
                <a href="">进口水果</a>
                <a href="">芒果</a>
            </div>
            <div class="category-keys text-left mb-4">
                <a href="">橙子</a>
                <a href="">苹果</a>
            </div>
            <router-link to="/detailList">更多水果 ></router-link>
        </div>
        <div class="col-6 pl-0">
            <img src="images/5fddd5ad8db4d861.jpg" alt="">
        </div>
        <div class="col-4">
            <img src="images/f837adb6c6263498.png" alt="">
        </div>
    </div>
    <!--水果推荐-->
    <div class="row p-2 bg-white">
        <div class="col-2" v-for="(item,index) of p1" :key="index">
            <router-link :to="{name:'detail',params:{id:item.Lid}}">
                <img class="w-100" :src="item.pic" alt="">
                <p class="description text-small text-left text-dark" v-text="item.descript"></p>
                <p class="price" v-text="`￥${item.price.toFixed(2)}`"></p>
            </router-link>
        </div>
        
    </div>
    <!--海鲜栏-->
    <!--海鲜目录-->
    <div class="row mt-3">
        <div class="col-2 sea-category text-center">
            <p class="category-title pt-3">海鲜水产</p>
            <p class="category-subtitle">新鲜海货，即时享受</p>
            <div class="category-keys mb-3 text-left">
                <a href="">海鲜礼盒</a>
                <a href="">虾类</a>
            </div>
            <div class="category-keys text-left mb-3">
                <a href="">软足类</a>
                <a href="">活鲜</a>
            </div>
            <div class="category-keys text-left mb-4">
                <a href="">海参</a>
                <a href="">扇贝</a>
            </div>
            <a href="">更多海鲜 ></a>
        </div>
        <div class="col-6 pl-0">
            <img src="images/e4500b6788ed4a54.jpg" alt="">
        </div>
        <div class="col-4">
            <img src="images/626da2a8bb37c261.png" alt="">
        </div>
    </div>
    <!--海鲜推荐-->
    <div class="row bg-white p-2">
        <div class="col-2" v-for="(item,index) of p2" :key="index">
            <router-link :to="{name:'detail',params:{id:item.Lid}}">
                <img class="w-100" :src="item.pic" alt="">
                <p class="description text-small text-left text-dark" v-text="item.descript"></p>
                <p class="price" v-text="`￥${item.price.toFixed(2)}`"></p>
            </router-link>
        </div>
        
    </div>
    <!--肉类栏-->
    <!--肉类目录-->
    <div class="row border mt-3">
        <div class="col-2 rou-category text-center">
            <p class="category-title pt-3">肉禽蛋品</p>
            <p class="category-subtitle">肉香四溢，大快朵颐</p>
            <div class="category-keys mb-3 text-left">
                <a href="">猪肉</a>
                <a href="">鸡翅</a>
            </div>
            <div class="category-keys text-left mb-3">
                <a href="">熟食</a>
                <a href="">牛排</a>
            </div>
            <div class="category-keys text-left mb-4">
                <a href="">羊肉</a>
                <a href="">冷鲜肉</a>
            </div>
            <a href="">更多肉类 ></a>
        </div>
        <div class="col-6 pl-0">
            <img src="images/c9418513a11293b6.jpg" alt="">
        </div>
        <div class="col-4">
            <img src="images/03e57d64b1802bd6.png" alt="">
        </div>
    </div>
    <!--肉类推荐-->
    <div class="row  bg-white p-2">
        <div class="col-2" v-for="(item,index) of p3" :key="index">
            <router-link :to="{name:'detail',params:{id:item.Lid}}">
                <img class="w-100" :src="item.pic" alt="">
                <p class="description text-small text-left text-dark" v-text="item.descript"></p>
                <p class="price" v-text="`￥${item.price.toFixed(2)}`"></p>
            </router-link>
        </div>
    </div>
    <!--冷饮蔬菜栏-->
    <div class="row mt-3">
        <!--冷饮栏-->
        <div class="col-6 border">
            <!--冷饮目录-->
            <div class="row">
                <div class="col-4 ice-category text-center">
                    <p class="category-title pt-3">冷冻饮品</p>
                    <p class="category-subtitle">速冻美味，乐享生活</p>
                    <div class="category-keys mb-3 text-left">
                        <a href="">水饺</a>
                        <a href="">方便菜</a>
                    </div>
                    <div class="category-keys text-left mb-3">
                        <a href="">酸奶</a>
                        <a href="">蛋糕</a>
                    </div>
                    <div class="category-keys text-left mb-4">
                        <a href="">冰淇淋</a>
                        <a href="">手抓饼</a>
                    </div>
                    <a href="">更多冷冻食品 ></a>
                </div>
                <div class="col-8 p-0">
                    <img src="images/04196578cf3c83d4.png" alt="">
                </div>
            </div>
            <!--冷饮推荐-->
            <div class="row bg-white">
                <div class="col-4" v-for="(item,index) of p4" :key="index">
            <router-link :to="{name:'detail',params:{id:item.Lid}}">
                <img class="w-100" :src="item.pic" alt="">
                <p class="description text-small text-left text-dark" v-text="item.descript"></p>
                <p class="price" v-text="`￥${item.price.toFixed(2)}`"></p>
            </router-link>
        </div>
            </div>
        </div>
        <!--蔬菜栏-->
        <div class="col-6 border">
            <!--蔬菜目录-->
            <div class="row">
                <div class="col-4 vege-category text-center">
                    <p class="category-title pt-3">新鲜蔬菜</p>
                    <p class="category-subtitle">来自田间，清香犹存</p>
                    <div class="category-keys mb-3 text-left">
                        <a href="">绿叶菜</a>
                        <a href="">地瓜</a>
                    </div>
                    <div class="category-keys text-left mb-3">
                        <a href="">泡菜</a>
                        <a href="">玉米</a>
                    </div>
                    <div class="category-keys text-left mb-4">
                        <a href="">山药</a>
                        <a href="">南瓜</a>
                    </div>
                    <a href="">更多蔬菜 ></a>
                </div>
                <div class="col-8 p-0">
                    <img src="images/a9821a233a498791.png" alt="">
                </div>
            </div>
            <!--蔬菜推荐-->
            <div class="row bg-white">
                <div class="col-4" v-for="(item,index) of p5" :key="index">
            <router-link :to="{name:'detail',params:{id:item.Lid}}">
                <img class="w-100" :src="item.pic" alt="">
                <p class="description text-small text-left text-dark" v-text="item.descript"></p>
                <p class="price" v-text="`￥${item.price.toFixed(2)}`"></p>
            </router-link>
        </div>
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
import myCarousel from '../components/myCarousel'
export default {
    data(){
        return{
            p1:[],
            p2:[],
            p3:[],
            p4:[],
            p5:[]
        }
    },
    components:{
        'myFooter':myFooter,
        'myHeader':myHeader,
        'myCarousel':myCarousel
    },
    created(){
        //console.log(`创建Index页面组件后...`);
        this.axios.get("/")
        .then(result=>{
             this.p1=result.data.result.slice(0,6)
             //console.log(this.p1)
             this.p2=result.data.result.slice(6,12)
             this.p3=result.data.result.slice(12,18)
             this.p4=result.data.result.slice(18,21)
             this.p5=result.data.result.slice(21)   
        })
    },
}
</script>
<style scoped>
a{
    color: #fff;
    text-decoration: none;
}
.product-list{
    background-color: #e8e8e8;
    font-size: 20px;
}
.product-list a{
    font-size:14px;
    font-weight: bold;
}
.toutiao{
    background-image:url('../../public/images/c8d3ff3e19061bbe606e0c.png');
}
.toutiao-title{
    background-color: #e8e8e8;
    font-size: 19px;
    font-weight: bold;
    border-top: 4px solid rgb(59, 148, 59);
}
.toutiao a{
    font-size: 14px;
    color:#e8e8e8;
}
.toutiao img{
    width:145%;
}
a:hover{
    color: darkblue;
    text-decoration: none;
}
.product-list img{
    width:25%;
    height: 25%;
    margin-top: 0.5rem
};
.text-middle{
    font-size: 12px;
}
.fruit-category{
    color: #fff;
    font-weight: bold;
    background-image: url('../../public/images/background-green.png');
    height: 300px;
}
.category-title{
    font-size: 2rem;
}
.category-subtitle{
    font-size: 1.1rem;
}
.fruit-category>.category-keys>a{
    border: 1px solid #fff;
    background-color: #00c65d;
    border-radius: 0.4rem;
    margin:4px 10px 4px 0;
    padding: 4px;
}

.description{
    font-size: 0.9rem;
    margin-top: 1.5rem;
    height: 45px;
    overflow: hidden;
    
}
.price{
    font-size: 1.4rem;
    color: lightcoral;
    font-weight: bold;
}
.sea-category{
    color: #fff;
    font-weight: bold;
    background-image: url('../../public/images/background-blue.jpg');
    height: 300px;
}
.sea-category>.category-keys>a{
    border: 1px solid #fff;
    background-color:#54afe6;
    border-radius: 0.4rem;
    margin:4px 10px 4px 0;
    padding: 4px;
}
.rou-category{
    color: #fff;
    font-weight: bold;
    background-image: url('../../public/images/background-pink.jpg');
    height: 300px;
}
.rou-category>.category-keys>a{
    border: 1px solid #fff;
    background-color:#f38e7c;
    border-radius: 0.4rem;
    margin:4px 10px 4px 0;
    padding: 4px;
}
.ice-category{
    color: #fff;
    font-weight: bold;
    background-image: url('../../public/images/background-zi.jpg');
    height: 300px;
}
.ice-category>.category-keys>a{
    border: 1px solid #fff;
    background-color:#d678ff;
    border-radius: 0.4rem;
    margin:4px 10px 4px 0;
    padding: 4px;
}
.vege-category{
    color: #fff;
    font-weight: bold;
    background-image: url('../../public/images/background-yellow.jpg');
    height: 300px;
}
.vege-category>.category-keys>a{
    border: 1px solid #fff;
    background-color:#fcc262;
    border-radius: 0.4rem;
    margin:4px 10px 4px 0;
    padding: 4px;
}
</style>