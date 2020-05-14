<template>
    <div id="banner">
    <!--动态将图片轮播图的容器高度设置成与图片一致-->
    <el-carousel height="400px">
      <!--遍历图片地址,动态生成轮播图-->
      <el-carousel-item v-for="(item,index) of dataimg" :key="index">
        <img :src="item.src" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>

export default {
	name: 'AboutUs',
	data() {
		return {
			dataimg: [{
						src: require('../../public/images/794bad69d4ea68cc.jpg'),
					},
					{
						src: require('../../public/images/0916710e79ace81f.jpg'),
					},
					{
						src: require('../../public/images/6291219798ba0da8.jpg'),
                    },
                    {
						src: require('../../public/images/4f62a62ccd59cffb.jpg'),
					}
				]
			}
		}
	}
</script>