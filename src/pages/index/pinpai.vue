<template>
    <div id="scroll-wrap">
                <!-- <router-view :motherProduct='motherProduct'></router-view> -->
        <PinPai :motherProduct='motherProduct'></PinPai>
    </div>
</template>

<script>
    //轻奢获取数据
import PinPai from 'components/common/index-list/index-pinpai'
import { Indicator } from 'mint-ui'
import axios from 'utils/http';
//import { scroll } from 'utils/scroll'

import Swiper from "components/common/index-list/swiper";
export default {
    components:{
        Swiper,
        PinPai
    },
    data(){
        return {
            motherProduct:null
        }
    },
  async beforeCreate() {
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })  
        let result = await axios({
            method:'get',
            url:"/pop/ajaxGetList",
            params:{
                page: 1,
                item_per_page: 20,
            }
        })
        this.motherProduct = result
        Indicator.close()
    }
  
};
</script>

<style lang="stylus" scoped>
#scroll-wrap
    width 100%
    height 5.28rem
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


