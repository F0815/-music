<template>
    <div class='shouye'>
    <header>
        <span><i class="icon iconfont icon-yuyin"></i></span>
        <p>
            <span class='fdj'><i class="icon iconfont icon-fangdajing"></i></span>
            <input type='text' placeholder='猜你喜欢 浮生'>
        </p>
        <span><i class="icon iconfont icon-gengduo-2"></i></span>
    </header>
    <section>
        <div class='routelink'>
            <span><router-link to='/rank' tag='span'>个性推荐</router-link></span>
            <span><router-link to='/radio'  tag='span'>主播电台</router-link></span>       
        </div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="../img/one.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../img/two.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../img/three.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../img/four.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../img/five.jpg" alt=""></swiper-slide>
        </swiper>
        <div class='iconlist'>
            <dl>
                <dt><i class="icon iconfont icon-tianjia"></i></dt>
                <dd>私人FM</dd>
            </dl>
            <dl>
                <dt><i class="icon iconfont icon-Instagram"></i></dt>
                <dd>每日推荐</dd>
            </dl>
            <dl>
                <dt><i class="icon iconfont icon-yinxiangbiji"></i></dt>
                <dd>歌单</dd>
            </dl>
            <dl>
                <dt><i class="icon iconfont icon-tianjia"></i></dt>
                <dd>私人FM</dd>
            </dl>
        </div>
          <router-view/>
    </section>
    <footer>
        <dl>
            <dt><i class="icon iconfont icon-infenicon18"></i></dt>
            <dd>发现</dd>
        </dl>
        <dl>
            <dt><i class="icon iconfont icon-bofang2"></i></dt>
            <dd>视频</dd>
        </dl>
        <dl>
            <dt><i class="icon iconfont icon-erji"></i></dt>
            <dd>我的</dd>
        </dl>
        <dl>
            <dt> <i class="icon iconfont icon-icongerenzhongxin-01"></i></dt>
            <dd>朋友</dd>
        </dl>
        <dl>
            <dt><i class="icon iconfont icon-gerenxinxi"></i></dt>
            <dd>账号</dd>
        </dl>
    </footer>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name:'shouye',
    data(){
    return{
        swiperOption:{

        }
    }
},
computed: {
    swiper(){
        return this.$refs.mySwiper.swiper
    }
},
components:{
    swiper,
    swiperSlide
}
}

</script>
<style>
    html,body,#app{
       width:100%;
       height:100%;
    }
    *{
        margin:0;
        padding:0;
        list-style: none;
    }
    .shouye{
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
      
    }
    header{
        width:100%;
        height:auto;
        box-sizing: border-box;
        padding:10px;
        display:flex;
        background:rgb(50,60,62);
        align-items: center;
        padding-top:30px;
    }
    header span{
        color:#fff;
        padding:0 7px;
        
    }
    header p{
        flex:1;
        text-align:center;
        background:rgb(89,98,97);
        padding:5px;
        position: relative;
         border-radius: 25px;
    }
    header p .fdj{
        position: absolute;
        top:5px;
        left:30px;
        color:rgb(159,165,165);
    }
    header p input{
        width:30%;
        border:none;
        background-color:rgb(89,98,97);
        color:rgb(159,165,165)
    }
    section{
        flex:1;
        width:100%;flex-shrink: 1;
    }
    section .routelink{
        box-sizing:border-box;
        align-items: center;
        display:flex;
        padding:10px 0;
        justify-content: space-around;
        background:rgb(50,60,62);
        color:#fff;
        font-weight:600;
    }
    section span{

        text-align:center;
    }
    footer{
        width:100%;
        height:45px;
        display:flex;
        box-sizing:border-box;
        background:rgb(244,235,238);
    }
    footer dl{
        flex:1;
        text-align:center;
        padding:5px;
    }
    footer dl dd{
        font-size:12px;
    }
    .swiper-container{
        width:100%;
        height:150px;
    }
    .swiper-container .swiper-slide{
        width:100%;
        height:150px;
    }
    .swiper-container .swiper-slide img{
        width:100%;
        height:100%;
    }
    .iconlist{
        width:100%;
        display:flex;
        text-align:center;
    }
    .iconlist dl{
        flex:1;
        padding:10px;
    }
    .iconlist dl i{
        border-radius:50%;
        background:rgb(50,60,62);
         padding:10px;
        color:#fff;
    }
    .iconlist dl dd{
        font-size:12px;
        line-height:35px;
    }
</style>