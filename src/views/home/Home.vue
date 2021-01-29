<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";

import {getHomeMultidata} from "@/network/home";
import RecommendView from "@/views/home/childComps/RecommendView";

export default {
  name: "Home",
  components:{
    RecommendView,
    NavBar,
    HomeSwiper,
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMultidata().then((res)=>{
      console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    }).catch((error)=>{
      this.result = error
    })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
