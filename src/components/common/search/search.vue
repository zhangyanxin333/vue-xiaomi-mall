<template>
    <div v-if="isget">
        <BreadLine>{{ $route.query.search }}</BreadLine>
        <div class='shopping-list'>
            <div class='total'>
                <a class="item-list clear" @click="$router.push({path:'/detail',query: {item_id: source.item_id,type:'jumei_mall'}})"
                :source='source' v-for='source of sources' :key="source.item_id"
                >
                    <div class="item-image">
                        <img class="product-img" :src='source.image_url_set.single["800"]'>
                    </div>
                    <div class="information">
                        <div class="information-title">
                            {{source.icon_tag}}{{ source.name }}
                        </div>
                        <div class="price-info">
                            <div class="fl">
                                <span class="jumei-price">￥{{source.sku_min_price}}</span>
                                <span class="market-price">￥{{source.market_price}}</span>
                            </div>
                        </div>
                        <div class="buy-num">
                            月销{{ source.buyer_number}}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import BreadLine from "components/layout/BreadLine";
import http from "utils/http";
//import { scroll } from "utils/scroll";
import BScroll from "better-scroll";


export default {
  data(){
    return {
        sources:[],
        isget:false
    } 
  },
  components: {
    BreadLine
  },
  async mounted(){
      let keyword = this.$route.query.search
      let result = await http({
      url: "/search/index",
      method: "get",
      params: {
        search:keyword,
        page:1,
        ajax:'get'
      }
    }); 
    this.sources = result.data.item_list
    this.isget = true
  },
  updated(){
      let bscroll = new BScroll('.shopping-list', {
        probeType: 1,
        click:true,    
    })
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/border.styl'

div
    height 6.67rem
    .shopping-list
        height 5.74rem
        .total
            height auto 
            .item-list
                border 0 0 1px 0,#eee
                background #fff
                display block
                height 1.25rem
                .item-image 
                    position relative
                    float left
                    width 1rem
                    background #fff
                    text-align center
                    overflow hidden
                    height 1rem
                    margin .1rem .1rem .03rem .1rem
                    img 
                        width 100%
                .information 
                    width 2.3rem
                    float left
                    font-size .14rem
                    color #fe4070
                    margin .13rem .15rem 0rem 0
                    height 1.07rem
                    position: relative
                    .information-title 
                        font-size .14rem
                        line-height .20rem
                        height .40rem
                        overflow hidden
                        color #333
                        word-wrap break-word
                        word-break break-all
                        .shoppe-tip 
                            font-size .14rem
                            line-height .20rem
                            padding: .01rem .04rem
                            background #fe4070
                            color #fff
                            border-radius .04rem
                            margin 0 .04rem
                    .price-info 
                        height .2rem
                        font-size 13px
                        position absolute
                        bottom .2rem
                        left 0
                        .fl
                            float left
                            .jumei-price 
                                font-size .18rem
                                color #fe4070
                            .market-price 
                                font-size 13px
                                color #999
                                text-decoration line-through
                                padding-left .1rem
                    .buy-num
                        font-size 11px
                        color #999
                    

                    
            



</style>

        
