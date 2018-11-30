<template>
    <div id="scroll-wrap">
            <div>
            <ul class="tab-title">
                <li>
                    <router-link to='/home/shouye/today' active-class="active" tag='span'>今日10点上新</router-link>
                </li>
                <li>
                    <router-link to='/home/shouye/tomorrow' active-class="active" tag='span'>明日10点预告</router-link>                    
                </li>
            </ul>
            <keep-alive>
                <router-view :results='results'></router-view>                
            </keep-alive>
        </div>
    </div>
</template>

<script>
    //首页获取数据
import { Indicator } from 'mint-ui'
import axios from 'utils/http';

import Swiper from "components/common/index-list/swiper";
export default {
    components:{
        Swiper
    },
    data(){
        return {
            results:null,
            message:null
        }
    },
  async beforeCreate() {
      Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })  
        let result = await axios({
            method:'get',
            url:"/index/ajaxDealactList",
            params:{
                card_id: 4057,
                client_v: 1,
                page: 1,
                platform: "wap",
                type: "formal",
                page_key:'' 
            }
        })
        this.results = result
        
        Indicator.close()
    }
  
};
</script>


<style lang="stylus" scoped>
#scroll-wrap
    width 100%
    div 
        .tab-title 
            background-color #ffffff
            height 0.44rem
            width 100%
            display flex
            justify-content space-around
            position relative
            z-index 99
            li 
                display flex
                flex: 1
                justify-content center
                span 
                    height 100%
                    line-height 0.44rem
</style>
